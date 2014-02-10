console.log('Loading view/BeatlesGrid.js');
Ext.define('Beatles.view.BeatlesGrid', {
    extend : 'Ext.grid.Panel',
    xtype : 'beatlesgrid',
    requires : [ 'Ext.grid.column.Column', 'Ext.grid.column.Date' ],
    title : 'Beatles',
    columns : [ {
        text : 'Name',
        dataIndex : 'first'
    }, {
        text : 'Last Name',
        dataIndex : 'last'
    }, {
        text : 'Date Of Birth',
        dataIndex : 'dob',
        xtype : 'datecolumn',
        format : 'j F, Y',
        flex : 1
    } ],
    tbar : [ {
        text : 'She loves me...',
        itemId : 'sheLovesMe'
    } ]
});