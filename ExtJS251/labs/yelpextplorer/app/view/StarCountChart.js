Ext.define('YelpExtplorer.view.StarCountChart', {
	extend: 'Ext.chart.Chart',
	requires: [],

	xtype: 'starcountchart',

	axes: [{
		type: 'Category',
		position: 'bottom',
		fields: ['stars'],
		title: 'Star Rating'
	},{
		type: 'Numeric',
		position: 'left',
		fields: 'count',
		minimum: 0,
		grid: 'true',
		title: 'Number of Businesses'
	}],
	series: [{
		type: 'column',
		xField: 'stars',
		yField: 'count'
	}],
	animate: true
});