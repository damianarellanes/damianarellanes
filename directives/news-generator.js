myWebsite.directive('newsGenerator', function ($rootScope) {
	
	return {
    restrict: 'E',
    transclude: true,
    scope: {
    	title: '@',
    	listContent: '=',
    	listType: '='
    },
    template: 
  	'<dl ng-repeat="l in listContent">' +
	 	'<dt>{{ l.title }}</dt><dd ng-bind-html="l.info"></dd>' +
 	'</dl>'
 };
});
