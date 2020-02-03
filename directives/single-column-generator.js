myWebsite.directive('singleColumnGenerator', function ($rootScope) {
	
	return {
    restrict: 'E',
    scope: {
    	customisedClass: '=',
    	columnContent: '='
    },
    template: 
    '<div class="customisedClass"> +
    	'<paragraph-generator data-paragraph-content=columnContent data-required-paragraph=false></paragraph-generator>' +
    '</div>'
  };
});