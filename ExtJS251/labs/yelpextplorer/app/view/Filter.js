Ext.define("YelpExtplorer.view.Filter", {
	extend: 'Ext.tree.Panel',

	xtype: 'filter',
	html: 'filter',

	requires: ['Ext.form.field.ComboBox'],

	initComponent: function() {
		var me = this;
		this.on('select', function(selectionModel, record) {
			me.setCategory(record.get('text'));
		});
		this.callParent();
	},

	config: {
		schoolId: -1,
		category: ''
	},

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
	}],

	applySchoolId: function(schoolId) {
		var schoolStore = this.down('#schoolCombo').getStore();
		if (schoolStore.getById(schoolId)) {
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
	}


});