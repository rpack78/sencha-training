Ext.define('YelpExtplorer.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.layout.container.Border',
        'YelpExtplorer.view.Main',
        'YelpExtplorer.view.Filter',
        'YelpExtplorer.view.Title',
        'YelpExtplorer.view.detail.BusinessDetail'
    ],

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'title',
        region: 'north',
    }, {
        xtype: 'businessdetail',
        title: 'Business',
        region: 'east',
        width: 128
    }, {
        xtype: 'filter',
        region: 'west',
        title: 'Filter',
        width: 188,
        store: 'Categories'
    }, {
        xtype: 'app-main',
        region: 'center'
    }]
});