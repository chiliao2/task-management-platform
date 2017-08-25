Ext.define('App.authorization.resource.view.ResourceList', {
            extend : "App.components.grid.RecordableCrudGridPanel",
            alias : 'widget.ResourceList',
            requires : ['App.authorization.resource.ResourceViewModel'],
            viewModel : 'ResourceViewModel',
            bind : {
                store : '{Query}',
                columns : '{columns}',
                search : '{search}'
            },
            editor : {
                formClazz : 'App.authorization.resource.view.ResourceEditor',
                save : 'authorization/resource/save',
                get : 'authorization/resource/get_by_id',
                del : 'authorization/resource/delete',
                dataType : 'Resource'
            }
        });