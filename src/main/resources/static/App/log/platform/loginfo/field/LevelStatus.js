Ext.define('App.log.platform.loginfo.field.LevelStatus', {
	extend : 'Ext.form.field.ComboBox',
	alias : 'widget.LevelStatusComboBox',
	queryMode : 'local',
	displayField : 'name',
	valueField : 'value',
	editable : false,
	multiSelect : false,
	store : Ext.create('Ext.data.Store', {
		fields : [ 'name', 'value' ],
		data : [ [ 'debug', "debug" ], [ 'info', "info" ], [ 'error', 'error' ], [ 'fatal', 'fatal' ] ]
	})
})