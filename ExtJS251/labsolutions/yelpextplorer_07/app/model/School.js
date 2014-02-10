Ext.define('YelpExtplorer.model.School', {
	extend: 'Ext.data.Model',

	fields: [{
			name: 'id',
			type: 'auto'
		}, {
			name: 'name',
			type: 'auto'
		}, {
			name: 'fullname',
			type: 'auto'
		}, {
			name: 'latitude',
			type: 'auto'
		}, {
			name: 'longitude',
			type: 'auto'
		}

	],
	proxy: {
		type: 'ajax',
		url: 'http://yelp.senchabits.com/go?fn=schoollist',
		reader: {
			type: 'json',
			root: 'data'
		}
	}
});