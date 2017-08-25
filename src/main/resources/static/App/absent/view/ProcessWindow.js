Ext.define('App.absent.view.ApplyWindow',{
    extend:'Ext.window.Window',
    title: '请假申请',
    requires:['App.absent.field.AssigneeCombo'],
    height: 200,
    width: 400,
    layout: 'fit',
    items:{
        xtype:'form',
        items: [
                      {
                          xtype:'textfield',
                          fieldLabel:'请假开始时间',
                          name:'startTime'
                      },{
                          xtype:'textfield',
                          fieldLabel:'请假结束时间',
                          name:'endTime'
                      },{
                          xtype:'textfield',
                          fieldLabel:'请假天数',
                          name:'num'
                      },{
                          xtype:'textfield',
                          fieldLabel:'请假原因',
                          name:'reason'
                      },{
                          fieldLabel:'审批人',
                          xtype:'AssigneeCombo',
                          name:'processer'
                      }
                ]
    },
   buttons:[{
            xtype:'button',
            text:'办理',
            handler:function(){
            var win = this.up('window');
                var form = this.up('window').down('form');
                form.submit({
                    url:'/task/add',
                    success:function(data){
                    win.close();
                        alert('办理成功');
                    }
                });
            }
   }]
});