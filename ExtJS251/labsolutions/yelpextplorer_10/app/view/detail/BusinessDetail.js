Ext.define("YelpExtplorer.view.detail.BusinessDetail", {
	extend: 'Ext.panel.Panel',
	xtype: 'businessdetail',
	requires: ['YelpExtplorer.view.detail.EditBusinessWindow'],

	config: {
		business: null
	},
	refreshTemplate: function() {
		var button = this.down('#edit');
		if (this.getBusiness()) {
			this.update(this.getBusiness().getData());
			button.enable();
		} else {
			this.update(' ');
			button.disable();
		}
	},
	updateBusiness: function(business) {
		this.refreshTemplate();
	},
	bodyPadding: 12,
	tbar: [{
		text: 'Edit',
		itemId: 'edit',
		disabled: true,
		handler: function(button) {
			Ext.create('YelpExtplorer.view.detail.EditBusinessWindow');
		}
	}],
	bbar: [{
		xtype: 'component',
		html: '<a href="http://www.yelp.com" target="_blank"><img src="resources/images/Powered_By_Yelp_Red.png"/></a>'
	}],
	tpl: [
		'<div>',
		'<p><b>{name}</b></p>',
		'<img src="resources/images/stars_{stars}.png"/><br/>',
		'<img src="{photo_url}"/><br/><br/>',
		'Reviews: {review_count}<br/><br/><br/>',
		'{full_address}<br/><br/>',
		'<a href="{url}" target="_blank">Full review at Yelp.com</a>',
		'</div>'
	]
});