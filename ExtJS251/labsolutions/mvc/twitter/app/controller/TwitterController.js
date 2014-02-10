Ext.define('Twitter.controller.TwitterController', {
    views : [ 'TwitterGrid' ],
    stores : [ 'Tweets' ],
    models : [ 'Tweet' ],
    extend : 'Ext.app.Controller',

    refs: [{
        ref:'searchField',
        selector: 'twittergrid #searchField'
    }],

    init : function() {
        this.control({
            'twittergrid #searchButton' : {
                click : this.searchHandler
            }
        });
    },

    searchHandler : function(button) {
        var searchString = this.getSearchField().getValue();
        this.getTweetsStore().load({
            params : {
                q : searchString
            }
        });
    }

});