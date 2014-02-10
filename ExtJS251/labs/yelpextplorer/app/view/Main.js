Ext.define('YelpExtplorer.view.Main', {
    extend: 'Ext.tab.Panel',

    requires: [
        'YelpExtplorer.view.BusinessesMap',
        'YelpExtplorer.view.BusinessesGrid',
        'YelpExtplorer.view.BusinessesView',
        'YelpExtplorer.view.StarCountChart'
    ],

    xtype: 'app-main',
    // deferredRender:false,

    items: [{
        xtype: 'businessesmap',
        title: 'Map',
        store: 'Businesses'
    }, {
        xtype: 'businessesgrid',
        title: 'Grid',
        store: 'Businesses'
    }, {
        xtype: 'businessesview',
        title: 'View',
        store: 'Businesses'
    }, {
        xtype: 'starcountchart',
        title: 'Chart',
        store: 'StarCount'
    }]

});