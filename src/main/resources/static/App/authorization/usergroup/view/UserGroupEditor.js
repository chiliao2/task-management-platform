Ext.define("App.authorization.usergroup.view.UserGroupEditor", {
            extend : 'Extend.window.EditWindow',
            alias : 'widget.usergroup_editor',
            url :'authorization/usergroup/save',
            config : {
                entity : 'userGroup',
                defaults : {
                    columnWidth : 1
                },
                window : {
                    title : '修改分组信息',
                    width : 400,
                    height : 200,
                    resizable : false,
                    modal : true
                    
                }
            },
            items : [{
                        xtype : 'hidden',
                        name : 'id'
                    }, {
                        xtype : 'textfield',
                        name : 'name',
                        fieldLabel : '分组名称',
                        allowBlank : false,
                        regex : Extend.Constant.regex.name.value,
						regexText : Extend.Constant.regex.name.desc,
                        blankText : '分组名称不能为空喔！',
                        beforeLabelTextTpl : ['<span style="color:red;">*</span>'],
                        maxLength : 32
                    },
                     {
			            xtype      : 'fieldcontainer',
			            fieldLabel : '类型',
			            defaultType: 'radiofield',
			            defaults: {
			                flex: 1
			            },
			            layout: 'hbox',
			            items: [
			                {
			                    boxLabel  : '分类',
			                    name      : 'leaf',
			                    inputValue: 'false'
			                }, {
			                    boxLabel  : '组名',
			                    name      : 'leaf',
			                    checked : true,
			                    inputValue: 'true'
			                }
			            ]
			        }
                    ]
        })
