Ext.define('Weather.view.Viewport', {
    extend : 'Ext.Viewport',
    requires : [ 'Weather.view.Main', 'Weather.view.Form', 'Ext.layout.container.Border', 'Ext.form.field.Number', 'Ext.toolbar.TextItem' ],
    layout : 'border',
    items : [ {
        xtype : 'weather_main',
        region : 'center'
    }, {
        title : 'Edit',
        xtype : 'weather_form',
        region : 'east',
        collapsible : true,
        collapsed : true,
        titleCollapse : true
    } ]

});