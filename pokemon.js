angular.module('pokemonBattle', [])
 
  .controller('MainCtrl', [
    '$scope',
    function($scope){
     $scope.posts = [];
      $scope.addPokemon = function(){
        console.log($scope.pokemon);
          $scope.posts.push({
          title: "someTitle",
          pokemonName: $scope.pokemon,
          picture: $scope.pokemon + ".png"
        });
       console.log("here");
       console.log($scope.posts[0]);
      };
  }
]);
