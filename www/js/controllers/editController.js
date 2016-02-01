(function () {
	'use strict'

app.controller('EditCtrl', function($scope, $state, LocationStore) {

  LocationStore.get($state.params.locationId).then(function(location) {
    console.log($state.params);
    $scope.location = location;
  });

  $scope.save = function() {
    LocationStore.update($scope.location).then(function() {
      $state.go('list');
    });
  };

});



})();