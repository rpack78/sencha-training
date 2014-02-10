Ext.define('Border.view.Viewport', {
    extend: 'Ext.Viewport',
    requires: ['Border.view.LabWindow'],
    items: [{
        xtype: 'labwindow'
    }]
});
