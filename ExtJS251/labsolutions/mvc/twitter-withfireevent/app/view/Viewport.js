Ext.define('Twitter.view.Viewport', {
	requires: [
		'Ext.form.field.Text', 'Twitter.view.TwitterGrid'
	],
	extend: 'Ext.container.Viewport',
	layout: 'fit',
	items: [{
		xtype: 'twittergrid'
	}]
});