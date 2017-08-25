Ext.define("App.main.view.MessageClient", {
	extend : "Ext.flash.Component",
	alias : "widget.message_client",
	requires : [ 'App.main.controller.MessageClientController' ],
	controller : 'message_client_controller',
	url : 'resources/flash/MessageClient.swf',
	region : 'south',
	wmode : 'transparent',
	flashVars : {
		host : window.location.hostname,
		port : 9102,
		allowedDomain : window.location.hostname,
		consolable : isDebug,
		split : false
	},
	flashParams : {
		allowScriptAccess : 'always'
	},
	initComponent : function() {
		window.app.message = window.app.messageClient = this;
		var me = this;

		var count = 0;
		window.flashInited = function() {
			me.fireEvent('inited');
		};
		window.flashRecive = function(content) {
			me.fireEvent('receive', content);
		};
		window.flashConnected = function(host, port) {
			me.fireEvent('connected', host, port);
		};
		this.callParent();
		//延迟5秒开始监听
		Ext.defer(function() {
			app.message.subscribe('session.status.destroy', function(result) {
				Ext.Msg.alert("登陆超时", "长时间未操作，请重新登录！", function() {
					Ext.Ajax.request( {
						url : 'logout',
						success : function(resp) {
							window.location = "login.html";
						}
					});
				});
			});
		}, 5000);
	},
	send : function(msg, callback) {
		this.fireEvent('send', msg, callback);
	},
	subscribe : function(content, callback) {
		this.fireEvent('subscribe', content, callback);
	},
	unsubscribe : function(content) {
		this.fireEvent('unsubscribe', content);
	}
})