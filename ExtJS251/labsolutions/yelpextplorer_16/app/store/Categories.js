Ext.define('YelpExtplorer.store.Categories', {
    extend : 'Ext.data.TreeStore',
    requires: ['YelpExtplorer.model.Category'],

    model : 'YelpExtplorer.model.Category',
    autoLoad : true,
    root : {
        text : 'All',
        expanded : true
    }

});