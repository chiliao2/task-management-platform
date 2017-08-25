/**
 * 用户分组
 */
var tag;
Ext.define('App.authorization.usergroup.view.UserGroupTree', {
    extend: 'Ext.tree.Panel',
    
    requires: [
        'App.authorization.usergroup.UserGroupModel'
    ],    
    xtype: 'tree-grid',
    
//    reserveScrollbar: true,
    
    title: 'Core Team Projects',
    height: 370,
//    useArrows: true,
    rootVisible: false,
    multiSelect: true,
    //singleExpand: true,
    root: {
        expanded: true,
        text: '用户分组'
    },
    listeners: {
        'itemcontextmenu': function(view, record, item, index, e, eOpts){
    		if(record.data.leaf){return false;}//叶子节点不能有弹出菜单了
    		
	        var node = view.getStore().getNodeById(record.id);
	        node.expand();
	       
    		var tag = record.data.tag;
			var contextMenu = Ext.create('App.authorization.usergroup.view.ContextMenu',{
                    'targetNodeStore' : view.getStore(),
                    'targetNode' : node,
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
        },
        'edit': function(editor, e) {
            var me = this,
                userGroup = e.record;
            var re = new RegExp(Extend.Constant.regex.name.value);    
            if (!re.test(userGroup.data.text)){
            	Extend.Utils.err("名称为 "+Extend.Constant.regex.name.desc, "提示");
            	return false;
            }
                
            var params = userGroup.getTreeStore().getProxy().getExtraParams();
            params['parentId'] = userGroup.data.parent.id;
            params['text'] = userGroup.data.text;
            params['id'] = userGroup.data.id;
            params['depth'] = userGroup.data.depth;
            
            
            
            
            delete params['tag'];
                userGroup.save({
                success: function(list, operation) {
                    Extend.Utils.info('保存成功', "提示");
                },
                failure: function(list, operation) {
					userGroup.reject();
                    var error = operation.getError(),
                    msg = Ext.isObject(error) ? error.status + ' ' + error.statusText : error;
                }
            });
                delete params['parentId'];
        }
    },
    initComponent: function() {
        var me = this;
        this.width = 600;
        /**
         * 编辑器
         */
        /**
         * This Tree Panel's cell editing plugin
         * @property cellEditingPlugin
         * @type Ext.grid.plugin.CellEditing
         */
        me.plugins = [me.cellEditingPlugin = Ext.create('Ext.grid.plugin.CellEditing',{
        	listeners : {
        		"beforeedit" : function(editor, context, eOpts){
        			var node = context.record;
        			if (node.data.depth == 1) {//第一级 节点为区域节点,此处不能编辑
						return false;
					}
        		}
        	}
        })];


        Ext.apply(this, {
            store: new Ext.data.TreeStore({
            	id : 'usergroupTreeStore',
                model: 'App.authorization.usergroup.UserGroupModel',
            	nodeParam : 'parentId',
            	defaultRootId :'0',
                folderSort: true
            }),
            columns: [{
                xtype: 'treecolumn',
                text: '名称',
                flex: 2,
                sortable: true,
                editor: {
                    xtype: 'textfield',
                    selectOnFocus: true,
                    allowOnlyWhitespace: false
                },
                dataIndex: 'text'
            }]
        });
        this.callParent(arguments);
    }
});