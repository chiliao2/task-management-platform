Ext.define('App.absent.field.AssigneeCombo', {
	extend : 'Ext.form.field.ComboBox',
	alias : 'widget.AssigneeCombo',
	queryMode : 'local',
	displayField : 'name',
	valueField : 'value',
	editable : false,
	multiSelect : false,
	store : Ext.create('Ext.data.Store', {
		fields : [ 'name', 'value' ],
		data : [ [ '小王', "小王" ], [ '小李', "小李" ], [ '小朱', '小朱' ], [ '小张', '小张' ] ]
	})
})