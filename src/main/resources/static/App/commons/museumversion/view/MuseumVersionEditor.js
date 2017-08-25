Ext.define("App.commons.museumversion.view.MuseumVersionEditor", {
            extend : 'Extend.window.FormWindow',
            alias : 'widget.MuseumVersionEditor',
            entity : 'museumVersion',
            defaults : {
                columnWidth : 1
            },
            config : {
                window : {
                    title : '博物馆版本配置编辑',
                    width : 600,
                    height : 250
                }
            },
            items : [{
                        xtype : 'hidden',
                        name : 'id'
                    }, {
                        xtype : 'hidden',
                        name : 'creator'
                    }, {
                        xtype : 'hidden',
                        name : 'cdt'
                    }, {
                        xtype : 'textfield',
                        name : 'name',
                        fieldLabel : '版本名称',
                        maxLength : '128',
                        maxLengthText : '版本名称最多128个字符',
                        allowBlank : false,
                        blankText : '版本名称不能为空！',
                        beforeLabelTextTpl : ['<span style="color:red;">*</span>']
                    }, {
                        xtype : 'textfield',
                        fieldLabel : '描述',
                        name : 'description',
                        maxLength : '512',
                        maxLengthText : '描述信息最多512个字符'
                    }]
        })
