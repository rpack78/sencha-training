Ext.define('Weather.model.Month', {
    extend : 'Ext.data.Model',
    idProperty : 'month',
    fields : [ 'monthOrdinal', 'high', 'low', 'precipitation', {
        name : 'month',
        convert : function(value, record){
            return Ext.Date.monthNames[record.data.monthOrdinal-1];
        }
    } ],
    proxy : {
        type : 'ajax',
        url : 'data/parisTemperatureByMonth.json'
    }
});