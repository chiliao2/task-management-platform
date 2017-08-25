Ext.define("App.authorization.resource.view.ResourceEditor", {
            extend : 'Extend.window.EditWindow',
            alias : 'widget.resource_editor',
        url :'authorization/resource/save',
            config : {
                entity : 'resource',
                defaults : {
                    columnWidth : 1
                },
                window : {
                    title : '修改资源信息',
                    width : 800,
                    height : 500,
                    modal : true,
                    resizable : false
                }
            },
            items : [{
                        xtype : 'hidden',
                        name : 'id'
                    }, {
                        xtype : 'textfield',
                        name : 'name',
                        fieldLabel : '资源名称',
                        allowBlank : false,
                        blankText : '资源名称不能为喔！',
                        beforeLabelTextTpl : ['<span style="color:red;">*</span>'],
                        maxLength : 256
                    }, {
                        xtype : 'textfield',
                        name : 'url',
                        fieldLabel : 'URL',
                        allowBlank : false,
                        blankText : 'URL不能为喔！',
                        beforeLabelTextTpl : ['<span style="color:red;">*</span>'],
                        maxLength : 256
                    }, {
                        xtype : 'textfield',
                        name : 'description',
                        fieldLabel : '描述',
                        columnWidth : 1,
                        maxLength : 512
                    }]
        })
