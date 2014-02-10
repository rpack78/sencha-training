/*
 * File: app/view/Location.js
 *
 * This file was generated by Sencha Architect version 3.0.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Umbrella.view.Location', {
    extend: 'Ext.form.Panel',
    alias: 'widget.location',

    requires: [
        'Ext.field.Text',
        'Ext.Button',
        'Ext.field.Checkbox'
    ],

    config: {
        rainy: null,
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        items: [
            {
                xtype: 'textfield',
                itemId: 'city',
                label: 'City'
            },
            {
                xtype: 'button',
                itemId: 'useCurrent',
                text: 'Use Current Location'
            },
            {
                xtype: 'component',
                height: 24
            },
            {
                xtype: 'checkboxfield',
                itemId: 'rainy',
                label: 'Rainy'
            }
        ],
        listeners: [
            {
                fn: 'onRainyChange',
                event: 'change',
                delegate: '#rainy'
            }
        ]
    },

    onRainyChange: function(checkboxfield, newValue, oldValue, eOpts) {
        this.setRainy(newValue);
    },

    updateRainy: function(rainy) {
        if (rainy){
            this.down('#rainy').check();
        } else {
            this.down('#rainy').uncheck();
        }
        this.fireEvent('rainychange', this, rainy);
    }

});