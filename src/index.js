import 'bootstrap'
import routing from './app.config'
import home from './features/home'

const wpApp = new angular.module('wpAngularTheme', [home])
              .config(routing)

/*
wpApp.factory('Trabalhos', function ($resource) {
  return $resource(appInfo.api_url + 'trabalhos/:ID', {
    ID: '@id'
  })
})

wpApp.controller('ListCtrl', ['$scope', 'Trabalhos', function ($scope, Trabalhos) {
  $scope.page_title = 'Blog Listing'
  Trabalhos.query(function (res) {
    console.log(res)
    $scope.trabalhos = res
  })
}])

wpApp.controller('DetailCtrl', ['$scope', '$stateParams', 'Trabalhos', function ($scope, $stateParams, Posts) {
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
      templateUrl: appInfo.template_directory + 'templates/trabalhos/list.html'
    })
    .state('detail', {
      url: '/trabalhos/:id',
      controller: 'DetailCtrl',
      templateUrl: appInfo.template_directory + 'templates/trabalhos/detail.html'
    })
})

wpApp.filter( 'to_trusted', ['$sce', function ($sce) {
  return function (text) {
    return $sce.trustAsHtml(text)
  }
}])
*/
