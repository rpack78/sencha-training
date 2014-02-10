Ext.define('Weather.view.Form', {
    extend : 'Ext.form.Panel',
    xtype : 'weather_form',
    bodyPadding : 8,
    config : {
        model : null
    },
    items : [ {
        fieldLabel : 'Month',
        xtype : 'displayfield',
        labelWidth : 40,
        name : 'month'
    }, {
        xtype : 'fieldset',
        title : 'Temperature',
        items : [ {
            fieldLabel : 'High',
            xtype : 'numberfield',
            labelWidth : 40,
            width : 100,
            name : 'high'
        }, {
            fieldLabel : 'Low',
            xtype : 'numberfield',
            labelWidth : 40,
            width : 100,
            name : 'low'
        } ]
    }, {
        xtype : 'numberfield',
        fieldLabel : 'Precipitation',
        labelWidth : 80,
        width : 140,
        name : 'precipitation'
    } ],
    updateModel : function() {
        this.getForm().loadRecord(this.getModel());
    },
    changeHandler : function(field, newValue, oldValue) {
        var record = this.getModel();
        if (record) {
            record.set(field.name, newValue);
        }
    },
    initComponent : function() {
        var me = this;
        this.callParent(arguments);
        this.getForm().getFields().each(function(field) {
            field.on('change', me.changeHandler, me);
        });
    },
    tbar : [ '', {
        text : '<',
        itemId : 'prev'
    }, '', {
        text : '>',
        itemId : 'next'
    } ]
});