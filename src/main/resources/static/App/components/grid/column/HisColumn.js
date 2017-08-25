/**
 * 表格时间列，格式： 'H:i:s'
 */
Ext.define('App.components.grid.column.HisColumn', {
            extend : 'Ext.grid.column.Date',
            alias : 'widget.hiscolumn',
            format : 'H:i:s',
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