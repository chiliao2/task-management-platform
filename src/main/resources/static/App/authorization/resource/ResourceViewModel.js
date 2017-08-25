Ext.define('App.authorization.resource.ResourceViewModel', {
            extend : 'Ext.app.ViewModel',
            alias : 'viewmodel.ResourceViewModel',
            requires : ['App.authorization.resource.ResourceModel'],
            data : {
                columns : [{
                            header : 'ID',
                            dataIndex : 'id',
                            hidden : true
                        }, {
                            header : '资源名称',
                            dataIndex : 'name'
                        }, {
                            header : 'URL',
                            dataIndex : 'url'
                        }, {
                            header : '描述',
                            dataIndex : 'description'
                        }, {
                            header : '创建人',
                            dataIndex : 'creator',
                            hidden : true
                        }, {
                            xtype : 'cdtcolumn',
                            header : '创建时间',
                            dataIndex : 'cdt',
                            hidden : true
                        }]
            },
            stores : {
                Query : {
                    autoLoad : false,
                    model : 'App.authorization.resource.ResourceModel',
                    pageSize : 25,
                    remoteSort : true,
                    sorters : [{
                                property : 'cdt',
                                direction : 'desc'
                            }],
                    proxy : {
                        type : 'majax',
                        url : 'authorization/resource/query',
                        reader : {
                            type : 'json',
                            rootProperty : 'data',
                            totalProperty : 'total'
                        }
                    }
                }
            }
        });