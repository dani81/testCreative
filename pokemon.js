angular.module('News', [])
 
  .controller('MainCtrl', [
    '$scope',
    function($scope){
      $scope.addPost = function(){
        if($scope.formContent === '') { return; }
          $scope.posts.push({
          title: $scope.formContent,
          pokemonName: $scope.pokemon,
          picture: $scope.pokemon + ".png"
        });
        console.log("here");
        console.log($scope.posts[0]);
        $scope.title = '';
      };
  }
]);
