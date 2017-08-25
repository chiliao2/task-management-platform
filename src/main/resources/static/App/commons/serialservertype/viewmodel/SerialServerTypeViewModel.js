Ext.define('App.commons.serialservertype.viewmodel.SerialServerTypeViewModel', {
            extend : 'Ext.app.ViewModel',
            alias : 'viewmodel.commons.SerialServerTypeViewModel',
            requires : ['App.commons.serialservertype.model.SerialServerTypeModel'],
            data : {
                columns : [{
                            header : 'ID',
                            dataIndex : 'id',
                            hidden : true
                        }, {
                            header : '类型名称',
                            dataIndex : 'name'
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
                        }],
                search : {
                    fields : [{
                                "field" : "name",
                                "name" : "类型名称",
                                vtype : 's',
                                opt : 'like'
                            }]
                }
            },
            stores : {
                Query : {
                    autoLoad : false,
                    model : 'App.commons.serialservertype.model.SerialServerTypeModel',
                    pageSize : 25,
                    remoteSort : true,
                    sorters : {
                        direction : 'asc',
                        property : 'name'
                    },
                    proxy : {
                        type : 'majax',
                        url : 'commons/serialservertype/query',
                        reader : {
                            type : 'json',
                            rootProperty : 'data',
                            totalProperty : 'total'
                        }
                    }
                }
            }
        });