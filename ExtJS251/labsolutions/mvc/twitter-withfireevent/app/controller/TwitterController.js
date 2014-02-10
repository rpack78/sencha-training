Ext.define('Twitter.controller.TwitterController', {
    views : [ 'TwitterGrid' ],
    stores : [ 'Tweets' ],
    models : [ 'Tweet' ],
    extend : 'Ext.app.Controller',

    init : function() {
        this.control({
            'twittergrid' : {
                search : this.searchHandler
            }
        });
    },

    searchHandler : function(twitterGrid, searchString) {
        this.getTweetsStore().load({
            params : {
                q : searchString
            }
        });
    }

});