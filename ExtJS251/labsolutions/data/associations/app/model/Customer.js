Ext.define('Associations.model.Customer', {
    extend : 'Ext.data.Model',
    fields : [ {
        name : 'id',
        type : 'auto'
    }, {
        name : 'name',
        type : 'auto'
    }, {
        name : 'phone',
        type : 'auto'
    } ],
    proxy : {
        type : 'ajax',

        url: 'resources/data/customerOrdersFullHierarchy.json'
        // url : 'http://yelp.senchabits.com/go?fn=assoccustomers',
        // reader: {
        //     root: 'data'
        // }
        
    },
    associations : [ {
        type : 'hasMany',
        model : 'Associations.model.Order',
        name : 'orders', // default: hasMany model name lower case pluralized
        foreignKey : 'customer_id', // default: model name lower case _id

        autoLoad: false // This will load the store as soon as orders() is referenced

    } ]
});
