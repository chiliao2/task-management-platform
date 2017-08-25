Ext.define('App.authorization.user.UserViewModel', {
            extend : 'Ext.app.ViewModel',
            alias : 'viewmodel.UserViewModel',
            requires : ['App.authorization.user.UserModel'],
            data : {
                columns : [{
                            header : 'ID',
                            dataIndex : 'id',
                            hidden : true
                        }, {
                            header : '用户名',
                            dataIndex : 'w3Username'
                        }, {
                            header : '锁定',
                            dataIndex : 'locked'
                        }, {
                            header : '姓名',
                            dataIndex : 'name'
                        }, {
                            header : '角色',
                            dataIndex : 'role',
                            renderer:function(data){
                        	 	return data.name;
                        	}
                        },{
                        	header:"用户分组",
                        	dataIndex: 'userGroup',
                        	renderer:function(data){
                        		
                        		return data.name;
                        	}
                        },{
                        	header:"区域",
                        	dataIndex: 'area',
                        	renderer:function(data){
                        		
                        		return data.name;
                        	}
                        }],
                search : {
                    simpleSearch : true,
                    advancedSearch : true,
                    fields:{
                        search0:{
							name:{
							name:'w3Username_s_like',
							fieldLabel:'用户名',
							labelWidth:50,
//							width:200,
//							datatype:'s',
//							list:['1'],
							index:1
							},
							area : {
								name : 'area.id_i_eq',
								fieldLabel : '区域',
								xtype:'areacombobox',
								index : 2,
								width:110
							},
							usergroup:{
								name : 'userGroup.id_i_eq',
								fieldLabel : '用户分组',
								xtype:'usergroupcombobox',
								index : 2,
								labelWidth:80
							}
								,
							role : {
								name : 'role.id_i_eq',
								fieldLabel : '角色',
								xtype:'rolecombobox',
								index : 3,
								width:150
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
                    model : 'App.authorization.user.UserModel',
                    pageSize : 25,
                    remoteSort : true,
                    sorters : [{
                                property : 'id',
                                direction : 'desc'
                            }],
                    proxy : {
                        type : 'majax',
                        api : {
                            create : 'authorization/user/save',
                            read : 'authorization/user/find_page',
                            update : 'authorization/user/save',
                            destroy : 'authorization/user/delete',
                            get : 'authorization/user/find_one'
                        },
                        reader : {
                            type : 'json',
                            rootProperty : 'data',
                            totalProperty : 'total'
                        }
                    }
                }
            }
        });