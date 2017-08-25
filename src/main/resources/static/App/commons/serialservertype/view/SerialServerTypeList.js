Ext.define("App.commons.serialservertype.view.SerialServerTypeList", {
            extend : "Extend.grid.CrudGridPanel",
            alias : 'widget.SerialServerTypeList',
            requires : ['App.commons.serialservertype.viewmodel.SerialServerTypeViewModel'],
            viewModel : 'commons.SerialServerTypeViewModel',
            bind : {
                store : '{Query}',
                columns : '{columns}',
                search : '{search}'
            },
            editor : {
                formClazz : 'App.commons.serialservertype.view.SerialServerTypeEditor',
                save : 'commons/serialservertype/save',
                del : 'commons/serialservertype/delete',
                get : 'commons/serialservertype/get_by_id'
            }
        });