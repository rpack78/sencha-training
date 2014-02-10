Ext.define("YelpExtplorer.view.detail.BusinessDetail", {
	extend: 'Ext.panel.Panel',
	xtype: 'businessdetail',
	requires: ['YelpExtplorer.view.detail.EditBusinessWindow'],
	html: 'businessdetail',
	tbar: [{
		text: 'Edit',
		handler: function(button){
			Ext.create('YelpExtplorer.view.detail.EditBusinessWindow');
		}
	}],
	bbar: [{
		xtype: 'component',
		html: '<a href="http://www.yelp.com" target="_blank"><img src="resources/images/Powered_By_Yelp_Red.png"/></a>'
	}]
});