Ext.define('Weather.view.View', {
    extend : 'Ext.view.View',
    xtype : 'weather_view',
    autoScroll : true,
    overItemCls : 'over',
    selectedItemCls : 'selected',
    itemSelector : 'div.month',

    tpl : '<tpl for="."><div class="month"><b>{month}</b><table><tr><td>High:&nbsp;</td><td>{high}</td><tr><td>Low:&nbsp;</td><td>{low}</td></tr><tr><td>Precipitation:&nbsp;</td><td>{precipitation}</td></tr></table></div></tpl>',

});
