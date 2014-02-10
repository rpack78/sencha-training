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
        xtype: 'filter',
        region: 'west',
        title: 'Filter',
        width: 188
    }, {
        xtype: 'title',
        region: 'north'
    }, {
        xtype: 'businessdetail',
        region: 'east',
        title: 'Business',
        width: 128
    }, {
        xtype: 'app-main',
        region: 'center'
    }]
});