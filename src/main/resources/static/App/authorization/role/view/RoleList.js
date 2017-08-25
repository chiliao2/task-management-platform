Ext.define("App.authorization.role.view.RoleList", {
            extend : "App.components.grid.RecordableCrudGridPanel",
            alias : 'widget.RoleList',
            requires : ['App.authorization.role.controller.RoleController',
                    'App.authorization.role.viewmodel.RoleViewModel'],
            controller : 'role_controller',
            viewModel : 'role_viewmodel',
            bind : {
                store : '{Query}',
                columns : '{columns}',
                search : '{search}'
            },
            editor : {
                formClazz : 'App.authorization.role.view.RoleEditor',
                save : 'authorization/role/save',
                get : 'authorization/role/find_one',
                del : 'authorization/role/delete',
                dataType : 'Role'
            }
        });