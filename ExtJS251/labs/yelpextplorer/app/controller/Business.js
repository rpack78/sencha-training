Ext.define('YelpExtplorer.controller.Business', {
	extend: 'Ext.app.Controller',

	refs: [{
		ref: 'businessDetail',
		selector: 'businessdetail'
	}, {
		ref: 'businessesView',
		selector: 'businessesview'
	}, {
		ref: 'businessesMap',
		selector: 'businessesmap'
	},
	{
		ref: 'businessesGrid',
		selector: 'businessesgrid'
	}],

	config: {
		business: null
	},

	init: function() {

		this.listen({

			component: {
				'businessesmap, businessesview, businessesgrid': {
					select: this.businessSelectHandler,

				},
				'businessesview, businessesgrid': {
					afterrender: this.syncViewFirstTime
				}
			}

		});
	},

	businessSelectHandler: function(component, business) {
		this.setBusiness(business);
	},

	updateBusiness: function(business) {
		this.getBusinessDetail().setBusiness(business);
		if (business) {
			this.getBusinessesView().getSelectionModel().select(business);
			this.getBusinessesMap().highlight(business);
			this.getBusinessesGrid().getSelectionModel().select(business);
		}
	},

	syncViewFirstTime: function(dataview) {
		var record = this.getBusiness();
		if (record) {
			dataview.getSelectionModel().select(record);
		}
	}

});