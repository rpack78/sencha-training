Ext.define('Twitter.store.Tweets', {
    extend : 'Ext.data.Store',
    requires: ['Twitter.model.Tweet'],
    model : 'Twitter.model.Tweet'
});
