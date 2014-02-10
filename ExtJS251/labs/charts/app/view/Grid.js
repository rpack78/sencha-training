Ext.define('Charts.view.Grid', {
    extend: 'Ext.grid.Panel',
    requires: ['Ext.grid.column.Number', 'Ext.grid.column.Column'],
    xtype: 'consumptiongrid',
    title: 'Grid',

    columns: [{
        text: 'Country',
        dataIndex: 'country'
    }, {
        text: 'Consumption',
        xtype: 'numbercolumn',
        dataIndex: 'consumption',
        format: '0.0',
        align: 'right'
    }]
});