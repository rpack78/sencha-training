Ext.define('YelpExtplorer.controller.Filter', {
	extend: 'Ext.app.Controller',

	refs: [{
		ref: 'businessesMap',
		selector: 'businessesmap'
	}, {
		ref: 'filterPanel',
		selector: 'filter'
	}],
	stores: ['Schools', 'Businesses'],
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

	},
	categoryChangeHandler: function(filterPanel, category) {
		this.log(category);
	},
	schoolChangeHandler: function(filterPanel, schoolId) {
		this.log(schoolId);
		var school = this.getSchoolsStore().getById(schoolId);
		if (school) {
			this.getBusinessesMap().centerMap(school.get('latitude'), school.get('longitude'));
			this.getBusinessesStore().updateSchool(school);
		}
	},
	log: function(message) {
		console.log(arguments.callee.caller.$name + ': ' + message);
	},
	schoolsLoadHandler: function(store, records) {
		this.getFilterPanel().setSchoolId(20); // Illinois
	}

});