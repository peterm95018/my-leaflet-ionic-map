angular.module('locations.locationstore', [])
    .factory('LocationStore', function($http) {

        var apiUrl = 'http://128.114.96.140:8080/api';

      return {

        list: function() {
          return $http.get(apiUrl + '/locations/')
            .then(function(response) {
              return response.data;
          });
        },

        // locationId is set in the $stateProvider.state url string
        get: function(locationId) {
          return $http.get(apiUrl + '/locations/' + locationId)
              .then(function(response) {
                  return response.data;
              });
        },

        create: function(location) {
            return $http.post(apiUrl + '/locations/', location);
        },

        // we might need locationId vs location._id here
        update: function(location) {
            return $http.put(apiUrl + '/locations/' + location._id, location);
        },

        remove: function(locationId) {
            return $http.delete(apiUrl + '/locations/' + location._id);
        }

      };

    });