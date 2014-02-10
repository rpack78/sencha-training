Ext.define("YelpExtplorer.view.Filter", {
	extend: 'Ext.panel.Panel',
	xtype: 'filter',
	requires: ['Ext.form.field.ComboBox'],
	config: {
		schoolId: -1
	},
	updateSchoolId: function(schoolId) {
		this.down('#schoolCombo').setValue(schoolId);
	},
	html: 'filter',
	tbar: [{
		xtype: 'combobox',
		itemId: 'schoolCombo',
		fieldLabel: 'University',
		labelWidth: 60,
		width: 180,
		forceSelection: true,
		emptyText: 'Select',

		store: [
			[0, "USC"],
			[1, "MIT"],
			[2, "Harvard"]
		],

		queryMode: 'local',
		displayField: 'name',
		valueField: 'id',
		listeners: {
			change: function(combo, value) {
				combo.up('filter').setSchoolId(value);
			}
		}
	}]
});