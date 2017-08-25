/**
 * 显示层的modle
 */
Ext.define('App.commons.versioninfo.VersionInfoViewModel', {
            extend : 'Ext.app.ViewModel',
            alias : 'viewmodel.VersionInfoViewModel',
            requires : ['App.commons.versioninfo.VersionInfoModel'],
            data : {
                columns : [{
                            header : 'ID',
                            dataIndex : 'id',
                            hidden : true
                        }, {
                            header : '版本编号',
                            dataIndex : 'versionName'
                        }, {
                            text : '发布时间',
                            dataIndex : 'cdt',
                            xtype : 'ymdhicolumn',
                            format : 'Y-m-d H:i',
                            menuDisabled : true
                        }],
                search : {
                    fields : [{
                                field : "versionName",
                                name : "版本编号",
                                vtype : 's',
                                opt : 'like'
                            }]
                }
            },
            stores : {
                Query : {
                    autoLoad : false,
                    model : 'App.commons.versioninfo.VersionInfoModel',
                    pageSize : 25,
                    remoteSort : true,
                    sorters : [{
                                property : 'cdt',
                                direction : 'desc'
                            }],
                    proxy : {
                        type : 'majax',
                        url : 'commons/versioninfo/query',
                        reader : {
                            type : 'json',
                            rootProperty : 'data',
                            totalProperty : 'total'
                        }
                    }
                }
            }
        });