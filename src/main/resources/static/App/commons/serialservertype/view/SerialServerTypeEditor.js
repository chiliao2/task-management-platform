Ext.define("App.commons.serialservertype.view.SerialServerTypeEditor", {
            extend : 'Extend.window.FormWindow',
            alias : 'widget.commons.serialservertype_editor',
            config : {
                entity : 'serialServerType',
                window : {
                    title : '串口服务器类型编辑',
                    width : 500,
                    height : 200
                },
                defaults : {
                    columnWidth : 1,
                    labelWidth : 70
                }
            },
            items : [{
                        xtype : 'hidden',
                        name : 'id'
                    }, {
                        xtype : 'textfield',
                        name : 'name',
                        fieldLabel : '类型名称',
                        maxLength : '64',
                        maxLengthText : '版本名称最多64个字符',
                        allowBlank : false,
                        blankText : '类型名称为必填字段，不能为空！',
                        beforeLabelTextTpl : ['<span style="color:red;">*</span>']
                    }, {
                        xtype : 'textfield',
                        fieldLabel : '描述',
                        name : 'description',
                        maxLength : '512',
                        maxLengthText : '描述信息最多512个字符'
                    }]
        })
