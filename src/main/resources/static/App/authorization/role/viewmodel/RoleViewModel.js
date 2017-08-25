Ext.define('App.authorization.role.viewmodel.RoleViewModel', {
            extend : 'Ext.app.ViewModel',
            alias : 'viewmodel.role_viewmodel',
            requires : ['App.authorization.role.model.RoleModel'],
            data : {
                columns : [{
                            header : 'ID',
                            dataIndex : 'id',
                            hidden : true
                        }, {
                            header : '角色名',
                            dataIndex : 'name'
                        }, {
                            header : '描述',
                            dataIndex : 'description'
                        }, /*{
                            header : '创建人',
                            dataIndex : 'creator'
                        }*/, {
                            xtype : 'cdtcolumn',
                            header : '创建时间',
                            dataIndex : 'createTime'
                        }],
                search : {
                    simpleSearch : true,
                    advancedSearch : true,
                    fields : {
                        search0:{
							name:{
							name:'name_s_like',
							fieldLabel:'角色名',
							labelWidth:50,
	//						width:200,
	//						datatype:'s',
	//						list:['1'],
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
                    model : 'App.authorization.role.model.RoleModel',
                    pageSize : 25,
                    remoteSort : true,
                    /*sorters : [{
                                property : 'cdt',
                                direction : 'desc'
                            }],*/
                    proxy : {
                        type : 'majax',
                        url : 'authorization/role/find_page',
                        reader : {
                            type : 'json',
                            rootProperty : 'data',
                            totalProperty : 'total'
                        }
                    }
                }
            }
        });