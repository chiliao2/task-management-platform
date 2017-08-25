Ext.define("App.authorization.user.view.UserList", {
            extend : "App.components.grid.RecordableCrudGridPanel",
            alias : 'widget.UserList',
            requires : ['App.authorization.user.UserViewModel'],
            viewModel : 'UserViewModel',
            bind : {
                store : '{Query}',
                columns : '{columns}',
                search : '{search}'
            },
            editor : {
                formClazz : 'App.authorization.user.view.UserEditor',
                save : 'authorization/user/save',
                get : 'authorization/user/find_one',
                del : 'authorization/user/delete',
                dataType : 'User'
            }
        });