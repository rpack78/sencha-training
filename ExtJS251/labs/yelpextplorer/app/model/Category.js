Ext.define('YelpExtplorer.model.Category', {
	extend: 'Ext.data.Model',

	fields: [{
			name: 'text',
			type: 'auto'
		}
	],

	proxy: {
		type: 'ajax',
		url: 'resources/data/treestore.json'
	}
});