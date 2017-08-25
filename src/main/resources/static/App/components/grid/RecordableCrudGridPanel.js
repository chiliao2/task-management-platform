Ext.define("App.components.grid.RecordableCrudGridPanel", {
            extend : "Extend.grid.CrudGridPanel",
            alias : 'widget.RecordableCrudGridPanel',
            initEvents : function()
            {
                this.on({
                            selectionchange : function($this, selected, eOpts)
                            {
                                var btnRecord = this.down('button[action="record"]');
                                if (!Ext.isEmpty(btnRecord))
                                {
                                    if (selected.length > 0)
                                    {
                                        if (selected.length == 1)
                                        {
                                            btnRecord.enable();
                                        } else
                                        {
                                            btnRecord.disable();
                                        }
                                    } else
                                    {
                                        this.down('button[action="record"]').disable();
                                    }
                                }
                            }
                        });
                this.callParent(arguments);
            },
            setEditor : function()
            {
                this.callParent(arguments);
                if (this.getTbar() && this.getTbar().record && this.getTbar().record.hidden !== true)
                {
                    this.editor.recordable = true;
                }
            }
        });