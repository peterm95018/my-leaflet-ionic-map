

angular.module('starter').controller('MapController',
  [ '$scope',
    '$cordovaGeolocation',
    '$stateParams',
    '$ionicModal',
    '$ionicPopup',
    'LocationsService',
    'InstructionsService',
    'LocationStore',
    '$http',
    function(
      $scope,
      $cordovaGeolocation,
      $stateParams,
      $ionicModal,
      $ionicPopup,
      LocationsService,
      InstructionsService,
      LocationStore,
      $http
      ) {

      /**
       * Once state loaded, get put map on scope.
       * Note that PSM put an initial center object in
       * which has fixed a zoom issue where we didn't zoom
       */
      $scope.$on("$stateChangeSuccess", function() {

      LocationStore.list().then(function(locations) {
            $scope.locations = locations;
            //console.dir(locations[0]);
          });

      // $scope.locations = LocationsService.savedLocations;
        // $scope.newLocation;

        // if(!InstructionsService.instructions.newLocations.seen) {

        //   var instructionsPopup = $ionicPopup.alert({
        //     title: 'Add Locations',
        //     template: InstructionsService.instructions.newLocations.text
        //   });
        //   instructionsPopup.then(function(res) {
        //     InstructionsService.instructions.newLocations.seen = true;
        //     });

        // }

        $scope.map = {
          defaults: {
            tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            maxZoom: 18,
            zoomControlPosition: 'bottomleft'
          },
          center: {
            lat: 36.9944,
            lng: -122.0622,
            zoom: 15
          },
          markers : {},
          events: {
            map: {
              enable: ['context'],
              logic: 'emit'
            }
          }
        };

        var locationKey = 23;
        $scope.goTo(locationKey);

      });

      // var Location = function() {
      //   if ( !(this instanceof Location) ) return new Location();
      //   this.lat  = "";
      //   this.lng  = "";
      //   this.name = "";
      // };

      // $ionicModal.fromTemplateUrl('templates/addLocation.html', {
      //   scope: $scope,
      //   animation: 'slide-in-up'
      // }).then(function(modal) {
      //     $scope.modal = modal;
      //   });

      /**
       * Detect user long-pressing on map to add new location
       */
      // $scope.$on('leafletDirectiveMap.contextmenu', function(event, locationEvent){
      //   $scope.newLocation = new Location();
      //   $scope.newLocation.lat = locationEvent.leafletEvent.latlng.lat;
      //   $scope.newLocation.lng = locationEvent.leafletEvent.latlng.lng;
      //   $scope.modal.show();
      // });

      // $scope.saveLocation = function() {
      //   LocationsService.savedLocations.push($scope.newLocation);
      //   $scope.modal.hide();
      //   $scope.goTo(LocationsService.savedLocations.length - 1);
      // };

 

      /*
      * Note that this generates an error on the firsst
      * load. After that, the $scope.locations is set
      * probaly should initialize it in the head of app
      * @param locationKey
      */

        $scope.goTo = function(locationKey) {
         var locDetail = $scope.locations[locationKey];

          $scope.map.center  = {
           lat : parseFloat(locDetail.lattitude),
           lng : parseFloat(locDetail.longitude),
           zoom : 17
         };

        $scope.map.markers[locationKey] = {
           lat : parseFloat(locDetail.lattitude),
           lng : parseFloat(locDetail.longitude),
          message: locDetail.assetName,
          focus: true,
          draggable: false
        };

       };



      /**
       * Center map on user's current position
       */
      $scope.locate = function(){

        $cordovaGeolocation
          .getCurrentPosition()
          .then(function (position) {
            $scope.map.center.lat  = position.coords.latitude;
            $scope.map.center.lng = position.coords.longitude;
            $scope.map.center.zoom = 15;

            $scope.map.markers.now = {
              lat:position.coords.latitude,
              lng:position.coords.longitude,
              message: "You Are Here",
              focus: true,
              draggable: false
            };

          }, function(err) {
            // error
            console.log("Location error!");
            console.log(err);
          });

      };

    }]);
