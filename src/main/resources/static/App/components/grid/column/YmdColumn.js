/**
 * 表格时间列，格式： 'Y-m-d'
 */
Ext.define('App.components.grid.column.YmdColumn', {
            extend : 'Ext.grid.column.Date',
            alias : 'widget.ymdcolumn',
            format : 'Y-m-d',
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