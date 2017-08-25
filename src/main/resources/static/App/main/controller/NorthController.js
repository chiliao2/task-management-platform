Ext.define('App.main.controller.NorthController', {
            extend : 'Ext.app.ViewController',
            alias : 'controller.north_controller',
            init : function(view)
            {
                var me = this;
                var vm = me.getViewModel()
                this.listen({
                            component : {
                                'north' : {
                                    afterrender : function()
                                    {
                                        me.loadCurrentUser();
                                    },
                                    onLoginSuccess : function(user)
                                    {
                                    	/**
                                    	 * 主页加载后,如果超时,弹出登陆框,登录后的触发函数
                                    	 */
                                    	//alert("into  onLoginSuccess");
                                        if (Ext.isEmpty(user))
                                        {
                                            vm.set('user', {name : '加载中...'});
                                            me.loadCurrentUser();
                                        } else
                                        {
                                            me.getViewModel().set('user', user);
                                        }
                                    },
                                    onLogoutSuccess : function()
                                    {
                                        vm.set('user', null);
                                        app.user = null;
                                    },
                                    menuclick : function(clazz, options)
                                    {
                                        var center = view.up('viewport').down('center');
                                        if (center.queryById(options.id))
                                        {
                                            center.setActiveTab(options.id);
                                        } else
                                        {
                                            if (!Ext.isEmpty(clazz))
                                            {
                                                options.clazz = clazz;
                                                var um = Ext.create(clazz, options);
                                                center.add(um);
                                                center.setActiveTab(um);
                                                center.fireEvent('tabcreate', center, um, options)
                                            } else
                                            {
                                                Extend.Msg.error('错误', '访问出现错误，菜单项未指定资源。');
                                            }
                                        }
                                    }
                                },
                                'displayfield[name=version_name]' : {
                                    afterrender : function($this, eOpts)
                                    {
                                        Ext.fly($this.el).on('click', function(e, t)
                                                {
                                                    me.showVersionSelectionWindow(t);
                                                });
                                    }
                                },
                                'displayfield[name=baseline_name]' : {
                                    afterrender : function($this, eOpts)
                                    {
                                        Ext.fly($this.el).on('click', function(e, t)
                                        {
                                            me.showVersionSelectionWindow(t);
                                        });
                                    }
                                }
                            }
                        });

	            vm.bind('{user}', function(val){
	                if (Ext.isEmpty(val))
	                {
	                	m.set('user', {name : '未<a href="javascript:window.app.login();">登录</a>'});
	                }
	                else if (val.name.indexOf('登录') == -1 && val.name.indexOf('加载中') == -1)
	                {
	                	val.role.name = val.role.name + '&nbsp;&nbsp;<a href="javascript:window.app.logout();">[注销]</a>'
	                    vm.set('user', val);
	                }
	            })
            },
            showVersionSelectionWindow : function(target)
            {
                var win = Ext.create('App.user.config.view.ConfigWindow', {});
                win.show();
                win.anchorTo(target, "tr-br");
            },
            loadCurrentUser : function()
            {
                var me = this;
//                Ext.Ajax.request({
//                            url : 'get_current_user',
//                            success : function(resp)
//                            {
//                                if (resp.result.success === true && !Ext.isEmpty(resp.result.data))
//                                {
//                                	var cookieRoleId = Ext.state.Manager.get('roleId');
//                                	if(Ext.isEmpty(cookieRoleId)){
//                                		Ext.state.Manager.set('roleId',resp.result.data.role.id);
//                                	}else{
//                                		/*
//                                		 * 如果电脑切换了角色,关闭所有窗口
//                                		 */
//                                		if(cookieRoleId != resp.result.data.role.id){
//                                			Ext.state.Manager.set('roleId',resp.result.data.role.id);
//
////	                                    	var north = me.getView().up().down('tabpanel');
////	                                    	north.removeAll();
////	                                    	north.add({
////	                                    		xtype:'home',
////	                                    		id:'home'
////	                                    	}).show();
//
//                                		}
//                                	}
//                                    me.getViewModel().set('user', resp.result.data);
//                                    app.user = resp.result.data;
//                                } else
//                                {
//                                    me.getViewModel().set('user', null);
//                                    app.user = null;
//                                }
//                            }
//                        });
            },
            /** 菜单初始化开始 */
            initmenu : function(view)
            {
                var me = this;
                var menu = Ext.select(".menu");
                var getChildWidth = function(target)
                {
                    var w = 0;
                    if (target)
                    {
                        var items = target.select(".item")
                        if (items && items.getCount() > 0)
                        {
                            var item = items.first();
                            while (item)
                            {
                                w = w + item.getWidth();
                                item = item.next();
                            }
                        }
                    }
                    return w;
                }
                var w = getChildWidth(menu.first());
                menu.first().setWidth(w);
                var els = Ext.select(".menu .item", true);
                els.addListener("click", function(e)
                {
                    e.stopPropagation();
                    var $this = Ext.get(this);
                    var clazz = $this.getAttribute("clazz", "");
                    var title = $this.getAttribute("name", "");
                    var closable = $this.getAttribute("closable", "");
                    var id = title;
                    var options = {
                        title : title,
                        id : clazz.replace(/\./g, '_'),
                        closable : closable === 'false' ? false : true
                    };
                            if (clazz)
                            {
                                var opened = view.fireEvent('menuclick', clazz, options);
                                if (opened)
                                {
                                    $this.addCls("item-hoverc")
                                }
                            }
                        });
                els.each(function()
                        {
                            if (Ext.get(this).select(".menu").getCount() == 0)
                            {
                                Ext.get(this).setStyle({"background-image" : "none"});
                            }
                        });
                Ext.select(".menu .item:last-child").setStyle({
                            "margin-bottom" : "0px"
                        });
                var dt;
                els.addListener("mouseenter", function()
                        {
                            var $this = Ext.get(this);
                            dt = new Ext.util.DelayedTask(function()
                                    {
                                        var child = $this.select(".menu")
                                        if (child.getCount() > 0)
                                        {
                                            child.first().show({
                                                        duration : 0.1
                                                    });
                                            child.setWidth(91);
                                            if (!$this.parent(".menu").parent(".menu"))
                                            {
                                                child.anchorTo($this, "t-b", [0, 0]);
                                                child.setY($this.getY() + $this.getHeight() - 1)
                                                if (child.first().getX() < 0)
                                                {
                                                    child.setX(10);
                                                }
                                                if (child.first().getX() + child.first().getWidth() > Ext.getBody()
                                                        .getWidth())
                                                {
                                                    child.setX(Ext.getBody().getWidth() - child.first().getWidth());
                                                }
                                            } else
                                            {
                                                child.alignTo($this, "tl-tr?", [0, 0]);
                                            }

                                        }
                                    }, this);
                            dt.delay(300);
                            if ($this.up(".menu") && $this.up(".menu").up(".menu"))
                            {
                                $this.addCls("item-hoverc")
                            } else
                            {
                                $this.addCls("item-hover")
                            }
                        });
                els.addListener("mouseleave", function()
                        {
                            var $this = Ext.get(this);
                            var child = $this.select(".menu")
                            child.hide();
                            $this.removeCls("item-hover")
                            $this.removeCls("item-hoverc")
                            dt.cancel();
                        });
                Ext.select(".menu").first().anchorTo(view.getEl(), "tl-bl?", [0, 0], null, null, function()
                        {
                            var mw = Ext.select(".menu").first().getWidth();;
                            var bw = Ext.getBody().getWidth();
                            var l = 5;
                            if (bw > mw)
                            {
                                l = (bw - mw) / 2;
                            }
                            Ext.select(".menu").first().setX(l);
                            Ext.select(".menu").first().setY(32);
                        });
            }
        })