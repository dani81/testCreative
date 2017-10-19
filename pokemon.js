angular.module('News', ['ui.router'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/home.html',
          controller: 'MainCtrl'
      })
        .state('posts', {
        url: '/posts/{id}',
        templateUrl: '/posts.html',
        controller: 'PostCtrl'
       });
      $urlRouterProvider.otherwise('home');
  }])
  .factory('postFactory', [function(){
    var o = {
      posts: [
      ]
    };
    return o;
  }])
  .controller('MainCtrl', [
    '$scope',
    'postFactory',
    function($scope, postFactory){
      $scope.posts = postFactory.posts;
      $scope.addPost = function(){
        if($scope.formContent === '') { return; }
        postFactory.posts.push({
          title: $scope.formContent,
          pokemonName: $scope.pokemon,
          picture: $scope.pokemon + ".png"
        });
        console.log($scope.posts[0]);
        $scope.posts = postFactory.posts;
        $scope.title = '';
      };
  }
]);
