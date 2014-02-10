Ext.define('MyApp.controller.TwitterController', {
    views: ['TwitterGrid'],
    stores: ['Tweets'],
    models: ['Tweet'],
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'searchText',
        selector: 'twittergrid #searchText'
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