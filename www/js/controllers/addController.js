(function () {
	'use strict'

app.controller('AddCtrl', function($scope, $state, LocationStore) {

  $scope.location = {
    caan: '',
    assetName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    lattitude: '',
    longitude: ''
  };

  $scope.save = function() {
    LocationStore.update($scope.location).then(function() {
      $state.go('list');
    });
  };
});


})();