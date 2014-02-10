Ext.define('YelpExtplorer.controller.Business', {
	extend: 'Ext.app.Controller',
	refs: [{
		ref: 'businessDetail',
		selector: 'businessdetail'
	}],
	config: {
		business: null
	},
	updateBusiness: function(business) {
		this.getBusinessDetail().setBusiness(business);
	},
	init: function() {

		this.listen({

			component: {

				'businessesmap': {
					select: this.businessSelectHandler
				}

			}

		});

	},
	businessSelectHandler: function(component, business) {
		this.setBusiness(business);
	}

});