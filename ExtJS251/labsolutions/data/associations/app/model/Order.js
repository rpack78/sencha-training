Ext.define('Associations.model.Order', {
    extend : 'Ext.data.Model',
    fields : [ {
        name : 'id',
        type : 'auto'
    }, {
        name : 'customer_id',
        type : 'auto'
    }, {
        name : 'date',
        type : 'date'
    } ],
    belongsTo : 'Associations.model.Customer',
    proxy : {
        type : 'ajax',
        url : 'http://yelp.senchabits.com/go?fn=assocorders',
        reader: {
            root: 'data'
        }
    }

});
