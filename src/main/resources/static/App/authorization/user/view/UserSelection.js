Ext.define("App.authorization.user.view.UserSelection", {
            extend : "App.authorization.user.view.UserList",
            alias : 'widget.UserSelection',
            requires : ['App.authorization.user.UserViewModel','App.authorization.user.UserSelectionViewModel'],
            viewModel:'UserSelectionViewModel'
        });