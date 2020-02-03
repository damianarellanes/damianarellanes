var myWebsite =  angular.module("myWebsite", ['ui.router', 'ngAnimate']);

/* States configuration */
myWebsite.config(['$stateProvider', function ($stateProvider) {
	
	var aboutMe = {
        url: '/aboutMe',
        templateUrl: 'views/AboutMe.html',
        controller: 'aboutMeCtrl'
    },
    research = {
        url: '/research',
        templateUrl: 'views/Research.html',
        controller: 'researchCtrl'
    },
    experience = {
        url: '/experience',
        templateUrl: 'views/Experience.html',
        controller: 'experienceCtrl'
    },
    software = {
        url: '/software',
        templateUrl: 'views/Software.html',
        controller: 'softwareCtrl'
    },
    personal = {
        url: '/personal',
        templateUrl: 'views/Personal.html',
        controller: 'personalCtrl'
    };
	
    $stateProvider    	    	
       	.state('aboutMe', aboutMe)
       	.state('research', research)
       	.state('experience', experience)
       	.state('software', software)
       	.state('personal', personal);
}]);

/* Redirection configuration */
myWebsite.config(function($urlRouterProvider) {	
        $urlRouterProvider.when('', '/aboutMe');

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
});
