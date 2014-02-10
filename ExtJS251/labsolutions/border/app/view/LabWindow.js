Ext.define('Border.view.LabWindow', {
	extend: 'Ext.window.Window',
	requires: ['Ext.layout.container.Border'],

	xtype: 'labwindow',

	x: 20,
	y: 20,
	title: 'Border',
	height: 300,
	width: 500,
	autoShow: true,

	layout: 'border',
	items: [{
		title: 'West',
		region: 'west',
		width: 80,
		collapsible: true,
		collapseMode: 'mini',
		weight: 100
	}, {
		title: 'Center',
		region: 'center'
	}, {
		title: 'North',
		region: 'north',
		height: 80,
		collapsible: true
	}, {
		title: 'East',
		region: 'east',
		flex: 0.5,
		collapsible: true
	}, {
		title: 'South',
		region: 'south',
		height: 80,
		collapsible: true
	}]

});