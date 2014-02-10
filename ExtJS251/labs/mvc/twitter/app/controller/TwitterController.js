Ext.define('Twitter.controller.TwitterController', {
    extend: 'Ext.app.Controller',

    views: ['TwitterGrid'],

    stores: ['Tweets'],

    refs: [{
        ref: 'searchText',
        selector: 'twittergrid #searchField'
    }],

    init: function(){

        this.control({

            'twittergrid #twitterSearch': {
                click: this.searchHandler
            }

        });


    },

    getSearchString: function() {
        return this.getSearchText().getValue();
    },

    searchHandler: function(button) {
        this.getTweetsStore().load({
            params: {
                q: this.getSearchString()
            }
        });
    }

});