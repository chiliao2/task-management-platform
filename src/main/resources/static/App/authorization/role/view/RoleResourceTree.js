/**
 * 角色分配的资源树
 */
var tag;
Ext.define('App.authorization.role.view.RoleResourceTree', {
    extend: 'Ext.tree.Panel',
    alias : 'widget.RoleResourceTree',
    requires: [
        'App.authorization.resource.ResourceModel'
    ],    
    reserveScrollbar: true,
    height: 370,
    useArrows: true,
    rootVisible: false,
    multiSelect: true,
    singleExpand: false,
    root: {
        expanded: true,
        text: '资源'
    },
    listeners: {
        'itemcontextmenu': function(view, record, item, index, e, eOpts){
    		var tag = record.data.tag;
			var contextMenu = Ext.create('App.authorization.resource.view.ContextMenu',{
                    'targetNodeStore' : view.getStore(),
					'parentGroupId' : record.data.id
				}
			);
			contextMenu.showAt(e.getPoint());
        	e.preventDefault();
        	//view.getStore().reload();
        },
        'beforeitemexpand': function(node, eOpts){
    		var tag = node.data.tag;//设置tag参数
    		node.getTreeStore().getProxy().setExtraParam('tag',tag);
        }
    },
    initComponent: function() {
        
    	var me = this;
        this.width = 600;
        var roleId = me.up('FormWindow').hiddenId;
//        alert(roleId);
        Ext.apply(this, {
            store: new Ext.data.TreeStore({
            	id : 'resourceTreeStore',
            	nodeParam : 'parentId',
            	autoLoad : true,
            	defaultRootId :'0',
                folderSort: true,
                proxy: {
                	type : 'ajax',
				    url: 'authorization/resource/get_resource_of_role',
//                	url: 'check-nodes.json',
//	                model: 'App.authorization.resource.ResourceModel',
			        reader : {
						type : 'json'
//						rootProperty : 'data'
					},
					extraParams : {
						'roleId' : roleId
					}
				}
            }),
            columns: [{
                xtype: 'treecolumn',
                text: '资源名称',
                flex: 2,
                sortable: true,
                dataIndex: 'text'
            }]
        });
        this.callParent(arguments);
    }
});