/**
 * @class App.authorization.usergroup.view.ContextMenu
 * @extends Ext.menu.Menu
 */
Ext.define('App.authorization.usergroup.view.ContextMenu', {
    extend: 'Ext.menu.Menu',
    xtype: 'nodeContextMenu',
    targetNodeStore : null,//
    parentGroupId : null,//
    initComponent: function(){
    	this.callParent(arguments);
    	var me = this;
        me.targetNodeStore = this.targetNodeStore;
        me.targetNode = this.targetNode;
    	me.parentGroupId = this.parentGroupId;
    	
    },
    items: [
        {
            text: '新建',
            handler : function(){
//        		alert(this.up('nodeContextMenu').parentGroupId);
        		var editor = Ext.create("App.authorization.usergroup.view.UserGroupEditor",{
                    'targetNodeStore' : this.up('nodeContextMenu').targetNodeStore,
                    'targetNode' : this.up('nodeContextMenu').targetNode
                });
                var param = {};

                var parentGroupId = this.up('nodeContextMenu').parentGroupId;
                if(parentGroupId.indexOf('group') != -1){
                    param['userGroup.parent.id'] = parentGroupId.replace(/group/,"");
                    editor.removeParams('userGroup.area.id');
                }else{
                    param['userGroup.area.id'] = parentGroupId.replace(/area/,"");
                    editor.removeParams('userGroup.parent.id');
                }
                editor.addParams(param);
        		editor.show();
            }
        }/*,
        {
            text: '新建分类'
        },
        {
            text: '删除',
            handler : function(){

            }
        }*/
    ]
});