angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.login', {
      url: '/login',
      views: {
        'tab1': {
          templateUrl: 'templates/login.html',
          controller: 'loginCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.scan', {
      url: '/scan',
      views: {
        'tab2': {
          templateUrl: 'templates/scan.html',
          controller: 'scanCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.logs', {
      url: '/logs',
      views: {
        'tab3': {
          templateUrl: 'templates/logs.html',
          controller: 'logsCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1/login');

});