/*
 * File: app/model/Tune.js
 *
 * This file was generated by Sencha Architect version 3.0.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TunesMini.model.Tune', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            mapping: '[\'im:artist\'].label',
            name: 'artist'
        },
        {
            mapping: 'id.attributes[\'im:id\']',
            name: 'id'
        },
        {
            mapping: '[\'im:image\'][2].label',
            name: 'image'
        },
        {
            mapping: 'link[0].attributes.href',
            name: 'link'
        },
        {
            mapping: 'link[1].attributes.href',
            name: 'preview'
        },
        {
            mapping: '[\'im:name\'].label',
            name: 'title'
        }
    ]
});