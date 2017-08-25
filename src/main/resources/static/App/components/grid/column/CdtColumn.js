/**
 * 用于显示数据创建时间的控件，将会把创建时间的long数据转换为date数据
 */
Ext.define('App.components.grid.column.CdtColumn', {
            extend : 'Ext.grid.column.Column',
            alias : 'widget.cdtcolumn',
            format : 'Y-m-d',
            defaultRenderer : function(value)
            {
                if (Ext.isEmpty(value))
                {
                    return null;
                } else
                {
                    var me = this;
                    return Ext.Date.format(new Date(value), me.format || Ext.Date.defaultFormat);
                }
            }
        })