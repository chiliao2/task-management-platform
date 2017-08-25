Ext.define('App.absent.viewmodel.AbsentViewModel', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.AbsentViewModel',
	requires : [ 'App.absent.model.AbsentModel' ,'App.absent.field.AssigneeCombo'],
	data : {
		columns : [ {
			text : 'ID',
			dataIndex : 'id',
			hidden : true,
			sortable : false
		}, {
			text : '流水号',
			dataIndex : 'seq'
		}, {
			text : '请假开始日期',
			dataIndex : 'startTime'
		}, {
			text : '请假结束日期',
			dataIndex : 'endTime'
		}, {
			text : '请假天数',
			dataIndex : 'num'
		}, {
			text : '发起人',
			dataIndex : 'sponsor'
		}, {
			text : '操作',
			dataIndex:'id',
			renderer:function(data){
			return '<a href="#" onclick="process(\'' + data + '\')">办理</a>'
			}
		}],
		search : {
			simpleSearch : true,
			advancedSearch : false,
			showAdd : false,
			showUpdate : false,
			showRemove : false,
			fields : {
				search0 : {
				},
				button : {
				    applyAbsent:{
				        text:'请假申请',
				        xtype:'button',
				        handler:function(){
				            Ext.create('App.absent.view.ApplyWindow').show();
				        }
				    }
				}
			}
		}
	},
	stores : {
		Query : {
			autoLoad : false,
			model : 'App.absent.model.AbsentModel',
			pageSize : 25,
			remoteSort : true,
			proxy : {
				type : 'majax',
				url : 'task/tasks',
				reader : {
					type : 'json',
					rootProperty : 'data',
					totalProperty : 'total'
				}
			}
		}
	}
});
function process(data){
   var win= Ext.create('Ext.window.Window',{
        title:'办理',
        width:200,
        requires:['App.absent.field.AssigneeCombo'],
        height:200,
        items:{
            xtype:'form',
            items:[{
            xtype:'AssigneeCombo',
            name:'processer'
            }]
        },
        buttons:[{
            xtype:'button',
            text:'办理',
            handler:function(){
                win.down('form').submit({
                    url:'task/process',
                    params:{
                        taskId:data
                    },
                    success:function(data){
                        win.close();
                    }
                });
            }
        }]
    }).show();
}