Ext.define('YelpExtplorer.model.Business', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'business_id',
        type: 'auto'
    }, {
        name: 'full_address',
        type: 'auto'
    }, {
        name: 'categories',
        type: 'auto'
    }, {
        name: 'photo_url',
        type: 'auto'
    }, {
        name: 'review_count',
        type: 'auto'
    }, {
        name: 'name',
        type: 'auto'
    }, {
        name: 'url',
        type: 'auto'
    }, {
        name: 'longitude',
        type: 'auto'
    }, {
        name: 'stars',
        type: 'auto'
    }, {
        name: 'latitude',
        type: 'auto'
    }],
    idProperty: 'business_id',
    proxy: {
        type: 'ajax',
        url: 'http://yelp.senchabits.com/go?fn=schoolbiz', 
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});