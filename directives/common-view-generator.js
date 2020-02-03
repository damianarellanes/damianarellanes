myWebsite.directive('commonViewGenerator', function ($rootScope) {
	
	return {
    restrict: 'E',
    scope: {
    	header: '=',
    	navigatorInfo: '=',
    	contactInfo: '='
    },
    template: 
    '<div class="container-fluid">' +						
		'<div class="row header">' +
			'<div class="col-sm-6 span1">' +
				'<img ng-src="{{ header.uniLogo }}" />' +		    			
			'</div>' +
			'<div class="col-sm-6 school-name">' +
				'{{ header.schoolName }}' +
			'</div>' +
		'</div>' +							
	'</div>' +
	
	'<div id="custom-bootstrap-menu" class="navbar navbar-default " role="navigation">' +
    	'<div class="container-fluid">' +
        	'<div class="navbar-header">' +       	
            	'<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#my-tabs">' +
            		'<span class="icon-bar" ng-repeat="n in navigatorInfo"></span>' +
            	'</button>' +
        	'</div>' +
        	'<div class="collapse navbar-collapse" id="my-tabs">' +
            	'<ul class="nav navbar-nav navbar-left">' +
            		'<li ui-sref-active="active" ng-repeat="t in navigatorInfo"><a ui-sref="{{t.link}}">{{ t.tag }}</a></li>' +
            	'</ul>' +
        	'</div>' +
    	'</div>' +
	'</div>' +
	
	'<div class="container-fluid">' +		  
  		'<div class="row profile">' +
    		'<div class="col-sm-4 span1">' +
    			'<!-- My Picture -->' +
    			'<img ng-src="{{ contactInfo.picture }}" />' +
    		'</div>' +
    		'<div class="col-sm-5 span2">' +
    			'<!-- My Contact Details -->' +		    	
	    		'<h1><paragraph-generator data-paragraph-content="contactInfo.name" data-required-paragraph=false></paragraph-generator></h1>' +
	    		'<!--<h3><paragraph-generator data-paragraph-content="contactInfo.researchGroup" data-required-paragraph=false></paragraph-generator></a></h3>-->' +
	    		'<h3><paragraph-generator data-paragraph-content="contactInfo.school" data-required-paragraph=false></paragraph-generator></h3>' +
	    		'<h3><paragraph-generator data-paragraph-content="contactInfo.university" data-required-paragraph=false></paragraph-generator></h3>' +
	    		'<p>' +
	    			'<b>Contact:</b><br />' +
	    			'<paragraph-generator data-paragraph-content="contactInfo.contactDetails" data-required-paragraph=false></paragraph-generator>' +
	    		'</p>' +
	    		'<!--<p>' +
	    	
	    			'<a href="#" class="download-button">Download my resume!</a></div>' + 
	    		'</p>-->' +
    		'</div>' +
    		'<div class="col-sm-3">' +
    			'<!-- University Emblem -->' +
    			'<img src="{{ contactInfo.universityEmblem }}" style="width: 75px;height:150px; overflow: hidden;" /></a>' +    	
    		'</div>' +
  		'</div>' +
	'</div>' 
  };
});