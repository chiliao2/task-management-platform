Ext.define('App.main.view.Center', {
            extend : 'Ext.tab.Panel',
            alias : 'widget.center',
            region : 'center',
            requires : ['App.main.view.Home'],
            items : [{
                        xtype : 'home',
                        id : 'home'
                    }],
             listeners:{

             //重新加载一次,确保分页正常
                beforetabchange:function( tabPanel, newCard, oldCard, eOpts ){

                }
             }
 });