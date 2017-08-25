Ext.flash.Component.EXPRESS_INSTALL_URL = 'resources/flash/playerProductInstall.swf';
Ext.application( {
	name : 'App',
	appFolder : 'App',
	autoCreateViewport : 'App.main.view.Viewport',
	login : function(preOpts) {
		if (!Ext.getCmp('login_window')) {
			Ext.create('App.authorization.user.view.LoginWindow', {
				preOpts : preOpts,
				id : 'login_window'
			}).show();
		}
	},
	requires : [,'App.components.grid.column.CdtColumn', 'App.components.grid.column.HisColumn',  'App.components.grid.column.YmdColumn', 'App.components.grid.column.YmdHiColumn', 'App.components.grid.column.YmdHisColumn',
	            'Extend.form.field.GridField', 'Extend.form.field.CheckCombo', 'Extend.form.field.TreeComboBox'],
	logout : function() {
		var me = this;
		Extend.Msg.confirm( {
			title : '确认',
			msg : '您确定要注销当前用户吗？',
			buttons : Ext.MessageBox.YESNO,
			icon : Ext.MessageBox.QUESTION,
			iconCls : 'lock_key',
			maxWidth : 1024,
			callback : function(opt) {
				if (opt === 'yes') {
					Ext.Ajax.request( {
						url : 'security/logout',
						success : function(resp) {
							me.getMainView().down('north').fireEvent("onLogoutSuccess");
							window.location = "login.html";
						}
					});
				}
			}
		});
	},
	init : function(application) {
//		Ext.state.Manager.setProvider(new Ext.state.LocalStorageProvider());
		
		window.app = window.App = window.Application = window.application = application;
		
//		Ext.Ajax.request( {
//			url : 'get_localhost',
//			async : false,//同步调用否则 无法 get_user_menus中无法获取 登录用户的角色ID
//			success : function(resp) {
//				var result = Ext.JSON.decode(resp.responseText);
//				app.localhost = result.host;
//				app.role = result.role;
//				app.w3Account = result.w3Account;
//				app.dataanalyseUrl = result.dataanalyseUrl;
//				app.lrfpmdUrl = result.lrfpmdUrl;
//			}
//		});

		// 配置Ajax请求事件处理函数
	Ext.Ajax.on( {
		beforerequest : function(conn, options, eOpts) {
//			alert("before ajax");
			var timeout = options.timeout;
			if (timeout <= 30 * 1000) {
				timeout = 120 * 1000;
			}
			// 配置全局请求参数
		Ext.apply(options, {
			timeout : timeout,
			method : "POST",
			defaultHeaders : {
				'request_type' : 'ajax'
			}
		})
	},
	requestcomplete : function(conn, resp, options, eOpts) {
		if(resp.statusText == 'unLogin'){
        	location.href = "login.html";
        	return;
        }else if(resp.responseText.indexOf('timeout') == 0){
        	window.app.login();
        }
		// 取得此次请求的url地址
		var url = options.url;
		if (!Ext.String.startsWith(url, 'http')) {
			url = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1) + url;
		}
		var text = resp.responseText;
		text = Ext.String.trim(text);
		// 判断是否是json字符串格式
		if ((Ext.String.startsWith(text, '{') && Ext.String.endsWith(text, '\}')) || (Ext.String.startsWith(text, '[') && Ext.String.endsWith(text, ']'))) {
			try {
				resp.result = Ext.decode(text);
			} catch (e) {
				var error = '返回数据不是合法的JSON格式!';
				Extend.Msg.error('错误', error, {
					'返回数据' : text
				});
				return;
			}
			if (!Ext.isEmpty(resp.result)) {
				if (resp.result.success === false) {
					if (!Ext.isEmpty(resp.result.status)) {
						// 如果状态为-1表达未登录，2表示登录失败，1表示登录成功
						if (resp.result.status === -1) {
							application.login(options);
						} else if (resp.result.status === 3) {
							Extend.Msg.error('错误', resp.result.result);
						}
						return;
					}
					if (isDebug) {
						var error = resp.result.result ? resp.result.result : (resp.result.exception ? '业务处理发生异常！' : '业务处理失败：处理结果"success"为"false"！');
						Extend.Msg.info("提示", resp.result.result, resp.result.messages, resp.result.errors, resp.result.exception);
					} else {
						Extend.Msg.info("提示", resp.result.result, resp.result.messages, resp.result.errors);
					}
					return;
				}

			}
		} else if (text.indexOf("<html") > -1) {
			var responseText = null;
			if (isDebug === true) {
				responseText = text;
			}
			if (text.indexOf("请输入您的华为域账户") > -1) {
				Ext.Msg.alert("登陆超时", "长时间未操作，请重新登录！", function() {
					application.login(options);
				});
			} else if (text.indexOf("There is no Action mapped for namespace") > -1) {
				var error = '请求的Action不存在:' + url;
				Extend.Msg.error("错误", error, responseText);
				resp.responseText = "{\"success\":false,\"result\":\"" + error + "\"}";
			} else if (text.indexOf('Struts Problem Report') > -1) {
				var error = '请求的Action发生异常:' + url;
				Extend.Msg.error("错误", error, responseText);
				resp.responseText = '{"success":false,"exception":"' + responseText + '","result":"' + error + '"}';
			}
		}
	},
	requestexception : function(conn, resp, options, eOpts) {
		var status = resp.status;
		var detail = null;
		var url = options.url;
		if (!Ext.String.startsWith(url, 'http')) {
			url = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1) + url;
		}
		if (isDebug) {
			detail = {
				"Status code:" : resp.status,
				"Status text:" : resp.statusText
			};
			if (!Ext.isEmpty(resp.responseText)) {
				detail['Detail:'] = resp.responseText;
			}
		}
		if (status === 0 && resp.timedout === true) {
			var error = '请求超时：' + url;
			Extend.Msg.error('错误(status=' + status + ')', error);
		} else if (status === 404) {
			var error = '请求地址未找到：' + url;
			Extend.Msg.error('错误(status=' + status + ')', error, detail);
		} else if (status === -1) {
			var error = '请求终止：' + url;
			Ext.log.warn(error);
		} else {
			var error = '请求发生错误:' + url;
			Extend.Msg.error('错误(status=' + status + ')', error, detail);
		}
	}
	});
}
});