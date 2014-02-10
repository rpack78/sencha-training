Ext.define('YelpExtplorer.controller.Filter', {
	extend: 'Ext.app.Controller',

	refs: [{
		ref: 'businessesMap',
		selector: 'businessesmap'
	}, {
		ref: 'filterPanel',
		selector: 'filter'
	}],
	stores: ['Schools'],
	init: function() {

		this.listen({

			component: {

				'filter #schoolCombo': {
					change: this.schoolChangeHandler
				}

			},
			store: {

				'#Schools': {
					load: this.schoolsLoadHandler
				}

			}

		});

	},
	schoolChangeHandler: function(combo, schoolId) {
		this.log(schoolId);
		var school = this.getSchoolsStore().getById(schoolId);
		if (school) {
			this.getBusinessesMap().centerMap(school.get('latitude'), school.get('longitude'));
		}
	},
	log: function(message) {
		console.log(arguments.callee.caller.$name + ': ' + message);
	},
	schoolsLoadHandler: function(store, records) {
		this.getFilterPanel().setSchoolId(20); // Illinois
	}

});