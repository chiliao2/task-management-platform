Ext.define("App.absent.view.AbsentList", {
    extend: "App.components.grid.RecordableCrudGridPanel",
    alias: 'widget.AbsentList',
    requires: ['App.absent.viewmodel.AbsentViewModel', 'App.absent.view.ApplyWindow'],
    viewModel: 'AbsentViewModel',
    bind: {
        store: '{Query}',
        columns: '{columns}',
        search: '{search}'
    },
    editor: {
        formClazz: 'App.absent.view.ApplyWindow'
    }
});