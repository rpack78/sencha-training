Ext.define('Charts.view.Chart', {

	extend: 'Ext.chart.Chart',

	xtype: 'consumptionchart',

	requires: ['Ext.util.Point'],

	axes: [{
		title: 'Consumption (kg)',
		type: 'Numeric',
		position: 'left',
		fields: ['consumption'],
		minimum: 0,
		maximum: 100
	}, {
		title: 'Country',
		type: 'Category',
		position: 'bottom',
		fields: ['country'],
		label: {
			rotate: {
				degrees: 45
			}
		}
	}],

	series: [{
		type: 'line',
		xField: 'country',
		yField: 'consumption',
		highlight: {
			thpe: 'circle',
			radius: 10
		},
		listeners: {
			itemmouseover: function(item) {
				var chart = item.series.chart;
				chart.fireEvent('itemmouseover', chart, item.storeItem);
			}
		}
	}],

	highlightItem: function(record) {
		// Highlight the item referencing the record
		var series = this.series.get(0); // The line is the first item
		series.unHighlightItem(); // Un-highlight everything
		if (!record) {
			return;
		}
		var items = series.items;
		for (var i = 0; i < items.length; i++) {
			if (items[i].storeItem === record) {
				series.highlightItem(items[i]);
				break;
			}
		}
	}
});