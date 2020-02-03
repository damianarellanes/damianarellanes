myWebsite.directive('listGenerator', function ($rootScope) {
	
	return {
    restrict: 'E',
    transclude: true,
    scope: {
    	title: '@',
    	listContent: '=',
    	listType: '='
    },
    template: 
  	'<ul>' +
	 	'<li ng-repeat="l in listContent">' +
	 		'<div class="title">{{ l.title }}</div>' + 
	 		'<div ng-repeat="b in l.body">' +
	 			'<div ng-if="b.type == \'text\'"><paragraph-generator data-paragraph-content="b.content" data-required-paragraph=false ng-if="b.type == \'text\'"></paragraph-generator></div>' +
	 			'<a href="{{ b.ref }}" ng-if="b.type == \'link\' ">{{ b.content }}</a>' +
	 			'<div ng-if="b.type == \'italic\' "><i>{{ b.content }}</i></div>' +
	 			'<div ng-if="b.type == \'bold\' "><b>{{ b.content }}</b></div>' +
	 		'</div>' +
	 	'</li>' +
 	'</ul>'
 };
});