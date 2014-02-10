Ext.define('Charts.controller.Grid', {
    extend: 'Ext.app.Controller',
    stores: ['Countries'],

    init: function() {
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

    refs: [{
        ref: 'grid',
        selector: 'consumptiongrid'
    }, {
        ref: 'chart',
        selector: 'consumptionchart'
    }],

    itemSelectHandler: function(component, record) {
        this.getChart().highlightItem(record);
        this.getGrid().getSelectionModel().select(record);
    },

    itemNoSelectHandler: function(component, record) {
        this.getChart().highlightItem();
    }
});