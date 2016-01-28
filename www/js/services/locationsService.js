angular.module('starter').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      name : "Washington D.C., USA",
      lat : 38.8951100,
      lng : -77.0363700
    },
    {
      name : "London, England",
      lat : 51.500152,
      lng : -0.126236
    },
    {
      name : "Paris, France",
      lat : 48.864716,
      lng : 2.349014
    },
    {
      name : "Moscow, Russia",
      lat : 55.752121,
      lng : 37.617664
    },
    {
      name : "Rio de Janeiro, Brazil",
      lat : -22.970722,
      lng : -43.182365
    },
    {
      name : "Sydney, Australia",
      lat : -33.865143,
      lng : 151.209900
    },
    {
      name : "Kerr Hall",
      lat : 36.9969713,
      lng : -122.06201
    }

  ];

  return locationsObj;

}]);

/*
angular.module('starter').factory('LocationsService', [ function() {

  var apiUrl = 'http://128.114.96.140';

  return {
    list: function() {
      $http.get(apiUrl + '/locations/').then(function(response) {
        return response.data;
    });
    },

    get: function(locationId) {
      $http.get(apiUrl + '/locations/' + locationId)
      .then(function(response) {
        return response.data;
      });
    },

    create: function(location) {
      return $http.post(apiUrl + '/locations/' + location);
    },

    update: function(location) {
      return $http.put(apiUrl + '/locations/' + location.id, location);
    },

    remove: function(locationId) {
      return $http.delete(apiUrl + '/locations/' + locationId);
    }

  };
  

}]);

*/