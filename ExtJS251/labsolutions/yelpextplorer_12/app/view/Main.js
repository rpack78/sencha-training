Ext.define('YelpExtplorer.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'YelpExtplorer.view.BusinessesMap',
        'YelpExtplorer.view.BusinessesGrid',
        'YelpExtplorer.view.BusinessesView'
    ],


    items: [{
        title: 'Map',
        xtype: 'businessesmap',
        store: 'Businesses'
    }, {
        title: 'Grid',
        xtype: 'businessesgrid',
        store: 'Businesses'
    }, {
        title: 'View',
        xtype: 'businessesview',
        store: 'Businesses'
    }]

});