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

        console.log('updateQuote');
        console.log(align);
        console.log(text);

        var data = {
            align: align,
            text: text
        };
        this.update(data);
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
        }, {
            icon: 'resources/images/text_align_center.png',
            toggleGroup: 'align',
            itemId: 'center',
            allowDepress: false,
            handler: function(button) {
                button.up('alignmentpanel').updateQuote();
            }
        }, {
            icon: 'resources/images/text_align_right.png',
            toggleGroup: 'align',
            itemId: 'right',
            allowDepress: false,
            handler: function(button) {
                button.up('alignmentpanel').updateQuote();
            }
        },
        '-', {
            xtype: 'splitbutton',
            text: 'Choose a Quote',
            menu: {
                defaults: {
                    handler: function(button) {
                        button.up('alignmentpanel').updateChoice(button);
                    }
                },
                items: [{
                    text: Buttons.util.Quotes.janeAusten.keys[0]
                }, {
                    text: Buttons.util.Quotes.janeAusten.keys[1]
                }, {
                    text: Buttons.util.Quotes.janeAusten.keys[2]
                }, {
                    text: Buttons.util.Quotes.janeAusten.keys[3]
                }, {
                    text: Buttons.util.Quotes.janeAusten.keys[4]
                }, {
                    text: Buttons.util.Quotes.janeAusten.keys[5]
                }]
            }
        }
    ],
    tpl: '<div style="text-align: {align}">{text}</div>'
});