Ext.define("YelpExtplorer.view.BusinessesGrid", {
	extend: 'Ext.grid.Panel',
	xtype: 'businessesgrid',

	requires: ['Ext.grid.column.Column', 'Ext.grid.column.Template'],

	columns: [{
		text: 'Name',
		dataIndex: 'name',
		width: 120
	}, {
		xtype: 'templatecolumn',
		text: 'Rating',
		dataIndex: 'stars',
		tpl: '<img src="resources/images/stars_{stars}.png"/>'
	}, {
		text: 'Reviews',
		dataIndex: 'review_count',
		width: 60,
		align: 'right'
	}, {
		text: 'Address',
		dataIndex: 'full_address',
		flex: 1
	}]
});