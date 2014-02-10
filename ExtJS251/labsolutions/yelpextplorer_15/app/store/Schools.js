Ext.define('YelpExtplorer.store.Schools', {
	extend: 'Ext.data.Store',
	requires: ['YelpExtplorer.model.School'],

	model: 'YelpExtplorer.model.School',
	autoLoad: true
});