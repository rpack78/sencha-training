Ext.define('Buttons.view.Viewport', {
    extend: 'Ext.Viewport',
    requires: ['Buttons.view.AlignmentPanel'],
    items: [{
        xtype: 'alignmentpanel',
        width: 400,
        height: 400,
        bodyPadding: 8
    }]
});
