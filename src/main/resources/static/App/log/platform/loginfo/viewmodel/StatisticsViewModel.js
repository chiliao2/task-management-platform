Ext.define('App.log.platform.loginfo.viewmodel.StatisticsViewModel', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.StatisticsViewModel',
	requires : [ 'App.log.platform.loginfo.model.StatisticsModel' ],
	data : {
		columns : [ {
			text : 'ID',
			dataIndex : 'id',
			hidden : true,
			sortable : false
		}, {
			text : 'IP',
			dataIndex : 'ip'
		}, {
			text : '项目名称',
			dataIndex : 'projectName'
		}, {
			text : '状态',
			dataIndex : 'exceptionType',
			renderer : function(data) {
				if (data) {
					return "<img src='resources/icons/cross.png'/>";
				}
				return "<img src='resources/icons/ok.png'/>";
			}
		} ],
		search : {
			simpleSearch : true,
			advancedSearch : false,
			showAdd : false,
			showUpdate : false,
			showRemove : false,
			clearParam : function() {
				var me = this;
				var panel = me.gridPanel;
				var store = panel.getStore();
				var proxy = store.getProxy();
				proxy.setExtraParam('params.ip', null);
			},
			fields : {
				search0 : {
					ip : {
						name : 'ip',
						fieldLabel : 'ip',
						index : 1,
						width : 240,
						labelWidth : 80
					}
				},
				button : {}
			}
		}
	},
	stores : {
		Query : {
			autoLoad : false,
			model : 'App.log.platform.loginfo.model.StatisticsModel',
			pageSize : 25,
			remoteSort : true,
			proxy : {
				type : 'majax',
				url : 'loginfo/statistics',
				reader : {
					type : 'json',
					rootProperty : 'data',
					totalProperty : 'totalCount'
				}
			}
		}
	}
});
