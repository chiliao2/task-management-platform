Ext.define('App.log.platform.loginfo.viewmodel.LogInfoViewModel', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.LogInfoModel',
	requires : [ 'App.log.platform.loginfo.model.LogInfoModel', 'App.log.platform.loginfo.field.LevelStatus', 'App.log.platform.loginfo.field.ProjectNameCombo' ],
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
			text : '类名',
			dataIndex : 'clazzName'
		}, {
			text : '错误级别',
			dataIndex : 'level'
		}, {
			text : '信息',
			dataIndex : 'msg'
		}, {
			text : '时间',
			dataIndex : 'startTime'
		},  {
			text : '异常堆栈',
			dataIndex : 'exceptionStack',
			hidden : true
		} ],
		search : {
			simpleSearch : true,
			advancedSearch : false,
			showAdd : false,
			showUpdate : false,
			showRemove : false,
			clearParam : function() {
				var me = this;
				var me = this;
				var panel = me.gridPanel;
				var store = panel.getStore();
				var proxy = store.getProxy();
				proxy.setExtraParam('params.startTime', null);
				proxy.setExtraParam('params.endTime', null);
				proxy.setExtraParam('params.projectName', null);
				proxy.setExtraParam('params.level', null);
				var start = Ext.getCmp('startTimes');
				var end = Ext.getCmp('endTimes');
				start.setMaxValue(0);
				end.setMinValue(0);
			},
			fields : {
				search0 : {
					projectName : {
						name : 'projectName',
						fieldLabel : '项目名称',
						index : 1,
						width : 240,
						labelWidth : 80,
						xtype : 'textfield'
					},
					level : {
						name : 'level',
						fieldLabel : '错误级别',
						index : 2,
						width : 180,
						xtype : 'LevelStatusComboBox',
						labelWidth : 60
					},
					startTime : {
						name : 'startTime',
						fieldLabel : '开始时间',
						xtype : 'datefield',
						index : 3,
						width : 240,
						labelWidth : 60,
						editable : false,
						id : 'startTimes',
						format : 'Y-m-d',
						vtype : 'daterange',
						endDateField : 'endTimes'
					},
					endTime : {
						name : 'endTime',
						fieldLabel : '结束时间',
						xtype : 'datefield',
						index : 4,
						width : 240,
						labelWidth : 60,
						editable : false,
						id : 'endTimes',
						format : 'Y-m-d',
						vtype : 'daterange',
						startDateField : 'startTimes'
					}
				},
				button : {}
			}
		}
	},
	stores : {
		Query : {
			autoLoad : false,
			model : 'App.log.platform.loginfo.model.LogInfoModel',
			pageSize : 25,
			remoteSort : true,
			proxy : {
				type : 'majax',
				url : 'log/find_page',
				reader : {
					type : 'json',
					rootProperty : 'data',
					totalProperty : 'total'
				}
			}
		}
	}
});
