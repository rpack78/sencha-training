Ext.define('Associations.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: ['Customers'],
    models: ['Customer', 'Order'],
    views: ['CustomerGrid', 'OrderGrid'],
    refs: [{
        ref: 'orderGrid',
        selector: 'viewport ordergrid'
    }],
    init: function() {
        this.control({
            'viewport customergrid': {
                itemdblclick: this.loadOrders
            }
        });
    },

    loadOrders: function(grid, customer) {

        // The Customer model's proxy starts out getting 
        // the whole hierarchy. Therefore, we don't need 
        // to load the store. 

        this.getOrderGrid().reconfigure(customer.orders());

        // If the full hierarchy is NOT used, the orders() 
        // store starts out empty and must be loaded. In 
        // this case, the Order model's proxy is used, and 
        // the customer ID is passed to the server as the 
        // foreign key. 

        // To see this, edit the Customer proxy to omit orders, 
        // and un-comment this line.
        // customer.orders().load();

        // Another option is to autoLoad:true on the association,
        // then as soon as orders() is referenced, it's auto-loaded
        // and the call to load() isn't needed at all!

    }



});