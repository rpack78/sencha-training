Ext.define('Buttons.view.AlignmentPanel', {
    extend: 'Ext.panel.Panel',
    requires: ['Ext.button.Split', 'Buttons.util.Quotes'],

    xtype: 'alignmentpanel',
    title: 'Jane Austen',
    autoScroll: true,
    updateChoice: function(menuItem) {
        this.down('splitbutton').setText(menuItem.text);
        this.updateQuote();
    },
    updateQuote: function() {
        var align = this.down('button[pressed]').getItemId();
        var text = Buttons.util.Quotes.janeAusten.get(this.down('splitbutton').getText());
        var data = {
            align: align,
            text: text
        };

    },
    tbar: [{
            icon: 'resources/images/text_align_left.png',
            toggleGroup: 'align',
            itemId: 'left',
            handler: function(button) {
                button.up('alignmentpanel').updateQuote();
            },
            allowDepress: false,
            pressed: true
        },

        // Other toggle buttons go here

        '-',

        // The split button goes here


    ],
    tpl: '<div style="text-align: {align}">{text}</div>'
});