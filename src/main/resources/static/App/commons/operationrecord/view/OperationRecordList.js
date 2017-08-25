Ext.define("App.commons.operationrecord.view.OperationRecordList", {
            extend : "Extend.grid.ExtendGridPanel",
            alias : 'widget.OperationRecordList',
            requires : ['App.commons.operationrecord.model.OperationRecordModel',
                    'App.commons.operationrecord.model.OperationRecordViewModel'],
            viewModel : 'OperationRecordViewModel',
            sortableColumns : false,
            bind : {
                columns : '{columns}'
            },
            initComponent : function()
            {
                var me = this;
                this.store = {
                    autoLoad : false,
                    model : 'App.commons.operationrecord.model.OperationRecordModel',
                    pageSize : 25,
                    remoteSort : true,
                    sorters : [{
                                property : 'cdt',
                                direction : 'desc'
                            }],
                    proxy : {
                        type : 'majax',
                        url : 'commons/operationrecord/get_data_records',
                        reader : {
                            type : 'json',
                            rootProperty : 'data',
                            totalProperty : 'total'
                        },
                        extraParams : {
                            'params.dataType_s_eq' : me.up('window').dataType,
                            'params.dataid_s_eq' : me.up('window').dataid
                        }
                    }
                }
                this.callParent(arguments);
            }
        });