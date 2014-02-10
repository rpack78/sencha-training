Ext.define('Ajax.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [],

    initComponent: function() {
        var me = this;
        me.callParent();

        Ext.Ajax.request({
            url: 'resources/data/theBeatles.json',
            success: function(response) {
                var data = Ext.JSON.decode(response.responseText);
                me.update(data);
            }
        });

    },

    tpl: '<tpl for="."><figure><img src="{img}" /><figcaption>{first} {last}</figcaption></figure></tpl>'

});

