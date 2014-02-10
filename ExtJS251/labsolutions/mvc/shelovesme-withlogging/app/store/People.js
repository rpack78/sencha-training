console.log('Loading store/People.js');
Ext.define('Beatles.store.People', {
	extend: 'Ext.data.Store',
	requires: ['Beatles.model.Person'], 
	model: 'Beatles.model.Person',
	autoLoad: true
});