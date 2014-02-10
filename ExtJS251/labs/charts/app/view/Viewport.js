Ext.define('Charts.view.Viewport', {
	extend: 'Ext.Viewport',
    requires: ['Charts.view.Grid', 'Charts.view.Chart', 'Ext.layout.container.Border'],
	layout: 'border',
	items: [{
			xtype: 'consumptiongrid',
			region: 'west',
			width: 220,
			store: 'Countries'
		}, {
			xtype: 'consumptionchart',
			region: 'center',
			store: 'Countries'
		}
	]
});