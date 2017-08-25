Ext.define('App.authorization.area.viewmodel.AreaViewModel', {
            extend : 'Ext.app.ViewModel',
            alias : 'viewmodel.area_viewmodel',
            requires : ['App.authorization.area.model.AreaModel'],
            data : {
                columns : [{
                            header : 'ID',
                            dataIndex : 'id',
                            hidden : true
                        }, {
                        	header : 'AreaName',
                            dataIndex : 'areaName',
                        	hidden : true
                        },{
                        	header : 'WebService',
                            dataIndex : 'webService',
                        	hidden : true
                        },{
                            header : '区域名',
                            dataIndex : 'name'
                        }, {
                        	header: 'path',
                        	dataIndex: 'path'
                        },{
                            header : 'root_name',
                            dataIndex : 'rootName'
                        }, {
                            header : 'ticket',
                            dataIndex : 'ticket',
                           
                        }, {
                            header : 'url',
                            dataIndex : 'url',
                        },{
                        	header : '软件版本节点',
                            dataIndex : 'versionPath',
                        }],
                search : {
                    simpleSearch : true,
                    advancedSearch : true,
                    showAdd : false,
		            showRemove : false,
                    fields : {
                        search0:{
						name:{
						name:'name_s_like',
						fieldLabel:'区域名称',
						labelWidth:70,
						index:2
						}
					},
					button:{
						
						}
					}
                }
            },
            stores : {
                Query : {
                    autoLoad : false,
                    model : 'App.authorization.area.model.AreaModel',
                    pageSize : 25,
                    remoteSort : true,
                    sorters : [{
                                property : 'id',
                                direction : 'desc'
                            }],
                    proxy : {
                        type : 'majax',
                        url : 'area/find_page',
                        reader : {
                            type : 'json',
                            rootProperty : 'data',
                            totalProperty : 'total'
                        }
                    }
                }
            }
        });