Ext.define('Toolbars.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Auto',
        'Toolbars.view.LabPanel'
    ],

    layout: 'auto',
    items: [{
        xtype: 'labpanel'
    }]

});