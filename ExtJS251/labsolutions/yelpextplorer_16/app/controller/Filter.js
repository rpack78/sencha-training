Ext.define('YelpExtplorer.controller.Filter', {
	extend: 'Ext.app.Controller',

	requires: ['Ext.state.Manager', 'Ext.state.CookieProvider'],

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

	stores: ['Schools', 'Businesses', 'Categories'],
	init: function() {

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
				}

			}

		});

		Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));

	},
	categoryChangeHandler: function(filterPanel, category) {
		this.getBusinessesStore().filterByCategory(category);
		this.getBusinessDetail().setBusiness(null);
	},
	schoolChangeHandler: function(filterPanel, schoolId) {
		this.log(schoolId);
		var school = this.getSchoolsStore().getById(schoolId);
		if (school) {
			this.getBusinessesMap().centerMap(school.get('latitude'), school.get('longitude'));
			this.getBusinessesStore().updateSchool(school);
		}
		Ext.state.Manager.set('schoolId', schoolId);
	},
	log: function(message) {
		console.log(arguments.callee.caller.$name + ': ' + message);
	},
	schoolsLoadHandler: function(store, records) {
		// Get the previously saved school ID. 
		// Default to 20 -- Illinois.
		var savedSchoolId = Ext.state.Manager.get('schoolId', 20);
		this.getFilterPanel().setSchoolId(savedSchoolId);
	}

});