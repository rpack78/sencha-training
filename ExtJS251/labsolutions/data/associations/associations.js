Ext.require([ 'Ext.data.*', 'Ext.panel.Panel', 'Ext.layout.container.Card', 'Ext.tip.QuickTipManager' ]);

// Customers have orders, orders have order items. Orders are referenced
// via the orders() method. By default, the association store is named as
// the lower-case, pluralized name of the store, so the model 'Order'
// association is referenced via customer.orders(). Associated has-many
// stores automatically have a filter applied to them. The filter is set
// to the parent's id, using the specified foreign key, which defaults to
// the lower-case parent name, appended with "_id". In the case below, if
// we have a reference to customer 1, the the filter for customer.orders()
// is set to
// [{property: 'customer_id', value: 1}]
// Of course, your server code has to look for this parameter and do the
// appropriate query.

Ext.define('Customer', {
    extend : 'Ext.data.Model',
    fields : [ {
        name : 'id',
        type : 'int'
    }, 'name', 'phone' ],
    associations : [ {
        type : 'hasMany',
        model : 'Order',

        autoLoad : true, // Upon reference to orders(), the Order proxy is
        // run

        name : 'orders', // default: hasMany model name, lower case,
        // pluralized

        foreignKey : 'customer_id' // default: this model name, lower case, _id
    // http:// order.php?filter=[{"property":"customer_id","value":1}]
    } ],
    proxy : {
        type : 'ajax',
        url : 'customer.php'
    }
});

Ext.define('Order', {
    extend : 'Ext.data.Model',
    fields : [ {
        name : 'id',
        type : 'int'
    }, {
        name : 'customer_id',
        type : 'int'
    }, {
        name : 'date',
        type : 'date',
        dateFormat : 'Y-m-d'
    } ],
    belongsTo : 'Customer',
    associations : [ {
        model : 'OrderItem',
        type : 'hasMany',
        autoLoad : true,
        name : 'orderitems' // default: model, lower case, pluralized
    } ],
    proxy : {
        type : 'ajax',
        url : 'order.php'
    }
});

Ext.define('OrderItem', {
    extend : 'Ext.data.Model',
    fields : [ {
        name : 'id',
        type : 'int'
    }, {
        name : 'order_id',
        type : 'int'
    }, 'product', {
        name : 'quantity',
        type : 'int'
    }, {
        name : 'price',
        type : 'float'
    } ],
    belongsTo : 'Order',
    proxy : {
        type : 'ajax',
        url : 'orderitem.php'
    }
});

var store = Ext.create('Ext.data.Store', {
    model : 'Customer',
    autoLoad : true
});

Ext.define('CustomerGrid', {
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

Ext.define('OrderGrid', {
    extend : 'Ext.grid.Panel',
    alias : 'widget.ordergrid',

    initComponent : function() {
        Ext.apply(this, {
            columns : [ {
                text : 'Id',
                dataIndex : 'id'
            }, {
                xtype : 'datecolumn',
                text : 'Date',
                dataIndex : 'date',
                flex : 1,
                format : 'Y-m-d'
            } ],
            tbar : [ {
                text : 'Back',
                scope : this,
                handler : this.onBackClick
            }, {
                itemId : 'load',
                text : 'Load Order Items',
                scope : this,
                handler : this.loadItems,
                disabled : true
            } ]
        });
        this.callParent();
        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    },

    onBackClick : function() {
        this.ownerCt.getLayout().prev();
        this.destroy();
    },

    onSelectChange : function(selModel, selections) {
        this.active = selections[0];
        this.down('#load').setDisabled(!this.active);
    },

    loadItems : function() {
        var customerName = this.customer.get('name');
        var rec = this.active;
        var date = Ext.Date.format(rec.get('date'), 'Y-m-d');
        var owner = this.ownerCt;
        var orderitems;

        orderitems = rec.orderitems();
        if (orderitems.isLoading()) {
            Logger.log('Begin loading order items - ' + rec.getId(), true);
        }
        orderitems.on('load', function() {
            Logger.log('Order items loaded - ' + rec.getId(), false);
        });
        owner.add({
            title : 'Order Items - ' + rec.getId(),
            xtype : 'orderitemgrid',
            store : orderitems
        });
        owner.getLayout().next();
    }
});

Ext
        .define(
                'OrderItemGrid',
                {
                    extend : 'Ext.grid.Panel',
                    alias : 'widget.orderitemgrid',

                    initComponent : function() {
                        Ext
                                .apply(
                                        this,
                                        {
                                            columns : [ {
                                                text : 'Id',
                                                dataIndex : 'id'
                                            }, {
                                                flex : 1,
                                                text : 'Product',
                                                dataIndex : 'product'
                                            }, {
                                                text : 'Quantity',
                                                dataIndex : 'quantity'
                                            }, {
                                                text : 'Price',
                                                dataIndex : 'price',
                                                renderer : Ext.util.Format.usMoney
                                            } ],
                                            tbar : [
                                                    {
                                                        text : 'Back',
                                                        scope : this,
                                                        handler : this.onBackClick
                                                    },
                                                    {
                                                        itemId : 'load',
                                                        text : 'Parent association loader',
                                                        tooltip : 'Demonstrate loading parent relationships - A new record will be created so we ignore any previous associations setup',
                                                        scope : this,
                                                        handler : this.onLoadClick,
                                                        disabled : true
                                                    } ]
                                        });
                        this.callParent();
                        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
                    },

                    onSelectChange : function(selModel, selections) {
                        this.active = selections[0];
                        this.down('#load').setDisabled(!this.active);
                    },

                    onBackClick : function() {
                        this.ownerCt.getLayout().prev();
                        this.destroy();
                    },

                    onLoadClick : function() {
                        var rec = this.active, id = rec.getId();

                        new ItemLoader({
                            width : 400,
                            height : 400,
                            modal : true,
                            title : this.title.replace('Order Items', 'Order Item ' + id),
                            orderItemData : rec.data,
                            orderItemId : id
                        }).show();
                    }
                });

Ext.define('ItemLoader', {
    extend : 'Ext.window.Window',

    initComponent : function() {
        Ext.apply(this, {
            border : false,
            autoScroll : true,
            dockedItems : [ {
                xtype : 'toolbar',
                items : [ {
                    text : 'Print order detail',
                    scope : this,
                    handler : this.onOrderClick
                }, {
                    itemId : 'company',
                    text : 'Print company detail',
                    disabled : true,
                    scope : this,
                    handler : this.onCompanyClick
                } ]
            } ],
            bodyPadding : 5,
            tpl : '<div>{type} {id} - {value}</div>',
            tplWriteMode : 'append'
        });
        this.callParent();
        this.orderItem = new OrderItem(this.orderItemData, this.orderItemId);
    },

    onOrderClick : function() {
        var id = this.orderItem.get('order_id'), hasOrder = !!this.order;

        if (!hasOrder) {
            Logger.log('Begin loading order - ' + id, true);
        }
        this.orderItem.getOrder({
            scope : this,
            success : function(order) {
                this.order = order;
                this.down('#company').enable();
                if (!hasOrder) {
                    Logger.log('Order loaded - ' + id, false);
                }
                this.update({
                    type : 'Order',
                    id : order.getId(),
                    value : Ext.Date.format(order.get('date'), 'Y-m-d')
                });
            }
        });
    },

    onCompanyClick : function() {
        var id = this.order.get('customer_id'), hasCustomer = !!this.customer;

        if (!hasCustomer) {
            Logger.log('Begin loading customer - ' + id, true);
        }
        this.order.getCustomer({
            scope : this,
            success : function(customer) {
                this.customer = customer;
                if (!hasCustomer) {
                    Logger.log('Customer loaded - ' + id, false);
                }
                this.update({
                    type : 'Customer',
                    id : customer.getId(),
                    value : customer.get('name')
                });
            }
        });
    }
});

Logger = (function() {
    var panel;

    return {
        init : function(log) {
            panel = log;
        },

        log : function(msg, isStart) {
            panel.update({
                now : new Date(),
                cls : isStart ? 'beforeload' : 'afterload',
                msg : msg
            });
            panel.body.scroll('b', 100000, true);
        }
    };
})();

Ext.onReady(function() {

    var main = Ext.create('Ext.container.Container', {
        renderTo : document.body,
        width : 750,
        height : 400,
        padding : 8,
        layout : {
            type : 'vbox',
            align : 'stretch'
        },
        items : [ {
            height : 200,
            xtype : 'container',
            layout : 'card',
            margin : '0 0 5 0'
        }, {
            flex : 1,
            title : 'Loader log',
            tplWriteMode : 'append',
            tpl : '<div class="{cls}">[{now:date("H:i:s")}] - {msg}</div>',
            bodyPadding : 5,
            autoScroll : true,
            listeners : {
                render : Logger.init
            }
        } ]
    });
    Logger.log('Begin loading customer store', true);
    main.items.first().add({
        xtype : 'customergrid'
    });

});
