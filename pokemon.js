angular.module('News', [])
 
  .controller('MainCtrl', [
    '$scope',
    function($scope){
      $scope.addPost = function(){
        console.log("here");

        if($scope.formContent === '') {         console.log("blank");
return; }
          $scope.posts.push({
          title: $scope.formContent,
          pokemonName: $scope.pokemon,
          picture: $scope.pokemon + ".png"
        });
        console.log($scope.posts[0]);
        $scope.title = '';
      };
  }
]);
