'use strict';

angular.module( 'HoardIt' )
  .controller( 'HoardsCtrl', function ( $http ) {
    var vm = this;

    vm.hoards = [];

    $http.get('/api/hoards').success(function(hoards) {
      vm.hoards = hoards;
      socket.syncUpdates('thing', vm.hoards);
    });



    // vm.addThing = function() {
    //   if(vm.newThing === '') {
    //     return;
    //   }
    //   $http.post('/api/things', { name: vm.newThing });
    //   vm.newThing = '';
    // };

    // vm.deleteThing = function(thing) {
    //   $http.delete('/api/things/' + thing._id);
    // };

    // vm.$on('$destroy', function () {
    //   socket.unsyncUpdates('thing');
    // });
  });
