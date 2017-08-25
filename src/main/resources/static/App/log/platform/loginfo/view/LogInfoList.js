Ext.define("App.log.platform.loginfo.view.LogInfoList", {
	extend : "App.components.grid.RecordableCrudGridPanel",
	alias : 'widget.LogInfoList',
	requires : [ 'App.log.platform.loginfo.viewmodel.LogInfoViewModel' ],
	viewModel : 'LogInfoModel',
	bind : {
		store : '{Query}',
		columns : '{columns}',
		search : '{search}'
	},
	editor : {
		formClazz : 'App.log.platform.loginfo.view.LogInfoEditor'
	}
});