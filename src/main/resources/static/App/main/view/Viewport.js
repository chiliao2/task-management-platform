Ext.define('App.main.view.Viewport', {
            extend : 'Ext.container.Viewport',
            layout : 'border',
            requires : ['App.main.view.Center', 'App.main.view.North',
                    'App.main.view.MessageClient',
                    'App.main.controller.ViewportController'],
            controller : 'viewport_controller',
            items : [{
                        xtype : 'north',
                        height : 60
                    }, {
                        xtype : 'center'
                    }, {
                        xtype : 'message_client',
                        split : isDebug,
                        hidden : true,
                        height : isDebug === true ? 200 : 0
                    }]
        })