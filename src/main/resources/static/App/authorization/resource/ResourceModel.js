Ext.define('App.authorization.resource.ResourceModel', {
	extend : 'Ext.data.TreeModel',
	fields : [ {
		name : 'text',
		type : 'string'
	}, {
		name : 'id',
		type : 'string'
	}],
	proxy: {
        type: 'ajax',
        api : {
			create : 'authorization/usergroup/save',
			read : 'authorization/resource/find_by_parent',
			update : '/controller/update',
			destroy : '/controller/destroy_action'
		},
        reader : {
			type : 'json',
			rootProperty : 'data'
		}
    }
});
