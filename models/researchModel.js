/**************************** RESEARCH INTERESTS ****************************/
var researchInterestsDesc = 'The Internet of Things (IoT) is an emergent paradigm that promises the interconnection of (physical and virtual) things through innovative distributed services. Like traditional enterprise services, IoT services are composed with other services so as to yield more complex behaviours. However, unlike traditional enterprise systems, IoT systems will require the composition of billions of services as the number of connected things (and therefore services) is growing exponentially. Thus, scalability becomes a crucial concern for the full realisation of IoT systems. <br/><br/>My research focuses on the design of an algebraic service model, DX-MAN, for the composition of large-scale IoT systems where services and (exogenous) variability operators are first-class entities. In particular, DX-MAN provides (i) explicit control flow; (ii) separation between, control, data, computation and autonomicity; (iii) decentralized data flows; (iv) distributed control flows; (v) location transparency; and (vi) workflow variability. The model has been evaluated qualitatively to show properties (i), (ii), (v) and (vi), and quantitatively for showing properties (iii) and (iv).';

var researchInterests = {
	title: 'Research Interests',
	icon: 'img/research-icon.png',
	body: [
		{ type: 'text', content: researchInterestsDesc }
	]
};
/**************************** END: RESEARCH INTERESTS ****************************/

/**************************** RESEARCH PROJECTS ****************************/
var researchProjectsDesc = 'I am particularly interested in collaborations between the Academy and the Industry. The following lists the projects in which I am involved as part of my ongoing research.';
var rproject1_0 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-12', content: '<br/><br/><p><b><a href="">D-XMAN Service Model</a></b></p>' }
	]
};
var rproject1_1 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-6', content: '<img src="img/projects/D-XMAN.png" width="100%" height="100%" />' },		
		{ size: 'sm-6', classes: '', content: 			
			'<br/><br/><p>D-XMAN (Distributed X-MAN) is a service model for composing IoT systems algebraically using exogenous connectors as algebraic and variability operators. The semantics of this model allows distribution, variability of behaviour, explicit control flow, location transparency, separation of concerns (data, control and computation), decentralized control flows and decentralized data flows.</p>' }
	]
};


var researchProjects = {
	title: 'Projects',
	icon: 'img/research-project-icon.png',
	body: [
		{ type: 'text', content: researchProjectsDesc },
	    { type: 'multi-column', content: [rproject1_0, rproject1_1] }
	]
};
/**************************** END: RESEARCH PROJECTS ****************************/

/**************************** TALKS ****************************/
var talk1 = {
	title: '',
	body: [
		{ 
			type: 'text', content: 'K.-K. Lau and <b>D. Arellanes</b>. <b>Componentization Paradigms: Past, Present and Future</b>, 1st International Workshop on Network Intelligence (NI 2018), 19-22 February 2018, Paris, France.' 
		}
	]
};

var talks = {
	title: 'Keynotes',
	icon: 'img/talks-icon.png',
	body: [
	    { type: 'list', listType: 'ul', content: [talk1] }
	]
};
/**************************** END: TALKS ****************************/

/**************************** PUBLICATIONS ****************************/
var pub1 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>Damian Arellanes</b>, Sonia Mendoza and Dominique Decouchant. Support for resource aggregation in collaborative P2P systems. In International Conference on Electrical Engineering, Computing Science and Automatic Control (CCE), pages 1-6. IEEE, 2014.' 
		}
	]
};
var pub3 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. Exogenous Connectors for Hierarchical Service Composition. In International Conference on Service Oriented Computing and Applications (SOCA), pages 125-132. IEEE, 2017.' 
		}
	]
};
var pub4 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. D-XMAN: A Platform For Total Compositionality in Service-Oriented Architectures. In International Symposium on Cloud and Service Computing (SC2), pages 283-286. IEEE, 2017.' 
		}
	]
};
var pub5 = {
	title: '',
	body: [
		{ 
			type: 'text', content: 'Elie El Hayek, Imen Grida Ben Yahia, <b>Damian Arellanes</b> and Kung-Kiu Lau. Analysis of Component-Based Approaches Toward Componentized 5G. In International Conference on Innovation in Clouds, Internet and Networks (ICIN), pages 1-5. IEEE, 2018.' 
		}
	]
};
var pub6 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. Algebraic Service Composition for User-Centric IoT Applications. In International Conference on Internet of Things (ICIOT), pages 56-69. Springer, 2018. <font color="red">Best Paper Award</font>.' 
		}
	]
};
var pub7 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. Analysis and Classification of Service Interactions for the Scalability of the Internet of Things. In International Congress on Internet of Things (ICIOT), pages 80-87. IEEE, 2018. <i>Core Ranking B</i>. <b>Acceptance rate: 18.6%</b>. <font color="red">Selected as one of the best papers in the 2018 IEEE World Congress of Services for submission in the International Journal of Cloud Computing (IJCC). Runner up for the Carole Goble medal for outstanding paper in Computer Science.</font>' 
		}
	]
};
var pub8 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. Decentralized Data Flows in Algebraic Service Compositions for the Scalability of IoT Systems. In World Forum on Internet of Things (WF-IoT), pages 668-673. IEEE, 2019.' 
		}
	]
};
var pub9 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. Workflow Variability for IoT Systems. In International Conference on Autonomic Computing (ICAC), pages 24-30. IEEE, 2019. <i>Core Ranking B</i>. <b>Acceptance rate: 30%</b>' 
		}
	]
};
var pub10 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. Evaluating IoT Service Composition Mechanisms for the Scalability of IoT Systems. <i>To appear</i> in Future Generation Computer Systems Journal. Elsevier, 2020. <b>Impact Factor 2018: 5.77</b>' 
		}
	]
};

var publications = {
	title: 'Refereed Publications',
	icon: 'img/publications-icon.png',
	body: [
	  { type: 'list', listType: 'ul', content: [pub10, pub9,pub8, pub7, pub6, pub5, pub3, pub4, pub1] }
	]
};
/**************************** END: PUBLICATIONS ****************************/

/********************************* POSTERS *********************************/
var poster1 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>D. Arellanes</b> and K-K. Lau, <b>DX-MAN: A Platform For Total Compositionality in Service-Oriented Architectures</b>, Poster session presented at the 7th International Symposium on Cloud and Service Computing (IEEE SC2 2017), Kanazawa (Japan), November 22-25, 2017.' 
		}
	]
};
var poster2 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>D. Arellanes</b> and K-K. Lau, <b>Workflow Variability for IoT Systems</b>, Poster session presented at the 16th IEEE International Conference on Autonomic Computing (ICAC 2019), Umea (Sweden), 16-20 June, 2019.' 
		}
	]
};
var posters = {
	title: 'Posters',
	icon: 'img/posters-icon.png',
	body: [
	  { type: 'list', listType: 'ul', content: [poster2, poster1] }
	]
};
/****************************** END: POSTERS ******************************/

/********************************* THESES *********************************/
var thesis1 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>D. Arellanes</b>, <b>RASupport: flexible, bio-inspired, self-configurable and multi-agent support for resource aggregation in collaborative P2P systems</b>, Masters Thesis, Center for Research and Advanced Studies of the National Polytechnic Institute (CINVESTAV-IPN), Department of Computer Science, Winter 2014.' 
		}
	]
};
var thesis2 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>D. Arellanes</b>, <b>An Algebraic Service Composition Model for the Construction of Large-Scale IoT Systems</b>, PhD Thesis, The University of Manchester, Department of Computer Science, Autum 2019.' 
		}
	]
};
var theses = {
	title: 'Theses',
	icon: 'img/theses-icon.png',
	body: [
	  { type: 'list', listType: 'ul', content: [thesis2, thesis1] }
	]
};
/****************************** END: THESES ******************************/

/**************************** REVIEW COMMITTEE ****************************/
var revConf = {
	title: '',
	body: [
		{ 
			type: 'text', content: 'Peer Reviewer (Conferences): The 24th International Conference on Engineering of Complex Computer Systems (ICECCS 2019), 2019 International Conference on Communication Technologies (ComTech 2019), The 29th International Conference on Concurrency Theory (CONCUR 2018), The 23rd International Conference on Engineering of Complex Computer Systems (ICECCS 2018), The 7th European Conference on Service-Oriented and Cloud Computing (ESOCC 2018), The 16th International Conference on Software Engineering and Formal Methods (SEFM 2018), The 22nd International Conference on Engineering of Complex Computer Systems (ICECCS 2017), The 21st International Conference on Engineering of Complex Computer Systems (ICECCS 2016), The 14th International Conference on Software Engineering and Formal Methods (SEFM 2016)' 
		}
	]
};

var reviews = {
	title: 'Review Services',
	icon: 'img/review-icon.png',
	body: [
	    { type: 'list', listType: 'ul', content: [revConf] }
	]
};
/**************************** END: REVIEW COMMITTEE ****************************/
