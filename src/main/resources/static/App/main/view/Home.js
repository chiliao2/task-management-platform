Ext.define('App.main.view.Home', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.home',
	requires : ['App.absent.view.AbsentList'],
	title : '首页',
	layout : 'border',
	items : [{
	    xtype:'AbsentList',
	    region: 'center'
	    }]
})