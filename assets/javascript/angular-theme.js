var wpApp = new angular.module('wpAngularTheme', ['ui.router', 'ngResource'])

wpApp.factory('Posts', function ($resource) {
  return $resource(appInfo.api_url + '/trabalhos/:ID', {
    ID: '@id'
  })
})

console.log(appInfo.api_url + '/trabalhos/:ID')

wpApp.controller('ListCtrl', ['$scope', 'Posts', function ($scope, Posts) {
  console.log('ListCtrl')
  $scope.page_title = 'Blog Listing'

  Posts.query(function (res) {
    $scope.posts = res
  })
}])

wpApp.controller('DetailCtrl', ['$scope', '$stateParams', 'Posts', function ($scope, $stateParams, Posts) {
  console.log('Detail')
  $scope.page_title = 'Detail Post'
  Posts.get({ID: $stateParams.id}, function (res) {
    $scope.post = res
  })
}])

wpApp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
  $stateProvider
    .state('list', {
      url: '/',
      controller: 'ListCtrl',
      templateUrl: appInfo.template_directory + 'templates/list.html'
    })
    .state('detail', {
      url: '/posts/:id',
      controller: 'DetailCtrl',
      templateUrl: appInfo.template_directory + 'templates/detail.html'
    })
})

wpApp.filter( 'to_trusted', ['$sce', function ($sce) {
  return function (text) {
    return $sce.trustAsHtml(text)
  }
}])
