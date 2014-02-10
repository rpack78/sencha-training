Ext.define('Associations.view.OrderGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'ordergrid',
    columns: [{
            text: 'Id',
            dataIndex: 'id'
        }, {
            text: 'Customer ID',
            dataIndex: 'customer_id'
        }, {
            text: 'Date',
            xtype: 'datecolumn',
            dataIndex: 'date',
            flex: 1
        }
    ]
});