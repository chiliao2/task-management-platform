Ext.define("App.log.platform.loginfo.view.LogInfoEditor", {
	extend : 'Extend.window.FormWindow',
	alias : 'widget.loginfo_editor',
	config : {
		window : {
			title : '日志信息',
			width : 1000,
			height : 800,
			modal : true,
			buttons:[{text:'关闭',handler:function(){
				this.up('window').close();
			}}]
		},
		
	},
	defaults : {
		columnWidth : 1,
		xtype : 'textfield',
		readOnly:true
	},
	items : [ {
		xtype : 'hidden',
		name : 'id'
	}, {
		name : 'projectName',
		fieldLabel : '项目名称'
	}, {
		name : 'clazzName',
		fieldLabel : '类名'
	}, {
		name : 'level',
		fieldLabel : '错误级别'
	}, {
		name : 'msg',
		fieldLabel : '信息',
		xtype:'textarea',
		height:200
	}, {
		name : 'startTime',
		fieldLabel : '时间'
	}, {
		name : 'exceptionStack',
		fieldLabel : '异常堆栈',
		xtype:'textarea',
		height:300
	} ]
})
