Ext.define('MyApp.view.PersonForm', {
    extend : 'Ext.form.Panel',
    xtype : 'personform',
    title : 'Person',
    bodyPadding : 4,
    items : [ {
        xtype : 'textfield',
        name : 'name',
        fieldLabel : 'Name'
    }, {
        xtype : 'datefield',
        name : 'dob',
        fieldLabel : 'Date of Birth'
    } ],
    buttons : [ {
        text : 'Submit',
        handler : function(button) {
            button.up('form').submit({
                url : 'data/save.html',
                success : function(form, action) {
                    Ext.Msg.alert('Success', action.result.msg);
                    console.log('success');
                },
                failure : function(form, action) {
                    Ext.Msg.alert('Failure', action.result.msg);
                    console.log('failure');
                }
            });
        }
    }, {
        text : 'Cancel',
        handler : function(button) {
            button.up('form').getForm().reset();
        }
    } ]
});