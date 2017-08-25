Ext.define('App.components.grid.search.GridSearch', {
			extend : 'Ext.container.Container',
			alias : 'widget.GridSearch',
			layout : 'vbox',
			items : [],
			config : {
				fields : {
					search0 : {
						name1 : {
							name : 'xxxx',
							fieldLabel : 'common',
							datatype : 's',
							index : 1
						},
						name2 : {
							name : 'xxxx',
							fieldLabel : 'common',
							datatype : 's',
							index : 1
						}
					}
				},
				gridpanel : ''
			},
			initComponent : function() {
				var fields = this.fields;
				for (var key in fields) {
					var datas = [];
					var items = fields[key];
					for (var key1 in items) {
						var field = items[key1];

						datas.push(Ext.apply(field, {
									xtype : field.xtype?field.xtype:'textfield',
									margin : field.margin?field.margin:'5'
								}));
					}

					this.items.push({
								xtype : 'container',
								layout : 'hbox',
								items : datas
							});
				}
				/*
				this.items[0].items.push({
							xtype : 'button',
							text : 'search',
							margin : '5'
						});
				this.items[0].items.push({
							xtype : 'button',
							text : 'reset',
							margin : '5'
						});*/
				this.callParent(arguments);
			}
		})