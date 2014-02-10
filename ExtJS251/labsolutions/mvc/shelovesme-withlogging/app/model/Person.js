console.log('Loading model/Person.js');
Ext.define('Beatles.model.Person', {
    extend : 'Ext.data.Model',
    proxy : {
        type : 'ajax',
        url : 'resources/data/theBeatles.json'
    },
    fields : [ 'first', {
        name : 'last',
        type : 'string'
    }, {
        name : 'dob',
        type : 'date',
        dateFormat : 'Y/m/d'
    } ]
});
