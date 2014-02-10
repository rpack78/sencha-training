Ext.define('Weather.view.Grid', {
    extend : 'Ext.grid.Panel',
    requires : ['Ext.grid.column.Number', 'Ext.form.FieldSet'],
    xtype : 'weather_grid',
    columns : [ {
        text : 'Month',
        dataIndex : 'month',
        align : 'left'
    }, {
        text : 'High',
        dataIndex : 'high',
        xtype : 'numbercolumn',
        align : 'right',
        format:'0'
    }, {
        text : 'Low',
        dataIndex : 'low',
        xtype : 'numbercolumn',
        align : 'right',
        format:'0'
    }, {
        text : 'Precipitation',
        width: 120,
        dataIndex : 'precipitation',
        xtype : 'numbercolumn',
        align : 'right',
        format:'0'
    } ]
});