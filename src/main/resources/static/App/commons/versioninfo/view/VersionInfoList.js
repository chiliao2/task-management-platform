Ext.define('App.commons.versioninfo.view.VersionInfoList', {
            extend : "Extend.grid.CrudGridPanel",
            alias : 'widget.VersionInfoList',
            requires : ['App.commons.versioninfo.VersionInfoViewModel'],
            viewModel : 'VersionInfoViewModel',
            config : {
                tbar : {
                    quickCreate : {
                        hidden : true
                    }
                }
            },
            bind : {
                store : '{Query}',
                columns : '{columns}',
                search : '{search}'
            },
            editor : {
                formClazz : 'App.commons.versioninfo.view.VersionInfoEditor',
                save : 'commons/versioninfo/save',
                get : 'commons/versioninfo/get_by_id',
                del : 'commons/versioninfo/delete'
            }
        });