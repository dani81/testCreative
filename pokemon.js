angular.module('News', [])
 
  .controller('MainCtrl', [
    '$scope',
    function($scope){
      $scope.addPost = function(){
        console.log("here");
          $scope.posts.push({
          title: "someTitle",
          pokemonName: $scope.pokemon,
          picture: "charmander.png"
        });
      };
  }
]);
