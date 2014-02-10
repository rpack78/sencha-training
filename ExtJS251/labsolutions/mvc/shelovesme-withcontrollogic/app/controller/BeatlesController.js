Ext.define('Beatles.controller.BeatlesController', {

    extend : 'Ext.app.Controller',

    requires : [ 'Ext.window.MessageBox' ], // Needed for the Ext.Msg.alert()

    views : [ 'BeatlesGrid' ],
    stores : [ 'People' ],

    init : function() {
        var me = this;

        this.control({

            'component #sheLovesMe' : {
                click : this.yeahYeahYeah
            }


        });
    },

    yeahYeahYeah : function(button) {
        Ext.Msg.alert(button.getText(), 'Yeah yeah yeah!');
    }

});