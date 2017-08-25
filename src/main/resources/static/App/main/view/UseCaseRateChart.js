Ext.define("App.main.view.UseCaseRateChart", {
	extend : 'Ext.panel.Panel',
	alias : 'widget.UseCaseRateChart',
	border : false,
	initComponent : function() {
		this.callParent(arguments);
		var me = this;
		me.fireEvent('initChart');
	},
	listeners : {
		resize : function(obj, width, height, oldWidth, oldHeight, eOpts) {
			var chart = this.down('chart');
			if (chart) {
				var newH = height;
				chart.setHeight(newH);
			}
		},
		boxready : function(obj, width, height, eOpts) {
			var chart = this.down('chart');
			if (chart) {
				var newH = height;
				chart.setHeight(newH);
			}
		},
		'initChart' : function() {
			var me = this;
			Ext.Ajax.request( {
				url : 'home/use_case_count',
				success : function(resp) {
					var data = resp.result.data;
					var chart = Ext.create( {
						xtype : 'chart',
						width : '100%',
						height : '100%',
						margin : '0 0 0 0',
						padding : 0,
						flipXY : false,
						border : false,
						store : {
							data : data
						},
						insetPadding : '40 0 0 10',
						legend : {
							docked : 'bottom',
							disabled : true,
							hidden : true,
							frame : false,
							border : 5,
							style : {
								borderColor : 'red',
								borderStyle : 'solid',
								display : 'none'
							}
						},
						axes : [ {
							type : 'numeric',
							position : 'left',
							grid : true
						}, {
							type : 'category',
							fields : 'name',
							position : 'bottom'
						} ],
						sprites : [ {
							type : 'text',
							text : '近30天每日测试使用量',
							fontSize : 15,
							width : 100,
							height : 30,
							x : 40,
							y : 20
						} ],
						series : [ {
							type : 'bar',
							xField : 'name',
							yField : 'value2',
							axis : 'bottom',
							stacked : false,
							showInLegend : false,
							/*highlightCfg : {
								fillStyle : '#007CF9'
							},*/
							tooltip : {
								trackMouse : true,
								renderer : function(tooltip, storeItem, item) {
									tooltip.setHtml(storeItem.get('value2')+"个/每天");
								}
							},
							label : {
								field : 'value2',
								display : 'insideEnd'
							},
							style : {
								stroke : "#999",
								color : "#ff8809",
								lineCap : 'miter',
								lineWidth : 1,
								opacity : 0.8
							}
						} ]
					})
					var a = me.down('chart');
					if (a != null) {
						me.remove(a);
					}
					me.add(chart);
				}
			})
		}
	}
})