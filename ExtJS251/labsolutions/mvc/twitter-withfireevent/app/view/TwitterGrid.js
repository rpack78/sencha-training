Ext.define('Twitter.view.TwitterGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.grid.column.Template',
        'Ext.grid.column.Date'
    ],
    xtype: 'twittergrid',
    store: 'Tweets',
    columns: [{
        text: 'Avatar',
        dataIndex: 'profile_image_url',
        xtype: 'templatecolumn',
        tpl: '<img src="{profile_image_url}"/>',
        width: 80
    }, {
        text: 'User',
        dataIndex: 'name'
    }, {
        text: 'Tweet',
        dataIndex: 'text',
        flex: 1
    }, {
        text: 'Posted',
        xtype: 'datecolumn',
        dataIndex: 'created_at',
        format: 'g:i a,  F j',
        width: 170
    }],
    fireSearch: function() {
        var searchString = this.down('#searchField').getValue();
        this.fireEvent('search', this, searchString);
    },
    tbar: [{
        xtype: 'textfield',
        itemId: 'searchField',
        fieldLabel: 'Search',
        enableKeyEvents: true,
        listeners: {
            keypress: function(field, event) {
                if (event.getKey() === event.ENTER) {
                    field.up('twittergrid').fireSearch();
                }
            }
        }
    }, {
        text: 'Search',
        icon: 'resources/images/find.png',
        handler: function(button) {
            this.up('twittergrid').fireSearch();
        }
    }]
});