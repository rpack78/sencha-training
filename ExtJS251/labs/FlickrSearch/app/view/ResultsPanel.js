Ext.define('MyApp.view.ResultsPanel', {
	extend: 'Ext.view.View',

	xtype: 'resultspanel',

	store: 'Flickr',

	layout: 'fit',

	autoScroll: true,
	itemSelector: 'div',
	itemTpl: [
		'<figure>',
		'    <img src="{media.m}" />',
		// '    <figcaption>{title}<br/>{author}</figcaption><br/>',
		'</figure>'
	],

	cls: 'picture',
	itemCls: 'overpicture',
	// overItemCls: 'over',
	// selectedItemCls: 'selected',

	emptyText: 'No results found'
});