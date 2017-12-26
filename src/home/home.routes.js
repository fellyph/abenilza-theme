routes.$inject = ['$stateProvider']

export default function routes () {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./template-home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    })
}
