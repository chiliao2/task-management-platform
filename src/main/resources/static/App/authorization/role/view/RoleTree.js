/**
 * 角色树
 */
var tag;
Ext.define('App.authorization.role.view.RoleTree', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.RoleTree',
	requires : [ 'App.authorization.role.model.RoleModel' ],
	reserveScrollbar : true,
	height : 370,
	useArrows : true,
	rootVisible : false,
	multiSelect : true,
	singleExpand : true,
	root : {
		expanded : true,
		text : '用户角色'
	},
	listeners : {
		'itemcontextmenu' : function(view, record, item, index, e, eOpts) {
			var tag = record.data.tag;
			var contextMenu = Ext.create('App.authorization.resource.view.ContextMenu', {
				'targetNodeStore' : view.getStore(),
				'parentGroupId' : record.data.id
			});
			contextMenu.showAt(e.getPoint());
			e.preventDefault();
			//view.getStore().reload();
	},
	'beforeitemexpand' : function(node, eOpts) {
		var tag = node.data.tag;//设置tag参数
		node.getTreeStore().getProxy().setExtraParam('tag', tag);
	}
	},
	initComponent : function() {
		//this.width = 600;

		Ext.apply(this, {
			store : new Ext.data.TreeStore( {
				id : 'resourceTreeStore',
				model : 'App.authorization.resource.ResourceModel',
				nodeParam : 'parentId',
				defaultRootId : '0',
				folderSort : true
			}),
			columns : [ {
				xtype : 'treecolumn',
				text : '角色资源',
				flex : 2,
				sortable : true,
				dataIndex : 'text'
			} ]
		});
		this.callParent(arguments);
	}
});