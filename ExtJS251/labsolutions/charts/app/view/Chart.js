Ext.define('Charts.view.Chart', {
	extend: 'Ext.chart.Chart',
	requires: ['Ext.chart.axis.Category', 'Ext.chart.axis.Numeric', 'Ext.chart.series.Line'],

	xtype: 'consumptionchart',


	axes: [{
		type: 'Numeric',
		title: 'Per Capita Consumption of Seafood (kg)',
		position: 'left',
		fields: ['consumption']
	}, {
		type: 'Category',
		title: 'Country',
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
		axis: ['left', 'bottom'],
		highlight: {
			type: 'circle',
			radius: 10,
			fill: 'blue'
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