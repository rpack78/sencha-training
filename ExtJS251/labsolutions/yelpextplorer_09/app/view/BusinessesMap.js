/**
 * A wrapper around a Google map. Use centerMap(latitude, longitude) to center
 * the map at the specified location.
 */
Ext.define('YelpExtplorer.view.BusinessesMap', {
    extend: 'Ext.Component',
    xtype: 'businessesmap',
    config: {
        store: null
    },

    padding: 8,

    html: '<p>Please select a school and category.</p>',

    constructor: function(config) {
        // Surprisingly, nothing up the component 
        // hierarchy calls this.initConfig(). Since
        // we have an apply method, we need it so the
        // calling routine's store config is applied.
        this.initConfig(config);
        this.callParent(arguments);
    },
applyStore: function(store) {
    if (Ext.isString(store)) {
        store = Ext.getStore(store);
    }
    return store;
},
updateStore: function(store) {
    if (store) {
        var me = this;
        this.getStore().on('datachanged', function(store) {
            me.setMarkers(store);
        }, me);
    }
},

    // @private
    renderMap: function() {
        // Assert : centerMap() has been run, and therefore, 
        // this.latitude and this.longitude are set.
        var cfg = {
            zoom: 14,
            center: new google.maps.LatLng(this.latitude, this.longitude),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.getEl().dom, cfg);
        this.renderMarkers();
    },

    centerMap: function(latitude, longitude) {
        // Save the latitude/longitude
        this.latitude = latitude;
        this.longitude = longitude;

        // If we're visible, render the map right away. Else
        // wait until someone clicks on the tab.
        if (this.isVisible()) {
            this.renderMap();
        } else {
            this.on('show', this.renderMap, this, {
                single: true
            });
        }

    },

    highlight: function(record) {
        if (this.selection === record) {
            return;
        }
        this.selection = record;
        var markers = this.getMarkers();
        for (var i = 0; i < markers.length; i++) {
            var marker = markers[i];
            if (marker.record === record) {
                marker.setIcon('resources/images/YellowStar.png');
            } else {
                marker.setIcon();
            }
        }
    },

    // @private
    getMarkers: function() {
        return (this.markers || []);
    },
    // @private
    setMarkers: function(businesses) {
        // Hide the previously saved markers
        var markers = this.getMarkers();
        Ext.Array.forEach(markers, function(marker) {
            marker.setMap(null);
        });

        this.markers = [];

        // For each business, push a new marker onto the array
        var me = this;
        businesses.each(function(r) {
            var ll = new google.maps.LatLng(r.data.latitude, r.data.longitude);
            var marker = new google.maps.Marker({
                position: ll,
                title: r.get('name'),
                record: r
            });
            me.markers.push(marker);
            google.maps.event.addListener(marker, "click", function() {
                me.fireEvent('select', me, r);
                me.highlight(r);
            });
        });

        // If we're visible, render the markers right away. Else
        // wait until someone clicks on the tab.
        if (this.isVisible()) {
            this.renderMarkers();
        } else {
            this.on('show', this.renderMarkers, this, {
                single: true
            });
        }

    },

    // @private
    renderMarkers: function() {
        // This method must always be run after setMarkers()
        // Assert: this.map is set.
        var me = this;
        Ext.Array.forEach(this.getMarkers(), function(marker) {
            marker.setMap(me.map);
        });
    }

});