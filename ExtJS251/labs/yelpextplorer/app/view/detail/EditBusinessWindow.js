Ext.define("YelpExtplorer.view.detail.EditBusinessWindow", {
	extend: 'Ext.window.Window',
	xtype: 'editbusinesswindow',
	title: 'Edit Business',
	autoShow: true,
	modal: true,
	resizable: false,

	layout: 'fit',
	config: {
		business: null
	},

	stateful: true,
	stateId: 'editBusinessWindow',

	initComponent: function() {
		this.callParent(); // Fully create the window and the items in it.
		this.down('form').loadRecord(this.getBusiness());
		this.updateStars();
	},

	buttons: [{
		text: "Save",
		ui: 'save',
		handler: function(button) {
			var window = button.up('editbusinesswindow');
			window.down('form').updateRecord();
			window.close();
			// (1) Look up the containment hierarchy and save a reference 
			//     to the window in a local variable.
			// (2) From the window, look down and get the form panel, and
			//     run its updateRecord() method. 
			// (3) Finally, run close() on the window.
		}
	}, {
		text: "Cancel",
		handler: function(button) {
			var window = button.up('editbusinesswindow');
			window.close();
		}
	}],

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

	updateStars: function() {
		var rating = this.down('field[name="stars"]').getValue();
		this.down('#starsImage').setSrc('resources/images/stars_' + rating + '.png');
	}

});