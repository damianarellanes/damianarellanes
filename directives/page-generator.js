myWebsite.directive('pageGenerator', function ($rootScope) {
	
	return {
    restrict: 'E',
    scope: {
    	pageSections: '='
    },
    template: 
    '<div ng-repeat="s in pageSections">' +
    	'<hr />' +
    	'<section-generator data-section=\'s\'></section-generator>' +
    '</div>'
  };
});