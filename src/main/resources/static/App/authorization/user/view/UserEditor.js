Ext.define("App.authorization.user.view.UserEditor", {
            extend : 'Extend.window.FormWindow',
            alias : 'widget.UserEditor',
            config : {
                entity : 'user',
                window : {
                    title : '用户信息编辑',
                    width : 800,
                    height : 250,
                    modal : true
                    
                }
            },
            items : [{
                        xtype : 'hidden',
                        name : 'id'
                    }, {
                        xtype : 'textfield',
                        name : 'w3Username',
                        fieldLabel : '域帐号',
                        allowBlank : false,
                        blankText : '域帐号不能为空',
                        regex : Extend.Constant.regex.name.value,
            			regexText : Extend.Constant.regex.name.desc,
                        beforeLabelTextTpl : ['<span style="color:red;">*</span>'],
                        maxLength : 32
                    }, {
                        xtype : 'booleancombobox',
                        name : 'locked',
                        fieldLabel : '帐号锁定',
                        allowBlank : false,
                        blankText : '帐号锁定不能为空',
                        beforeLabelTextTpl : ['<span style="color:red;">*</span>']
                    }, {
                        xtype : 'textfield',
                        name : 'name',
                        fieldLabel : '姓名',
                        maxLength : 32,
                        allowBlank : false,
                        blankText : '姓名不能为空',
                        regex : Extend.Constant.regex.name.value,
            			regexText : Extend.Constant.regex.name.desc,
                        beforeLabelTextTpl : ['<span style="color:red;">*</span>']
                    }, {
                        xtype : 'textfield',
                        name : 'email',
                        fieldLabel : '邮箱',
                        maxLength : 128,
                        regex : Extend.Constant.regex.email.value,
                        regexText:Extend.Constant.regex.email.desc
                    }
                    , 
                    {
                    	 xtype : 'areacombobox',
	                        fieldLabel : '区域',
	                        name : 'area.id',
	                        id:'areacombobox',
	                        allowBlank : false,
	                        blankText : '区域不能为空',
	                        beforeLabelTextTpl : ['<span style="color:red;">*</span>'],
	                        listeners: {
	                            "select": function (qe) {
	                    	         Ext.getCmp("usergroupcombobox").reset();
	                            }
	                        }
                    },
                     {
						name :'userGroup.id',
						xtype:'usergroupcombobox',
						id:'usergroupcombobox',
						fieldLabel:'用户分组',
						autoRender:true,
	                    allowBlank : false,
	                    blankText : '角色不能为空',
	                    beforeLabelTextTpl : ['<span style="color:red;">*</span>'],
                        listeners: {
                            "beforequery": function (qe) {
                    	         delete qe.combo.lastQuery;
                    	         var areaId = Ext.getCmp("areacombobox").getValue();
                    	         qe.combo.getStore().getProxy().setExtraParam("areaId", areaId);
                            }
                        }
					},
                    {
                    	 xtype : 'rolecombobox',
	                     fieldLabel : '角色',
	                     name : 'role.id',
	                     allowBlank : false,
	                     blankText : '角色不能为空',
	                     beforeLabelTextTpl : ['<span style="color:red;">*</span>']
//                    	xtype:'combo',
//                    	fieldLabel:'角色权限',
//                    	allowBlank : false,
//                    	valueField:"id",
//                    	name:'role.id',
//                    	displayField:'name',
//                    	blankText:'角色权限不能为空喔！',
//                    	triggerAction:'all',
//                    	mode:'remote',
//                    	editable:false,
//                    	beforeLabelTextTpl : ['<span style="color:red;">*</span>'],
//                    	store : {
//                            fields : ['name', 'id'],
//                            proxy : {
//                                type : 'ajax',
//                                url : 'authorization/role/query',
//                                reader : {
//                                    type : 'json',
//                                    rootProperty : 'data'
//                                }
//                            },
//                            autoLoad : true
//                        }
                    }
//                    ,
//                    {
//                    	xtype:'combo',
//                    	fieldLabel:'用户分组',
//                    	allowBlank : false,
//                    	valueField:"id",
//                    	displayField:'name',
//                    	blankText:'用户分组不能为空喔！',
//                    	triggerAction:'all',
//                    	mode:'remote',
//                    	name:'userGroup.id',
//                    	editable:false,
//                    	beforeLabelTextTpl : ['<span style="color:red;">*</span>'],
//                    	store : {
//                            fields : ['name', 'id'],
//                            proxy : {
//                                type : 'ajax',
//                                url : 'authorization/usergroup/query',
//                                reader : {
//                                    type : 'json',
//                                    rootProperty : 'data'
//                                }
//                            },
//                            autoLoad : true
//                        }
//                    }
                    ],
                    initComponent:function(){
		            	this.callParent(arguments);
		        		var me = this;
		        		var usergroupcombobox= me.down('usergroupcombobox')
		        		usergroupcombobox.addListener({
		        			expand:function(){
		        				this.getStore().proxy.setExtraParam('areaId', Ext.getCmp("areacombobox").getValue());
		
		        			},
		        			select:function(){
		        				this.getStore().proxy.setExtraParam('areaId',null);
		        				this.getStore().reload();
		        			}
		        		});
            	},
            	beforeLoadRecord : function(){
            		var me = this;
            		var areacombobox= me.down('areacombobox')
		        		areacombobox.getStore().load();
            	},
            	close : function()
                {
            		this.down('usergroupcombobox').getStore().proxy.setExtraParam('areaId',null);
            		this.down('usergroupcombobox').getStore().reload();
                    this.window.close();
                },
                cancel : function(btn, e)
                {this.down('usergroupcombobox').getStore().proxy.setExtraParam('areaId',null);
            	this.down('usergroupcombobox').getStore().reload();
                    this.window.close();
                },
        })
