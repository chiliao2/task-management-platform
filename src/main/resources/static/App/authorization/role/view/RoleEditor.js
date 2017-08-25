Ext.define("App.authorization.role.view.RoleEditor", {
	extend : 'Extend.window.FormWindow',
	alias : 'widget.role_editor',
	requires : [ 'App.authorization.role.view.RoleResourceTree'],
	config : {
		window : {
			title : '角色信息编辑',
			width : 700,
			height : 600,
			modal : true
		},
		entity : 'role'
	},
	defaults : {
		columnWidth : 1,
		border : false
	},
	addParam : function(){
		var checkedNodes = this.down('RoleResourceTree').getChecked();
		ids = [];
        Ext.Array.each(checkedNodes, function(rec){
            ids.push(rec.get('id'));
        });
		var param = {'resourceId' : ids.join(",")};
		this.addParams(param);
	},
	items : [ {
		xtype : 'hidden',
		name : 'id'
	}, {
		xtype : 'textfield',
		name : 'name',
		fieldLabel : '角色名',
		allowBlank : false,
		blankText : '角色名不能为空喔！',
		regex : /^(\w*[\u4e00-\u9fa6]*)*$/,
		regexText : '不能包含非法字符',
		beforeLabelTextTpl : [ '<span style="color:red;">*</span>' ],
		maxLength : 32
	}, {
		xtype : 'textfield',
		name : 'description',
		fieldLabel : '描述',
		maxLength : 512
	}, {
		xtype : 'textfield',
		name : 'createTime',
		readOnly : true,
		fieldLabel : '创建日期',
		hidden : true
	}, {
		layout : 'border',
		height : 450,
		items : [ {
			region : 'center',
			name : 'resoureses',
			xtype : 'RoleResourceTree'

		} ]
	} ]
})
