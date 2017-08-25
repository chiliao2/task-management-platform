Ext.define('App.commons.operationrecord.model.OperationRecordViewModel', {
            extend : 'Ext.app.ViewModel',
            alias : 'viewmodel.OperationRecordViewModel',
            requires : ['App.commons.operationrecord.model.OperationRecordModel'],
            data : {
                columns : [{
                            header : 'ID',
                            dataIndex : 'id',
                            hidden : true
                        }, {
                            header : '修改人',
                            dataIndex : 'creator'
                        }, {
                            xtype : 'cdtcolumn',
                            header : '修改时间',
                            dataIndex : 'cdt',
                            format : 'Y-m-d H:i:s'
                        }, {
                            header : '操作类型',
                            dataIndex : 'type'
                        }, {
                            header : '描述',
                            dataIndex : 'description'
                        }]
            }
        });