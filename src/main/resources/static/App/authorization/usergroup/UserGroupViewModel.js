Ext.define('App.authorization.usergroup.UserGroupViewModel', {
            extend : 'Ext.app.ViewModel',
            alias : 'viewmodel.UserGroupViewModel',
            requires : ['App.authorization.usergroup.UserGroupModel'],
            data : {
                columns : [{
                            header : 'ID',
                            dataIndex : 'id',
                            hidden : true
                        }, {
                            header : '分组名称',
                            dataIndex : 'name'
                        }, {
                            header : '区域',
                            dataIndex : 'area',
                            renderer:function(data){
                    			return data.name;
                    		}
                        }, {
                            header : '创建人',
                            dataIndex : 'creater',
                            renderer:function(data){
                            	//alert(data.name);
                    			return data.name;
                    		}
                        }, {
//                        	xtype:"ymdcolumn",
                            header : '创建日期',
                            dataIndex : 'createDate'
                        }],
                search : {
                    fields : {
                        search0:{
							name:{
							name:'name_s_like',
							fieldLabel:'分组名称',
							labelWidth:70,
							index:2
							},
							area : {
								name : 'area.id_i_eq',
								fieldLabel : '区域',
								xtype:'areacombobox',
								index : 2,
								width:110
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
                    model : 'App.authorization.usergroup.UserGroupModel',
                    pageSize : 25,
                    remoteSort : true,
                    sorters : [{
                                property : 'id',
                                direction : 'desc'
                            }],
                    proxy : {
                        type : 'majax',
                        url : 'authorization/usergroup/find_page',
                        reader : {
                            type : 'json',
                            rootProperty : 'data',
                            totalProperty : 'total'
                        }
                    }
                }
            }
        });