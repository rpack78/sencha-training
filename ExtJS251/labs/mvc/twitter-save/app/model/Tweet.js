    Ext.define('MyApp.model.Tweet', {
    extend: 'Ext.data.Model',
    fields: [{
            name: 'profile_image_url',
            mapping: 'user.profile_image_url'
        }, {
            name: 'name',
            mapping: 'user.name'
        }, 'text', {
            name: 'created_at',
            type: 'date',
            dateFormat: 'D M d H:i:s O Y'
        }
    ],
    proxy: {
        type: 'ajax',
        url: 'http://yelp.senchabits.com/go?fn=twitter',
        reader: {
            root: 'data.statuses'
        }
    }

});