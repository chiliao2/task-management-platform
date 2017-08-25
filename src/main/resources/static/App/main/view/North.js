Ext.define("App.main.view.North", {
    extend : "Ext.container.Container",
    alias : "widget.north",
    layout : 'border',
    region : 'north',
    minWidth : 1024,
    style : {
        'background' : '-webkit-gradient(linear,left top,left bottom,from(#074e7c),to(#095f93))',
        "z-index" : "999"
    },
    requires : ['App.main.controller.NorthController', 'App.main.viewmodel.NorthModel'],
    controller : 'north_controller',
    viewModel : {
        type : 'north_model'
    },
    initComponent : function()
    {
        var me = this;
        var vm = this.getViewModel();
//
//        Ext.Ajax.request({ url : 'get_user_menus',
//        	async : false,
//            success : function(resp)
//            {
//        		var menuObj = eval(resp.responseText);
//                if (resp.status == 200)
//                {
//                	me.tools = me.createMenu(menuObj, true);
//                    me.items = [{
//                    	xtype : 'container',
//					    layout: {
//					    	type: 'table',
//					        align: 'middle',
//					        columns: 2
//					    },
//					    defaults : {
//					    	labelStyle : 'width:0px',
//					        fieldStyle : 'width:200px; padding:29px 0 0 0; font-weight:bold; font-size:23px; font-family: Georgia; color:#FFF;'
//					    },
//					    margin : '4px',
//					    width : 320,
//					    region : 'west',
//					    defaultType : 'displayfield',
//					    items : [{
//			                xtype : 'image',
//			                src : 'resources/images/logo.png',
//			                height: '52px'
//			            },
//			            {
//					        fieldLabel : '',
//					        bind : {
//				            	value : 'HeroCloud'
//				            }
//					    }]
//					},
//					{
//						xtype : 'container',
//					    region : 'center',
//					    margin : '4 0 0 0',
//					    defaultType : 'button',
//					    defaults : {
//					    	width:104
//					    },
//					    items : me.tools
//					},
//					{
//						xtype : 'container',
//					    layout: {
//					    	type: 'table',
//					        columns: 2
//					    },
//					    region : 'east',
//					    defaultType : 'displayfield',
//					    padding : '11 14 0 0',
//					    defaults : {
//					    	labelStyle : 'min-height:22px;padding:0 0 0 14px;color:#FFF;white-space:nowrap;',
//					        fieldStyle : 'min-height:22px;padding:0 0 0 0;margin:0;color:#FFF;white-space:nowrap;',
//					        labelWidth : 32,
//					        minWidth : 60
//					    },
//					    items : [{
//					    	fieldLabel : '用户',
//					        name : 'user_name',
//					        bind : {
//					        	value : '{user.name}'
//					        }
//					    },
//					    {
//					    	fieldLabel : '角色',
//					        name : 'role_name',
//					        bind : {
//					        	value : '{user.role.name}'
//					        }
//					    },
//					    {
//					        fieldLabel : '区域',
//					        name : 'area_name',
//					        bind : {
//					        	value : '{user.area.name}'
//					        }
//					    },
//					    {
//					    	fieldLabel : '分组',
//					        name : 'group_name',
//					        bind : {
//					        	value : '{user.userGroup.name}'
//					        }
//					    },
//					    {
//					    	xtype:'textfield',
//					        id: 'webService',
//					        width: '0px',
//					        bind : {
//					        	value : '{user.area.webService}'
//					        }
//					    }]
//					}];
//                }
//                else
//                {
//                	me.getViewModel().set('menus', null);
//                }
//            }
//        });
        this.callParent();
    },
    createMenu : function(menudata, topmenu)
    { 
        var me = this;
        var menus = [];
        if (Ext.isArray(menudata))
        {
            Ext.Array.each(menudata, function(item, index, countriesItSelf)
            {
            	var menu = {
                    text : item.name,
                    iconCls : item.iconCls,
                    hidden : item.hidden,
                    menuExpandDelay : 50
                };
                // 一级菜单
                if (topmenu === true)
                {
                	menu.arrowAlign = 'right';
                    menu.margin = '0 0 0 -2';
                    menu.height = 52;
                    
                    if(-1 != item.name.indexOf('ywgl.png'))
                   	{
                    	menu.handler = function()
                        {
                    		//window.open('http://'+Ext.getCmp('webService').getValue()+':8989/Home/Login.aspx');
                            window.open('http://10.184.235.47:8989/Home/Login.aspx');
                        }
                   	}
                } 
                // 子菜单
                else
                {
                	menu.clazz = item.clazz;
                    menu.style = 'padding-top:5px;';
                    menu.height = 35;
                    menu.handler = function()
                    {
	                    if (!Ext.isEmpty(item.clazz))
	                    {
	                    	me.fireEvent('menuclick', item.clazz, {
	                    		id : item.clazz.replace(/\./g, "_"),
                                closable : item.closable === "false" ? false : true,
                                title : item.name
                            });
                        }
                    }
                }
                if (!Ext.isEmpty(item.menus))
                {
                	var nm = me.createMenu(item.menus, false)
                    menu.menu = nm;
                }
                menus.push(menu);
            });
        }
        return menus;
    }

})