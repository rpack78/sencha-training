Ext.define('MyApp.view.Viewport', {
    extend : 'Ext.Viewport',
    requires : [ 'MyApp.view.PersonForm' ],
    items : [ {
        xtype : 'personform',
        width: 300
    } ]
});