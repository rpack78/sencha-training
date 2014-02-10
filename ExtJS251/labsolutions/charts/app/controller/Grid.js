Ext.define('Charts.controller.Grid', {
    extend: 'Ext.app.Controller',

    stores: ['Countries'],

    refs: [{
        ref: 'grid',
        selector: 'consumptiongrid'
    }, {
        ref: 'chart',
        selector: 'consumptionchart'
    }],

    init: function() {
        console.log('MyApp.controller.Grid#init()');

        this.control({
            'consumptiongrid': {
                itemmouseenter: this.itemSelectHandler,
                itemmouseleave: this.itemNoSelectHandler
            },
            'consumptionchart': {
                itemmouseover: this.itemSelectHandler
            }
        });

    },

    itemSelectHandler: function(component, record) {
        this.getChart().highlightItem(record);
        this.getGrid().getSelectionModel().select(record);
    },
    itemNoSelectHandler: function(component, record) {
        this.getChart().highlightItem();
    }
});