Ext.define('YelpExtplorer.controller.Filter', {
	extend: 'Ext.app.Controller',

	requires: [
		'Ext.state.Manager',
		'Ext.state.CookieProvider'
	],

	stores: ['Schools', 'Businesses', 'Categories', 'StarCount'],

	refs: [{
		ref: 'businessesMap',
		selector: 'businessesmap'
	}, {
		ref: 'filterPanel',
		selector: 'filter'
	}, {
		ref: 'businessDetail',
		selector: 'businessdetail'
	}],

	init: function() {

		Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));

		this.listen({

			component: {
				'filter': {
					schoolchange: this.schoolChangeHandler,
					categorychange: this.categoryChangeHandler
				}
			},
			store: {
				'#Schools': {
					load: this.schoolsLoadHandler
				},
				'#Businesses': {
					datachanged: this.businessesStoreChangeHandler
				}
			}

		});
	},

	schoolChangeHandler: function(component, schoolId) {
		this.log(schoolId);
		var school = this.getSchoolsStore().getById(schoolId);
		if (school) {
			this.getBusinessesMap().centerMap(school.get('latitude'), school.get('longitude'));
			this.getBusinessesStore().updateSchool(school.getId());
			Ext.state.Manager.set('schoolId', schoolId);
		}

	},

	schoolsLoadHandler: function(store, records) {
		var savedSchoolId = Ext.state.Manager.get('schoolId', 20);
		this.getFilterPanel().setSchoolId(savedSchoolId);
	},

	businessesStoreChangeHandler: function(store) {
		var counts = {0: 0,1: 0,1.5: 0,2: 0,2.5: 0,3: 0,3.5: 0,4: 0,4.5: 0,5: 0};
		store.each(function(record) {
			var index = record.getData().stars;
			counts[index]++;
		});
		var storeArray = [];
		Ext.Object.each(counts, function(key, value, object) {
			storeArray.push({stars: key, count: value});
		})
		console.log(storeArray);
		this.getStarCountStore().loadData(storeArray);
	},

	categoryChangeHandler: function(filter, category) {
		this.getBusinessesStore().filterByCategory(category);
		this.getBusinessDetail().setBusiness(null);
	},

	log: function(message) {
		console.log(arguments.callee.caller.$name + ': ' + message);
	},


});