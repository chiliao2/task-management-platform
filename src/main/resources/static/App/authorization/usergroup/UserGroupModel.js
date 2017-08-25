Ext.define('App.authorization.usergroup.UserGroupModel', {
	extend : 'Ext.data.TreeModel',
	fields : [ {
		name : 'text',
		type : 'string'
	}, {
		name : 'id',
		type : 'string'
	}, {
		name : 'parent.id',
		type : 'string'
	}],
	proxy: {
        type: 'ajax',
        api : {
			create : 'authorization/usergroup/save',
			read : 'authorization/usergroup/find_by_parent',
			update : 'authorization/usergroup/save',
			destroy : '/controller/destroy_action'
		},
        reader : {
			type : 'json',
			rootProperty : 'data'
		}
    }
});
