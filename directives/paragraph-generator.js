myWebsite.directive("paragraphGenerator", function(){
  return {
    restrict: 'E',
    transclude: true,
    scope: {
    	paragraphContent: '=',
    	requiredParagraph: '='
    },
    link: function($scope, $element, $attrs, $ctrl, $transclude) {    	
      $transclude(function(clone){
        if(!$scope.requiredParagraph) {
        	$element.append($scope.paragraphContent);	
        } else {
        	$element.append('<p>' + $scope.paragraphContent + '</p>');
        }        	
      });      
    }
  };
});