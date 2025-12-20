myWebsite.directive('sectionGenerator', function ($rootScope) {
	
	return {
    restrict: 'E',
    scope: {
    	section: '='
    },
    template: 
    '<div class="row">' +
    	'<h2 ng-if="section.title != \'\'">{{ section.title }} <img ng-src="{{ section.icon }}" /></h2>' +
    	'<div ng-repeat="element in section.body">' +
    		'<list-generator data-list-content=element.content data-list-type=element.listType ng-if="element.type == \'list\'"></list-generator>' +
    		'<paragraph-generator data-paragraph-content=element.content data-required-paragraph=true ng-if="element.type == \'text\'"></paragraph-generator>' +
    		'<multi-column-generator data-rows=element.content ng-if="element.type == \'multi-column\'"></multi-column-generator>' +
		'<news-generator data-list-content=element.content data-list-type=element.listType ng-if="element.type == \'news\'"></news-generator>' +
    	'</div>' +
    '</div>'
  };
});
