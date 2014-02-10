Ext.define('Charts.model.Country', {
    extend : 'Ext.data.Model',
    fields : ['country', 'consumption'],
    proxy : {
        type : 'ajax',
        url : 'resources/data/fishConsumption.json'
    }
});