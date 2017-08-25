Ext.define("App.authorization.user.UserSelectionViewModel",{
	extend:"App.authorization.user.UserViewModel",
	alias : 'viewmodel.UserSelectionViewModel',
	data:{
		search:{
			showAdd : false,
			showUpdate : false,
			showRemove :false
		}
	}
})