Ext.define('Umbrella.util.Geocode', {
  extend: 'Ext.util.Observable',
  requires: ['Ext.util.Geolocation', 'Ext.MessageBox'],
  singleton: true,
    
  getGeocoder: function() {
    // I tried making this a config, but it said "google not defined"
    this.geoCoder = this.geoCoder || new google.maps.Geocoder();
    return this.geoCoder;
  },

  getGeolocation: function() {
    // I tried making this a config, but it said I needed a requires,
    // even though it is there.
    this.geoLocation = this.geoLocation || Ext.create('Ext.util.Geolocation', {
      autoUpdate: false
    });
    return this.geoLocation;
  },

  // Passes the current google.maps.LatLng to the callback
  calculateCurrentLatLng: function(callback) {

    var me = this;

    me.getGeolocation().updateLocation(function(geoLocation) {

      if (geoLocation) {

        var latitude = geoLocation.getLatitude();
        var longitude = geoLocation.getLongitude();
          
        var latLng = new google.maps.LatLng(latitude, longitude);


        callback(latLng);
          

      } else {
        Ext.Msg.alert('Could no determine<br/>current location.');
        callback();
      }

    });
  },

  calculateCity: function(latLng, callback) {
    var me = this;

    if (!(latLng)) {
      return;
    }

    me.getGeocoder().geocode({

        location: latLng

      },

      function(results, status) {

        if (status === google.maps.GeocoderStatus.OK) {

          // results is a Google Maps GeocoderResults array. Within it
          // somewhere is an item of type "locality" (city). Find it 
          // and save the city's name.

          var localityResult = null;

          for (var i = 0; i < results.length; i++) {
            var result = results[i];
            var types = Ext.Object.getValues(result.types);

            var contains = Ext.Array.contains;
            if (contains(types, "locality") || contains(types, 'administrative_area_level_1')) {
              localityResult = result;
              break;
            }

          }

          var city = localityResult ? localityResult.formatted_address : 'Unknown';
          callback(city);

        } else {

          Ext.Msg.alert('Could not geocode <br/>"' + latLng.lat() + ',' + latLng.lng());

        }

      });
  },

  calculateLatLng: function(address, callback) {

    console.log('Calculating coordinates for ' + address);
    if (!address) {
      return;
    }

    this.getGeocoder().geocode({address: address},
      function(results, status) {

        if (status === google.maps.GeocoderStatus.OK) {

          var latLng = results[0].geometry.location;
          callback(latLng);

        } else {

          Ext.Msg.alert('Could not geocode "' + address + '"');

        }

      });

  }

});