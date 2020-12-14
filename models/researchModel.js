/**************************** RESEARCH INTERESTS ****************************/
var researchInterestsDesc = 'My core research focuses on the area of <i>software engineering for distributed systems</i> and, more specifically, on autonomic models of computation for the Internet of Things (IoT).<br/><br/>To date, I have discovered the notion of <b>workflow spaces</b> which are computational structures that underpin the foundations of <i>algebraic composition</i>. This notion led me to the development of an <b>algebra of behavioural spaces</b> that allows the compositional construction of (variable) service-oriented IoT systems.<br/><br/>Currently, I investigate the fundamental semantics of autonomicity in algebraic service-oriented models for tackling the scale and the complexity of IoT. I have a strong interest in the theory of self-* properties (e.g., self-composition, self-optimisation, self-reconfiguration, etc.) for realising autonomous IoT software systems. Like any other branch of theoretical Computer Science, this theory is grounded in philosophy and it is ultimately relevant to applied computing in diverse IoT domains (e.g., Smart Cities, End-User Programming and Connected Health).';

var researchInterests = {
	title: 'Research Interests',
	//icon: 'img/research-icon.png',
	body: [
		{ type: 'text', content: researchInterestsDesc }
	]
};
/**************************** END: RESEARCH INTERESTS ****************************/

/**************************** RESEARCH PROJECTS ****************************/
var researchProjectsDesc = '';
var rproject1_0 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-12', content: '<br/><br/><p><b><a href="">DX-MAN: An Algebraic Model for the Compositional Construction of Autonomous IoT Systems</a></b></p>' }
	]
};
var rproject1_1 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-6', content: '<img src="img/projects/D-XMAN.png" width="100%" height="100%" />' },		
		{ size: 'sm-6', classes: '', content: 			
			'<p>DX-MAN is an algebraic model for composing IoT services algebraically and incrementally using exogenous composition operators. The semantics of the model allows explicit control flow, distributed workflows, location transparency, decentralised data flows, separation of concerns (data, control and computation) and workflow variability.</p>' }
	]
};


var researchProjects = {
	title: 'Projects',
	//icon: 'img/research-project-icon.png',
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
			type: 'text', content: 'Kung-Kiu Lau and <b>Damian Arellanes</b>. Componentization Paradigms: Past, Present and Future, 1st International Workshop on Network Intelligence (NI 2018), 19-22 February 2018, Paris, France.' 
		}
	]
};

var talks = {
	title: 'Keynotes',
	//icon: 'img/talks-icon.png',
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
			type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. Evaluating IoT Service Composition Mechanisms for the Scalability of IoT Systems. Future Generation Computer Systems Journal, 108:827-848, 2020. <b>Impact Factor 2018: 5.77</b>' 
		}
	]
};

var publications = {
	title: 'Refereed Publications',
	//icon: 'img/publications-icon.png',
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
			type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. DX-MAN: A Platform For Total Compositionality in Service-Oriented Architectures, Poster session presented at the 7th International Symposium on Cloud and Service Computing (IEEE SC2 2017), Kanazawa (Japan), November 22-25, 2017.' 
		}
	]
};
var poster2 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. Workflow Variability for IoT Systems, Poster session presented at the 16th IEEE International Conference on Autonomic Computing (ICAC 2019), Umea (Sweden), 16-20 June, 2019.' 
		}
	]
};
var posters = {
	title: 'Posters',
	//icon: 'img/posters-icon.png',
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
			type: 'text', content: '<b>Damian Arellanes</b>, RASupport: flexible, bio-inspired, self-configurable and multi-agent support for resource aggregation in collaborative P2P systems, Masters Thesis, Center for Research and Advanced Studies of the National Polytechnic Institute (CINVESTAV-IPN), Department of Computer Science, Winter 2014.' 
		}
	]
};
var thesis2 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>Damian Arellanes</b>, An Algebraic Service Composition Model for the Construction of Large-Scale IoT Systems, PhD Thesis, The University of Manchester, Department of Computer Science, Autum 2019.' 
		}
	]
};
var theses = {
	title: 'Theses',
	//icon: 'img/theses-icon.png',
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
			type: 'text', content: 'Peer Reviewer (Conferences): 12th International Conference on Evolving Internet (INTERNET 2020), 8th European Conference on Service-Oriented and Cloud Computing (ESOCC 2020), 16th International Conference on Formal Aspects of Component Software (FACS 2019), 24th International Conference on Engineering of Complex Computer Systems (ICECCS 2019), 2019 International Conference on Communication Technologies (ComTech 2019), The 29th International Conference on Concurrency Theory (CONCUR 2018), The 23rd International Conference on Engineering of Complex Computer Systems (ICECCS 2018), The 7th European Conference on Service-Oriented and Cloud Computing (ESOCC 2018), The 16th International Conference on Software Engineering and Formal Methods (SEFM 2018), The 22nd International Conference on Engineering of Complex Computer Systems (ICECCS 2017), The 21st International Conference on Engineering of Complex Computer Systems (ICECCS 2016), The 14th International Conference on Software Engineering and Formal Methods (SEFM 2016).' 
		}
	]
};
var revJourn = {
	title: '',
	body: [
		{ 
			type: 'text', content: 'Peer Reviewer (Journals): Sensors Journal (Internet of Things Section 2020), Electronics Journal (Artificial Intelligence Section 2020).' 
		}
	]
};

var reviews = {
	title: 'Professional Services',
	//icon: 'img/review-icon.png',
	body: [
	  { type: 'list', listType: 'ul', content: [revJourn, revConf] }
	]
};
/**************************** END: REVIEW COMMITTEE ****************************/
