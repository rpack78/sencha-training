Ext.define('Associations.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: ['Associations.view.CustomerGrid', 'Ext.panel.Panel'],

    layout: {
        type: 'vbox'
    },

    defaults: {
        height: 200,
        width: 420
    },

    items: [{
        xtype: 'customergrid',
        title: 'Customers',
        store: 'Customers'
    }, {
        xtype: 'panel',
        title: 'Orders',
        itemId: 'ordersPanel',
        layout: 'fit',
        items: [{
            xtype: 'ordergrid',
            height: 400
        }]
    }],
    padding: 12

});