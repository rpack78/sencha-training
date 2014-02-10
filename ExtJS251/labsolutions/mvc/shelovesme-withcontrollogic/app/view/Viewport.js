Ext.define('Beatles.view.Viewport', {
    extend : 'Ext.container.Viewport', 
    requires: ['Beatles.view.BeatlesGrid'],   
    layout : 'fit',
    items : [ {
        xtype : 'beatlesgrid',
        store : 'People'
    } ]
});
