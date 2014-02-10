Ext.define("YelpExtplorer.view.detail.EditBusinessWindow", {
	extend: 'Ext.window.Window',
	xtype: 'editbusinesswindow',

	requires: ['Ext.form.Panel'],

	stateful: true,
	stateId: 'editBusinessWindow',

	title: 'Edit Business',
	autoShow: true,
	modal: true,
	resizable: false,

	config: {
		business: null
	},

	initComponent: function() {
		this.callParent(); // Fully create the window and the items in it.
		this.down('form').loadRecord(this.getBusiness());
		this.updateStars();
	},
	layout: 'fit',
	items: [{
		xtype: 'form',
		bodyPadding: 4,
		items: [{
			xtype: 'textfield',
			fieldLabel: 'Name',
			name: 'name'
		}, {
			xtype: 'container',
			layout: 'hbox',
			items: [{
				xtype: 'image',
				width: 84,
				height: 17,
				itemId: 'starsImage',
				style: {
					'margin-right': '16px'
				}
			}, {
				xtype: 'slider',
				increment: 0.5,
				decimalPrecision: 1,
				minValue: 1,
				maxValue: 5,
				width: 160,
				name: 'stars',
				listeners: {
					change: function(field) {
						field.up('window').updateStars();
					}
				}
			}]
		}]
	}],
	buttons: [{
		text: 'Save',
		ui: 'save',
		handler: function(button) {
			var window = button.up('window');
			window.down('form').updateRecord();
			window.close();
		}
	}, {
		text: 'Cancel',
		handler: function(button) {
			button.up('window').close();
		}
	}],
	updateStars: function() {
		var rating = this.down('field[name="stars"]').getValue();
		this.down('#starsImage').setSrc('resources/images/stars_' + rating + '.png');
	}

});