/**************************** RESEARCH INTERESTS ****************************/
var researchInterestsDesc = 'My core research focuses on the area of <i>software models for distributed systems</i> and, more specifically, on autonomic models of computation for Cyber-Physical Systems (CPS).<br/><br/>To date, I have discovered the notion of <b>workflow spaces</b> which are computational structures that underpin the foundations of <i>algebraic composition</i>. This notion led me to the development of a <b>single-sorted algebra of control flow spaces</b> that allows the compositional construction of (variable) service-oriented systems.<br/><br/>Currently, I investigate the fundamental semantics of autonomicity in algebraic software models for tackling the scale and the complexity of future CPS environments (like the Internet of Things). I have a strong interest in the theory of self-* properties (e.g., self-composition, self-optimisation, self-reconfiguration, etc.) for realising autonomicity. Like any other branch of theoretical Computer Science, this theory is grounded in philosophy and it is ultimately relevant to applied computing in diverse CPS domains (e.g., Smart Cities, Smart Homes and Connected Health).';

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
			type: 'text', content: '<b>Damian Arellanes</b>, Sonia Mendoza and Dominique Decouchant. <a target="_blank" href="papers/2014-ResourceAggregationSupport.pdf">Support for resource aggregation in collaborative P2P systems</a>. In International Conference on Electrical Engineering, Computing Science and Automatic Control (CCE), pages 1-6. IEEE, 2014.' 
		}
	]
};
var pub3 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. <a target="_blank" href="papers/2017-ExogenousConnectors.pdf">Exogenous Connectors for Hierarchical Service Composition</a>. In International Conference on Service Oriented Computing and Applications (SOCA), pages 125-132. IEEE, 2017.' 
		}
	]
};
var pub4 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. <a target="_blank" href="papers/2017-Platform.pdf">D-XMAN: A Platform For Total Compositionality in Service-Oriented Architectures</a>. In International Symposium on Cloud and Service Computing (SC2), pages 283-286. IEEE, 2017.' 
		}
	]
};
var pub5 = {
	title: '',
	body: [
		{ 
			type: 'text', content: 'Elie El Hayek, Imen Grida Ben Yahia, <b>Damian Arellanes</b> and Kung-Kiu Lau. <a target="_blank" href="papers/2018-Analysis5G.pdf">Analysis of Component-Based Approaches Toward Componentized 5G</a>. In International Conference on Innovation in Clouds, Internet and Networks (ICIN), pages 1-5. IEEE, 2018.' 
		}
	]
};
var pub6 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. <a target="_blank" href="papers/2018-AlgebraicUserCentric.pdf">Algebraic Service Composition for User-Centric IoT Applications</a>. In International Conference on Internet of Things (ICIOT), pages 56-69. Springer, 2018. <font color="red">Best Paper Award</font>.' 
		}
	]
};
var pub7 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. <a target="_blank" href="papers/2018-AnalysisInteractions.pdf">Analysis and Classification of Service Interactions for the Scalability of the Internet of Things</a>. In International Congress on Internet of Things (ICIOT), pages 80-87. IEEE, 2018. <i>Core Ranking B</i>. <i>Acceptance rate: 18.6%</i>. Selected as a <font color="red">Best Paper</font> in the 2018 IEEE World Congress of Services for submission in the International Journal of Cloud Computing (IJCC). Prize for the <font color="red">Carole Goble medal</font> for outstanding paper in Computer Science.' 
		}
	]
};
var pub8 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. <a target="_blank" href="papers/2019-DecentralizedDataFlows.pdf">Decentralized Data Flows in Algebraic Service Compositions for the Scalability of IoT Systems</a>. In World Forum on Internet of Things (WF-IoT), pages 668-673. IEEE, 2019.' 
		}
	]
};
var pub9 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. <a target="_blank" href="papers/2019-WorkflowVariability.pdf">Workflow Variability for IoT Systems</a>. In International Conference on Autonomic Computing (ICAC), pages 24-30. IEEE, 2019. <i>Core Ranking B</i>. <i>Acceptance rate: 30%<i/>.' 
		}
	]
};
var pub10 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. <a target="_blank" href="papers/2020-EvaluationIoT.pdf">Evaluating IoT Service Composition Mechanisms for the Scalability of IoT Systems</a>. Future Generation Computer Systems Journal, 108:827-848, 2020.' 
		}
	]
};
var pub11 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '<b>Damian Arellanes</b>. <a target="_blank" href="https://arxiv.org/pdf/2009.12844v2.pdf">Self-Organizing Software Models for the Internet of Things: Complex Software Structures that Emerge without a Central Controller</a>. IEEE Systems, Man, and Cybernetics Magazine, 7(3), 2021.' 
		}
	]
};

var publications = {
	title: 'Peer-Reviewed Publications',
	//icon: 'img/publications-icon.png',
	body: [
	  { type: 'list', listType: 'ul', content: [pub11, pub10, pub9, pub8, pub7, pub6, pub5, pub3, pub4, pub1] }
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
var pcIntro = '<b>Programme Committee Member</b>';
var pc1 = {
	title: '',
	body: [
		{ 
			type: 'link', ref: 'https://www.cs.le.ac.uk/events/UCC2020/index.htm', content: '13th IEEE/ACM International Conference on Utility and Cloud Computing (UCC 2020)' 
		}
	]
};
var pc2 = {
	title: '',
	body: [
		{ 
			type: 'link', ref: 'https://www.iaria.org/conferences2020/INTERNET20.html', content: '12th International Conference on Evolving Internet (INTERNET 2020)' 
		}
	]
};
var pc3 = {
	title: '',
	body: [
		{ 
			type: 'link', ref: 'http://facs2019.org/', content: '16th International Conference on Formal Aspects of Component Software (FACS 2019)' 
		}
	]
};
var pc4 = {
	title: '',
	body: [
		{ 
			type: 'link', ref: 'https://www.isf.cs.tu-bs.de/cms/events/sefm2018/', content: '16th International Conference on Software Engineering and Formal Methods (SEFM 2018)' 
		}
	]
};
var pc5 = {
	title: '',
	body: [
		{ 
		        type: 'link', ref: 'http://staf2016.conf.tuwien.ac.at/sefm/', content: '14th International Conference on Software Engineering and Formal Methods (SEFM 2016)' 
		}
	]
};

var revJournIntro = '<b>Journal Reviewer</b>';
var revJourn1 = {
	title: '',
	body: [{ type: 'link', ref: 'https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=4629386', content: 'IEEE Transactions on Services Computing' }]
};
var revJourn2 = {
	title: '',
	body: [{ type: 'link', ref: 'https://www.springer.com/journal/10723', content: 'Journal of Grid Computing' }]
};
var revJourn3 = {
	title: '',
	body: [{ type: 'link', ref: 'https://ieeeaccess.ieee.org/about-ieee-access/learn-more-about-ieee-access/', content: 'IEEE Access' }]
};
var revJourn4 = {
	title: '',
	body: [{ type: 'link', ref: 'https://www.mdpi.com/journal/sensors/sections/internet_of_things', content: 'Sensors Journal (Internet of Things Section)' }]
};
var revJourn5 = {
	title: '',
	body: [{ type: 'link', ref: 'https://www.mdpi.com/journal/electronics/sectioneditors/Artificial_Intell', content: 'Electronics Journal (Artificial Intelligence Section)' }]
};

var reviews = {
	title: 'Professional Services',
	//icon: 'img/review-icon.png',
        body: [
                { type: 'text', content: revJournIntro },
        	{ type: 'list', content: [revJourn1, revJourn2, revJourn3, revJourn4, revJourn5] },
		{ type: 'text', content: pcIntro },
    	        { type: 'list', content: [pc1, pc2, pc3, pc4, pc5] }	        
	]
};
/**************************** END: REVIEW COMMITTEE ****************************/
