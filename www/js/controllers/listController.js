
	'use strict'

	app.controller('ListCtrl', function($scope, LocationStore) {

  function refreshLocations() {
    LocationStore.list().then(function(locations) {
      $scope.locations = locations;
    });
  }
  refreshLocations();

  // $scope.remove = function(noteId) {
  //   NoteStore.remove(noteId).then(refreshNotes);
  // };

});


