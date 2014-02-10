Ext.define("YelpExtplorer.view.BusinessesView", {
	extend: 'Ext.view.View',
	xtype: 'businessesview',

	autoScroll: true,

	emptyText: 'There are no matching businesses.',
	padding: 8,

	itemTpl: '<figure><img src="{photo_url}" /><figcaption>{name}</figcaption></figure>',
	itemCls: 'businessesview',
	overItemCls: 'over',
	selectedItemCls: 'selected'
	
});