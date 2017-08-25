/**
 * 资源树
 */
var tag;
Ext.define('App.authorization.resource.view.ResourceTree', {
    extend: 'Ext.tree.Panel',
    alias : 'widget.ResourceTree',
    requires: [
        'App.authorization.resource.ResourceModel'
    ],    
    reserveScrollbar: true,
    height: 370,
    useArrows: true,
    rootVisible: false,
    multiSelect: true,
    singleExpand: true,
    root: {
        expanded: true,
        text: '资源'
    },
    listeners: {
        /*'itemcontextmenu': function(view, record, item, index, e, eOpts){
    		var tag = record.data.tag;
			var contextMenu = Ext.create('App.authorization.resource.view.ContextMenu',{
                    'targetNodeStore' : view.getStore(),
					'parentGroupId' : record.data.id
				}
			);
			contextMenu.showAt(e.getPoint());
        	e.preventDefault();
        	view.getStore().reload();        },
        	资源菜单用户不能手工创建,需要sql创建
        	*/
        'beforeitemexpand': function(node, eOpts){
    		var tag = node.data.tag;//设置tag参数
    		node.getTreeStore().getProxy().setExtraParam('tag',tag);
        }
    },
    addParam: function(key,value){
    	if(key){
    		this.getStore().getProxy().setExtraParam(key,value);
    	}
    },
    initComponent: function() {
        this.width = 600;
        
        Ext.apply(this, {
            store: new Ext.data.TreeStore({
            	id : 'resourceTreeStore',
                model: 'App.authorization.resource.ResourceModel',
            	nodeParam : 'parentId',
            	defaultRootId :'0',
                folderSort: true
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