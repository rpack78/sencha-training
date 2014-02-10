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
        xtype: 'businessesmap'
    }, {
        title: 'Grid',
        xtype: 'businessesgrid'
    }, {
        title: 'View',
        xtype: 'businessesview'
    }]

});