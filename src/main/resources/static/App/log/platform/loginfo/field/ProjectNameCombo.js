Ext.define('App.log.platform.loginfo.field.ProjectNameCombo', {
	extend : 'Ext.form.field.ComboBox',
	alias : 'widget.ProjectNameComboBox',
	queryMode : 'local',
	displayField : 'name',
	valueField : 'value',
	editable : false,
	multiSelect : false,
	store : Ext.create('Ext.data.Store', {
		fields : [ 'name', 'value' ],
		data : [ [ 'HeroCloud', "HeroCloud" ], [ 'Hero服务中心', "Hero服务中心" ], [ '精细化测量工具', '精细化测量工具' ] ]
	})
})