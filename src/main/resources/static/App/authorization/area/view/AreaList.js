Ext.define("App.authorization.area.view.AreaList", {
            extend : "App.components.grid.RecordableCrudGridPanel",
            alias : 'widget.AreaList',
            requires : ['App.authorization.area.controller.AreaController',
                    'App.authorization.area.viewmodel.AreaViewModel'],
            controller : 'area_controller',
            viewModel : 'area_viewmodel',
            bind : {
                store : '{Query}',
                columns : '{columns}',
                search : '{search}'
            },
            editor : {
                formClazz : 'App.authorization.area.view.AreaEditor',
                save : 'area/save',
                get : 'area/find_one',
                del : 'area/delete',
                dataType : 'Area'
            }
        });