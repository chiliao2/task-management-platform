Ext.define('App.components.form.field.TypeInfoComboBox', {
	extend : 'Ext.form.field.ComboBox',
	alias : 'widget.typeinfocombobox',
	editable : false,
	autoLoadOnValue : true,
	queryMode : 'remote',
	valueField : 'id',
	displayField : 'name',
	store : Ext.create('Ext.data.Store', {
		fields : [ 'id', 'name' ],
		pageSize : 999,

		proxy : {
			type : 'ajax',
			async : false,
			url : 'typeinfo/find_page',
			reader : {
				type : 'json',
				rootProperty : 'data'
			}
		},
		autoLoad : true
	})
});