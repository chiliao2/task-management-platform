/**
 * @class App.authorization.resource.view.ContextMenu
 * @extends Ext.menu.Menu
 */
Ext.define('App.authorization.resource.view.ContextMenu', {
    extend: 'Ext.menu.Menu',
    xtype: 'nodeContextMenu',
    targetNodeStore : null,//
    parentGroupId : null,//
    initComponent: function(){
    	this.callParent(arguments);
    	var me = this;
        me.targetNodeStore = this.targetNodeStore;
    	me.parentGroupId = this.parentGroupId;

    },
    items: [
        {
            text: '新建',
            handler : function(){
        		var editor = Ext.create("App.authorization.resource.view.ResourceEditor",{
                    'targetNodeStore' : this.up('nodeContextMenu').targetNodeStore
                });
                var param = {};
                var parentGroupId = this.up('nodeContextMenu').parentGroupId;
                param['resource.parent.id'] = parentGroupId;
                editor.addParams(param);
        		editor.show();
            }
        }
    ]
});