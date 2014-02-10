Ext.define('Ajax.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [],

    initComponent: function() {
        var me = this;
        me.callParent();


        // Put your Ajax call here


    },

    tpl: '<tpl for="."><figure><img src="{img}" /><figcaption>{first} {last}</figcaption></figure></tpl>'

});