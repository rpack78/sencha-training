Ext.define('Umbrella.util.Rainy', {
  extend: 'Ext.util.Observable',

  requires: ['Ext.data.JsonP'],
  singleton: true,

  config: {
    rainy: false
  },

  check: function(latLng, callback) {

    if (!(latLng)) {
      return;
    }
    var locationString = latLng.lat() + ',' + latLng.lng();

    var worldWeatherApiKey = 'yourapikeygoeshere';

    Ext.data.JsonP.request({

      url: '//api.worldweatheronline.com/free/v1/weather.ashx',
      params: {
        key: worldWeatherApiKey,
        q: locationString,
        format: 'json',
        num_of_days: 1
      },

      success: function(result, request) {
        var weather = result.data.weather || result.data.current_condition;
        var todayWeather = weather[0];
        var rainy = Ext.Number.from(todayWeather.weatherCode) > 260;
        callback(rainy);
      },

      failure: function(e) {
        Ext.Msg.alert('Could not get data from worldweatheronline.com');
      }

    });

  }

});