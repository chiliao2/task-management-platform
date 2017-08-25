Ext.define('App.commons.museumversion.viewmodel.MuseumVersionViewModel', {
            extend : 'Ext.app.ViewModel',
            alias : 'viewmodel.museumversion_viewmodel',
            requires : ['App.commons.museumversion.model.MuseumVersionModel'],
            data : {
                columns : [{
                            header : 'ID',
                            dataIndex : 'id',
                            hidden : true
                        }, {
                            header : '版本名称',
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
                                "name" : "版本名称",
                                vtype : 's',
                                opt : 'like'
                            }]
                }
            },
            stores : {
                Query : {
                    autoLoad : false,
                    model : 'App.commons.museumversion.model.MuseumVersionModel',
                    pageSize : 25,
                    remoteSort : true,
                    sorters : {
                        direction : 'desc',
                        property : 'cdt'
                    }
                }
            }
        });