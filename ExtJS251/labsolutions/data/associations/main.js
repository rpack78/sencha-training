Ext.define('Customer', {
    extend : 'Ext.data.Model',
    fields : [ 'id', 'name', 'phone' ],
    associations : [ {
        type : 'hasMany',
        model : 'Order',
        autoLoad : true, 
        name : 'orders', // default : model, lower case, pluralized
        foreignKey : 'customer_id' // default: this model name, lower case, _id
    } ],
    proxy : {
        type : 'ajax',
        url : 'customer.php'
    }
});

Ext.define('Order', {
    extend : 'Ext.data.Model',
    fields : [ 'id', 'customer_id',  {
        name : 'date',
        type : 'date',
        dateFormat : 'Y-m-d'
    } ],
    belongsTo : 'Customer',
    associations : [ {
        model : 'OrderItem',
        type : 'hasMany',
        name : 'orderitems' // default: model, lower case, pluralized
    } ],
    proxy : {
        type : 'ajax',
        url : 'order.php'
    }
});

Ext.define('OrderItem', {
    extend : 'Ext.data.Model',
    fields : [ 'id', 'order_id', 'product', 'price' ],
    belongsTo : 'Order',
    proxy : {
        type : 'ajax',
        url : 'orderitem.php'
    }
});

var customerStore = Ext.create('Ext.data.Store', {
    model : 'Customer',
    autoLoad : true
});

Ext.create('CustomerGrid', {
    extend : 'Ext.grid.Panel',
    alias : 'widget.customergrid',
    store : store,
    title : 'Customers',
    columns : [ {
        text : 'Id',
        dataIndex : 'id'
    }, {
        text : 'Name',
        dataIndex : 'name',
        flex : 1
    }, {
        text : 'Phone',
        dataIndex : 'phone'
    } ],
    initComponent : function() {
        this.tbar = [ {
            itemId : 'load',
            text : 'Load Orders',
            scope : this,
            handler : this.loadOrders,
            disabled : true
        } ];
        this.callParent();
    },
    listeners : {
        selectionchange : function(selModel, selections) {
            this.active = selections[0];
            this.down('#load').setDisabled(!this.active);
        }
    },

    getRecord : function() {
        return this.getSelectionModel().getSelection()[0];
    },

    loadOrders : function() {
        var record = this.getRecord();

        var name = record.get('name');
        var owner = this.ownerCt, orders;

        orders = record.orders();

        owner.add({
            title : 'Orders - ' + record.getId(),
            customer : record,
            xtype : 'ordergrid',
            store : orders
        });
        owner.getLayout().next();
    }
});

Ext.create('CustomerGrid', {
    store : customerStore
   });

