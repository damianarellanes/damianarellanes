myWebsite.directive('multiColumnGenerator', function ($rootScope) {
	
	return {
    restrict: 'E',
    scope: {
    	rows: '='
    },
    template: 
    '<div class="row" ng-repeat="r in rows">' +    	
		'<div ng-class="[\'col-\' + c.size, c.classes]" ng-repeat="c in r.columns">' +
			'<paragraph-generator data-paragraph-content=c.content data-required-paragraph=false></paragraph-generator>' +
		'</div>' +    	    	
    '</div>'
  };
});