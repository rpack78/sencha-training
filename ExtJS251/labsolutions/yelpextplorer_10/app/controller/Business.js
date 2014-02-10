Ext.define('YelpExtplorer.controller.Business', {
	extend: 'Ext.app.Controller',
	refs: [{
		ref: 'businessDetail',
		selector: 'businessdetail'
	},{
		ref: 'businessesMap',
		selector: 'businessesmap'
	},{
		ref: 'businessesView',
		selector: 'businessesview'
	}],
	config: {
		business: null
	},
	updateBusiness: function(business) {
		this.getBusinessDetail().setBusiness(business);
		if (business) {
			this.getBusinessesView().getSelectionModel().select(business);
			this.getBusinessesMap().highlight(business);
		}
	},
	init: function() {

		this.listen({

			component: {

				'businessesmap,businessesview': {
					select: this.businessSelectHandler
				},
				'businessesview':{
					afterrender: this.syncViewFirstTime
				}

			}

		});

	},
	businessSelectHandler: function(component, business) {
		this.setBusiness(business);
	},
	syncViewFirstTime: function(dataview) {
		var record = this.getBusiness();
		if (record) {
			dataview.getSelectionModel().select(record);
		}
	}

});