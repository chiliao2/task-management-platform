/**
 * 表格时间列，格式：'Y-m-d H:i'
 */
Ext.define('App.components.grid.column.YmdHiColumn', {
            extend : 'Ext.grid.column.Column',
            alias : 'widget.ymdhicolumn',
            format : 'Y-m-d H:i',
            defaultRenderer : function(value)
            {
                if (Ext.isEmpty(value))
                {
                    return null;
                } else
                {
                    var me = this;
                    var dt = new Date(value).getTime() - 8 * 60 * 60 * 1000;
                    return Ext.Date.format(new Date(dt), me.format || Ext.Date.defaultFormat);
                }
            }
        })