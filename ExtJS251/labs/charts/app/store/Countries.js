Ext.define('Charts.store.Countries', {
	extend: 'Ext.data.Store',
	requires: ['Charts.model.Country'],

	model: 'Charts.model.Country',
	autoLoad: true,

	sorters: {
		property: 'consumption',
		direction: 'DESC'
	}
});