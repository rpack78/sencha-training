Ext.define('YelpExtplorer.store.StarCount', {
	extend: 'Ext.data.Store',
	fields: ['stars', 'count'],
	sorters: ['stars']
});

