Ext.define("App.commons.versioninfo.view.VersionInfoEditor", {
            extend : 'Extend.window.FormWindow',
            alias : 'widget.VersionInfoEditor',
            config : {
                entity : 'versionInfo',
                window : {
                    title : '修改版本信息',
                    width : 800,
                    height : 500
                },
                defaults : {
                    columnWidth : 1
                }
            },
            items : [{
                        xtype : 'hidden',
                        name : 'id'
                    }, {
                        xtype : 'textfield',
                        name : 'versionName',
                        fieldLabel : '名称',
                        allowBlank : false,
                        maxLength : 256,
                        blankText : '版本编号不能为空！',
                        beforeLabelTextTpl : ['<span style="color:red;">*</span>']
                    }, {
                        xtype : 'htmleditor',
                        fieldLabel : '版本描述',
                        name : 'description',
                        height : 350,
                        allowBlank : false
                    }],
            window : {
                buttons : {
                    save : {
                        handler : function(btn, e)
                        {
                            var me = this;
                            var description = me.up('panel').down('htmleditor[name="description"]').getValue();
                            if (description != null && description.length > 512)
                            {
                                Extend.Msg.error('提示', '版本描述长度不能超过512');
                                return;
                            }
                            this.up('window').form.submit();
                        }
                    }
                }
            }
        })
