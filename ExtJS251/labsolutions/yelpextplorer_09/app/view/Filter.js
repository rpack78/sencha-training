Ext.define("YelpExtplorer.view.Filter", {
	extend: 'Ext.panel.Panel',
	xtype: 'filter',
	requires: ['Ext.form.field.ComboBox'],
	config: {
		schoolId: -1,
		category: ''
	},

	applySchoolId: function(schoolId) {
		var record = this.down('#schoolCombo').getStore().getById(schoolId);
		if (record) {
			return schoolId;
		}
	},
	updateSchoolId: function(schoolId) {
		this.down('#schoolCombo').setValue(schoolId);
		this.fireEvent('schoolchange', this, schoolId);
	},

	applyCategory: function(category) {
		return category ? category : 'All';
	},
	updateCategory: function(category) {
		this.fireEvent('categorychange', this, category);
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

		store: 'Schools',

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