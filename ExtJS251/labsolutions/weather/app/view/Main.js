Ext.define('Weather.view.Main', {
    extend : 'Ext.tab.Panel',
    requires : [ 'Weather.view.Grid', 'Weather.view.Chart', 'Weather.view.Form' , 'Weather.view.View' ],
    xtype : 'weather_main',
    deferredRender : false,
    title : 'Monthly Paris Weather Information',
    
    items : [ {
        title : 'Grid',
        xtype : 'weather_grid',
        store : 'Months'
    },
    {
        title : 'View',
        xtype : 'weather_view',
        store : 'Months'
     }, {
        title : 'Chart',
        xtype : 'weather_chart',
        store : 'Months'
    }]
});