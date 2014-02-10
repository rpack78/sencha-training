Ext.define('YelpExtplorer.model.Category', {
	extend: 'Ext.data.Model',

	fields: [{
			name: 'text',
			type: 'auto'
		}

	],
	proxy: {
		type: 'ajax',
		url: 'http://yelp.senchabits.com/go?fn=categories',
		reader: {
			type: 'json'
		}
	}

});