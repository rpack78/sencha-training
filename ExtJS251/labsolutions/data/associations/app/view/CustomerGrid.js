Ext.define('Associations.view.CustomerGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'customergrid',
    columns: [{
            text: 'Id',
            dataIndex: 'id'
        }, {
            text: 'Name',
            dataIndex: 'name',
            flex: 1
        }, {
            text: 'Phone',
            dataIndex: 'phone',
            flex: 1
        }
    ],
    tbar: ['Double-click on a customer to see its associated orders.']
});