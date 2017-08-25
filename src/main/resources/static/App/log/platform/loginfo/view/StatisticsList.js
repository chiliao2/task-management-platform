Ext.define("App.log.platform.loginfo.view.StatisticsList", {
	extend : "App.components.grid.RecordableCrudGridPanel",
	alias : 'widget.StatisticsList',
	requires : [ 'App.log.platform.loginfo.viewmodel.StatisticsViewModel' ],
	viewModel : 'StatisticsViewModel',
	bind : {
		store : '{Query}',
		columns : '{columns}',
		search : '{search}'
	},
	viewConfig : {
		height : 50,
		getRowClass : function(record, index, rowParams, store) {
			var error = record.get('exceptionType');
			if (error) {
				return 'row-busy';
			} else {
				return 'row-disable'
			}
		}
	}

});