angular.module('News', [])
 
  .controller('MainCtrl', [
    '$scope',
    function($scope){
     $scope.posts = [];
      $scope.addPost = function(){
        console.log($scope.pokemon);
          $scope.posts.push({
          title: "someTitle",
          pokemonName: $scope.pokemon,
          picture: "charmander.png"
        });
       console.log("here");
       console.log($scope.posts[0]);
      };
  }
]);
