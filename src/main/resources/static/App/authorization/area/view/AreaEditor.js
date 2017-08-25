Ext.define("App.authorization.area.view.AreaEditor", {
            extend : 'Extend.window.FormWindow',
            alias : 'widget.area_editor',
            config : {
                window : {
                    title : '区域信息编辑',
                    width : 1024,
                    height : 600,
                    modal : true
                },
                entity : 'area'
            },
            defaults : {
                columnWidth : 1
            },
            items : [{
                        xtype : 'hidden',
                        name : 'id'
                    }, {
                    	xtype : 'hidden',
                        name : 'areaName'
                    },{
                    	xtype : 'hidden',
                        name : 'webService'
                    },{
                        xtype : 'textfield',
                        name : 'name',
                        fieldLabel : '区域名',
                        allowBlank : false,
                        regex : /^(\w*[\u4e00-\u9fa6]*)*$/,
            			regexText : '不能包含非法字符',
                        blankText : '区域名不能为空喔！',
                        beforeLabelTextTpl : ['<span style="color:red;">*</span>'],
                        maxLength : 32
                    },{
                    	xtype : 'textfield',
                    	name: 'path',
                    	fieldLabel: 'path',
                        beforeLabelTextTpl : ['<span style="color:red;">*</span>'],
                        allowBlank : false,

                    	blankText:'path不能为空喔！'

                    },
                    {
                        xtype : 'textfield',
                        name : 'rootName',
                        fieldLabel : 'root_name',
                    	blankText:'rootName不能为空喔！',
                        allowBlank : false,

                        beforeLabelTextTpl : ['<span style="color:red;">*</span>'],

                        maxLength : 512
                    },{
                    	xtype : 'textfield',
                    	name :　'ticket',
                    	allowBlank: false,
                    	blankText:'ticket不能为空喔！',

                        beforeLabelTextTpl : ['<span style="color:red;">*</span>'],

                    	fieldLabel : 'ticket'
                    },{
                    	xtype : 'textfield',
                    	name: 'url',
                    	fieldLabel :'url',
                    	allowBlank: false,
                    	blankText:'ticket不能为空喔！',
                        beforeLabelTextTpl : ['<span style="color:red;">*</span>']
         	
                    },{
                    	xtype : 'textfield',
                        name : 'versionPath',
                        fieldLabel : '软件版本节点'
                        }]
        })
