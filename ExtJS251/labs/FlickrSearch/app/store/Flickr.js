Ext.define('MyApp.store.Flickr', {
	extend: 'Ext.data.Store',
	requires: [
		'MyApp.model.Flickr',
		'Ext.data.proxy.JsonP',
	],

	model: 'MyApp.model.Flickr',
	autoLoad: false
});