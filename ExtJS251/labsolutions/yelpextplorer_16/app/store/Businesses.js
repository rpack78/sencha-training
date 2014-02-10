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
	},
	filterByCategory: function(category) {
		if (!category || (category === 'All')) {
			this.clearFilter();
		} else {
			this.filterBy(function(business) {
				return Ext.Array.contains(business.get('categories'), category);
			});
		}
	}

});