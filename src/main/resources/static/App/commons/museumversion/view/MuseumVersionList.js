Ext.define("App.commons.museumversion.view.MuseumVersionList", {
            extend : "App.components.grid.RecordableCrudGridPanel",
            alias : 'widget.MuseumVersionList',
            requires : ['App.commons.museumversion.viewmodel.MuseumVersionViewModel'],
            viewModel : 'museumversion_viewmodel',
            bind : {
                store : '{Query}',
                columns : '{columns}',
                search : '{search}'
            },
            editor : {
                formClazz : 'App.commons.museumversion.view.MuseumVersionEditor',
                save : 'commons/museumversion/save',
                del : 'commons/museumversion/delete',
                get : 'commons/museumversion/get_by_id',
                dataType : 'MuseumVersion'
            }
        });