Ext.define('App.commons.operationrecord.view.OperationRecordWindow', {
            extend : 'Extend.window.ModalWindow',
            alias : 'widget.OperationRecordWindow',
            requires : ['App.commons.operationrecord.view.OperationRecordList'],
            layout : 'border',
            title : '履历',
            config : {
                buttons : {
                    ok : {
                        text : '关闭',
                        handler : function()
                        {
                            this.up('OperationRecordWindow').close();
                        }
                    },
                    cancel : {
                        hidden : true
                    }
                }
            },
            initComponent : function()
            {
                this.items = [{
                            xtype : 'OperationRecordList',
                            region : 'center',
                            autuLoad : false
                        }];
                this.callParent(arguments);
            }
        })