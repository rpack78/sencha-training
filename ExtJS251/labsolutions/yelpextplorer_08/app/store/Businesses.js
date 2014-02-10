Ext.define('YelpExtplorer.store.Businesses', {
	extend: 'Ext.data.Store',
	requires: ['YelpExtplorer.model.Business'],

	model: 'YelpExtplorer.model.Business',
	sorters: ['name'],

	updateSchool: function(school) {
		var schoolId = school.getId();
		if (schoolId) {
			this.load({
				params: {
					schoolid: schoolId
				}
			})
		}
	}

});