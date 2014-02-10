Ext.define('MyApp.controller.Main', {
	extend: 'Ext.app.Controller',

	stores: ['Flickr'],

	init: function() {

		this.listen({
			component: {
				'searchpanel': {
					searchFlickr: this.onSearchFlickr
				}
			}
		});
	},

	onSearchFlickr: function(component) {
		console.log('got the event');
		var myTags = component.down('#tags').getValue();
		var searchType = component.down('#searchType').getValue();

		Ext.data.JsonP.request({
			url: 'http://api.flickr.com/services/feeds/photos_public.gne',
			// callbackKey: 'callback',
			params: {
				format: 'json',
				tags: myTags,
				tagmode: searchType
			}
		});
		var myStore = this.getFlickrStore();

		jsonFlickrFeed = function(jsonData) {
			console.log(jsonData.items);
			myStore.loadData(jsonData.items);
		}
	}
});