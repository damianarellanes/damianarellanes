var myWebsite =  angular.module("myWebsite", ['ui.router', 'ngAnimate']);

/* States configuration */
myWebsite.config(['$stateProvider', function ($stateProvider) {
	
    var aboutMe = {
        url: '/aboutMe',
        templateUrl: 'views/AboutMe.html',
        controller: 'aboutMeCtrl'
    },
    /*research = {
        url: '/research',
        templateUrl: 'views/Research.html',
        controller: 'researchCtrl'
    },*/
    personal = {
        url: '/personal',
        templateUrl: 'views/Personal.html',
        controller: 'personalCtrl'
    },
    awards = {
        url: '/awards',
        templateUrl: 'views/Awards.html',
        controller: 'awardsCtrl'
    },
    team = {
        url: '/team',
        templateUrl: 'views/Team.html',
        controller: 'teamCtrl'
    };
	
    $stateProvider    	    	
        .state('aboutMe', aboutMe)
        //.state('research', research)  
        //.state('personal', personal)
        .state('awards', awards)
        .state('team', team);
}]);

/* Redirection configuration */
myWebsite.config(function($urlRouterProvider) {	
	$urlRouterProvider.when('', '/aboutMe');
});
