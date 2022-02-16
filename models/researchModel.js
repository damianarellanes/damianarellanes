/**************************** RESEARCH INTERESTS ****************************/
var researchInterestsDesc = 'My core research is focused on the theoretical foundations of <b>self-organising software models</b> which allow the emergence of complex programs from simple rules. The goal of this research is to tackle the scale and the complexity of software construction by exploring the notion and the limits of emergent computation for self-programming. Like any other branch of <b>Theoretical Computer Science</b>, self-organising software models are grounded in analytic philosophy and they are ultimately relevant to applied computing in diverse domains (e.g., Cyber-Physical Systems).<br/><br/>To date, I have discovered the notion of <b>workflow spaces</b> which are computational structures that underpin the foundations of <i>algebraic composition</i>. This notion led me to the development of a <b>single-sorted algebra of control flow spaces</b> that allows the compositional construction of (variable) service-oriented systems. With the foundations of self-organising software models, I have <a target="_blank" href="https://arxiv.org/abs/2108.05402">shown</a> that complex spaces of programs/compositions can emerge from simple rules in the form of abstract categories.';

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
		{type: 'text', content: '<b>Damian Arellanes</b>, Sonia Mendoza and Dominique Decouchant. <span style="color:#000a56">Support for resource aggregation in collaborative P2P systems</span>. In International Conference on Electrical Engineering, Computing Science and Automatic Control (CCE), pages 1-6. IEEE, 2014.'},
	        {type: 'text', content: '<a target="_blank" href="https://ieeexplore.ieee.org/document/6978323"><u>original</u></a>&nbsp;&nbsp;<a href="https://dblp.org/rec/conf/iceee/ArellanesMD14.bib?param=1"><u>bib</u></a>&nbsp;&nbsp;<a target="_blank" href="papers/2014-ResourceAggregationSupport.pdf"><u>preprint</u></a>'}
	]
};
var pub3 = {
	title: '',
	body: [
		{type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. <span style="color:#000a56">Exogenous Connectors for Hierarchical Service Composition</span>. In International Conference on Service Oriented Computing and Applications (SOCA), pages 125-132. IEEE, 2017.'},
	        {type: 'text', content: '<a target="_blank" href="https://ieeexplore.ieee.org/document/8241534"><u>original</u></a>&nbsp;&nbsp;<a href="https://dblp.org/rec/conf/soca/ArellanesL17.bib?param=1"><u>bib</u></a>&nbsp;&nbsp;<a target="_blank" href="papers/2017-ExogenousConnectors.pdf"><u>preprint</u></a>'}
	]
};
var pub4 = {
	title: '',
	body: [
		{type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. <span style="color:#000a56">D-XMAN: A Platform For Total Compositionality in Service-Oriented Architectures</span>. In International Symposium on Cloud and Service Computing (SC2), pages 283-286. IEEE, 2017.'},
	        {type: 'text', content: '<a target="_blank" href="https://ieeexplore.ieee.org/document/8315395"><u>original</u></a>&nbsp;&nbsp;<a href="https://dblp.org/rec/conf/sc2/ArellanesL17.bib?param=1"><u>bib</u></a>&nbsp;&nbsp;<a target="_blank" href="papers/2017-Platform.pdf"><u>preprint</u></a>'}
	]
};
var pub5 = {
	title: '',
	body: [
		{type: 'text', content: 'Elie El Hayek, Imen Grida Ben Yahia, <b>Damian Arellanes</b> and Kung-Kiu Lau. <span style="color:#000a56">Analysis of Component-Based Approaches Toward Componentized 5G</span>. In International Conference on Innovation in Clouds, Internet and Networks (ICIN), pages 1-5. IEEE, 2018.'},
	        {type: 'text', content: '<a target="_blank" href="https://ieeexplore.ieee.org/document/8401611"><u>original</u></a>&nbsp;&nbsp;<a href="https://dblp.org/rec/conf/icin/HayekYAL18.bib?param=1"><u>bib</u></a>&nbsp;&nbsp;<a target="_blank" href="papers/2018-Analysis5G.pdf"><u>preprint</u></a>'}
	]
};
var pub6 = {
	title: '',
	body: [
		{type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. <span style="color:#000a56">Algebraic Service Composition for User-Centric IoT Applications</span>. In International Conference on Internet of Things (ICIOT), pages 56-69. Springer, 2018. <font color="red">Best Paper Award</font>.'},
	        {type: 'text', content: '<a target="_blank" href="https://link.springer.com/chapter/10.1007/978-3-319-94370-1_5"><u>original</u></a>&nbsp;&nbsp;<a href="https://dblp.org/rec/conf/iciot2/ArellanesL18.bib?param=1"><u>bib</u></a>&nbsp;&nbsp;<a target="_blank" href="papers/2018-AlgebraicUserCentric.pdf"><u>preprint</u></a>'}
	]
};
var pub7 = {
	title: '',
	body: [
		{type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. <span style="color:#000a56">Analysis and Classification of Service Interactions for the Scalability of the Internet of Things</span>. In International Congress on Internet of Things (ICIOT), pages 80-87. IEEE, 2018. <i>Core Ranking B</i>. <i>Acceptance rate: 18.6%</i>. Selected as a <font color="red">Best Paper</font> in the 2018 IEEE World Congress of Services for submission in the International Journal of Cloud Computing (IJCC). Prize for the <font color="red">Carole Goble medal</font> for outstanding paper in Computer Science.'},
	        {type: 'text', content: '<a target="_blank" href="https://ieeexplore.ieee.org/document/8473443"><u>original</u></a>&nbsp;&nbsp;<a href="https://dblp.org/rec/conf/iciot/ArellanesL18.bib?param=1"><u>bib</u></a>&nbsp;&nbsp;<a target="_blank" href="papers/2018-AnalysisInteractions.pdf"><u>preprint</u></a>'}
	]
};
var pub8 = {
	title: '',
	body: [
		{type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. <span style="color:#000a56">Decentralized Data Flows in Algebraic Service Compositions for the Scalability of IoT Systems</span>. In World Forum on Internet of Things (WF-IoT), pages 668-673. IEEE, 2019.'},
	        {type: 'text', content: '<a target="_blank" href="https://ieeexplore.ieee.org/document/8767238"><u>original</u></a>&nbsp;&nbsp;<a href="https://dblp.org/rec/conf/wf-iot/ArellanesL19.bib?param=1"><u>bib</u></a>&nbsp;&nbsp;<a target="_blank" href="papers/2019-DecentralizedDataFlows.pdf"><u>preprint</u></a>'}
	]
};
var pub9 = {
	title: '',
	body: [
		{type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. <span style="color:#000a56">Workflow Variability for IoT Systems</span>. In International Conference on Autonomic Computing (ICAC), pages 24-30. IEEE, 2019. <i>Core Ranking B</i>. <i>Acceptance rate: 30%<i/>.'},
	        {type: 'text', content: '<a target="_blank" href="https://ieeexplore.ieee.org/document/8831195"><u>original</u></a>&nbsp;&nbsp;<a href="https://dblp.org/rec/conf/icac/ArellanesL19.bib?param=1"><u>bib</u></a>&nbsp;&nbsp;<a target="_blank" href="papers/2019-WorkflowVariability.pdf"><u>preprint</u></a>'}
	]
};
var pub10 = {
	title: '',
	body: [
		{type: 'text', content: '<b>Damian Arellanes</b> and Kung-Kiu Lau. <a target="_blank" href="papers/2020-EvaluationIoT.pdf"><span style="color:#000a56">Evaluating IoT Service Composition Mechanisms for the Scalability of IoT Systems</span></a>. Future Generation Computer Systems Journal, 108:827-848, 2020.'},
	        {type: 'text', content: '<a target="_blank" href="https://www.sciencedirect.com/science/article/abs/pii/S0167739X19320291"><u>original</u></a>&nbsp;&nbsp;<a href="https://dblp.org/rec/journals/fgcs/ArellanesL20.bib?param=1"><u>bib</u></a>&nbsp;&nbsp;<a target="_blank" href="https://damianarellanes.com/papers/2020-EvaluationIoT.pdf"><u>preprint</u></a>'}
	]
};
var pub11 = {
	title: '',
	body: [
		{type: 'text', content: '<b>Damian Arellanes</b>. <span style="color:#000a56">Self-Organizing Software Models for the Internet of Things: Complex Software Structures that Emerge without a Central Controller</span>. IEEE Systems, Man, and Cybernetics Magazine, 7(3), 2021.'},
	        {type: 'text', content: '<a target="_blank" href="https://ieeexplore.ieee.org/document/9487638"><u>original</u></a>&nbsp;&nbsp;<a href=""><u>bib</u></a>&nbsp;&nbsp;<a target="_blank" href="https://arxiv.org/abs/2009.12844"><u>preprint</u></a>'}
	]
};
var pub12 = {
	title: '',
	body: [
		{type: 'text', content: 'Filippos Ventirozos, Riza Theresa Batista-Navarro, Sarah Clinch and <b>Damian Arellanes</b>. <span style="color:#000a56">A Comparison Between Behaviour Trees and the DX-MAN Model</span>. To appear in the Proceedings of the International Conference on Model Driven Engineering, Languages and Systems Companion (MODELS). ACM/IEEE, 2021.'}//,
	        //{type: 'text', content: '<a target="_blank" href=""><u>original</u></a>&nbsp;&nbsp;<a href=""><u>bib</u></a>&nbsp;&nbsp;<a target="_blank" href=""><u>preprint</u></a>'}
	]
};
var pub13 = {
	title: '',
	body: [
		{type: 'text', content: '<b>Damian Arellanes</b>, Kung-Kiu Lau and Rizos Sakellariou. <a target="_blank" href=""><span style="color:#000a56">Decentralised Data Flows for the Functional Scalability of Service-Oriented IoT Systems</span></a>. Computer Journal, 2022.'},
	        {type: 'text', content: '<a target="_blank" href=""><u>original</u></a>&nbsp;&nbsp;<a href=""><u>bib</u></a>&nbsp;&nbsp;<a target="_blank" href=""><u>preprint</u></a>'}
	]
};

var publications = {
	title: 'Refereed Publications in Journals and Conference Proceedings',
	//icon: 'img/publications-icon.png',
	body: [
	  { type: 'list', listType: 'ul', content: [pub13, pub11, pub12, pub10, pub9, pub8, pub7, pub6, pub5, pub3, pub4, pub1] }
	]
};
/**************************** END: PUBLICATIONS ****************************/

/**************************** OTHER PUBLICATIONS ****************************/
var opub1 = {
	title: '',
	body: [
		{type: 'text', content: '<b>Damian Arellanes</b>. <span style="color:#000a56">Composition Machines: Programming Self-Organising Software Models for the Emergence of Sequential Program Spaces</span>. ArXiv e-prints, arXiv:2108.05402, 2021.'},
	        {type: 'text', content: '<a target="_blank" href="https://arxiv.org/abs/2108.05402"><u>preprint</u></a>&nbsp;&nbsp;<a href="https://ui.adsabs.harvard.edu/abs/2021arXiv210805402A/exportcitation"><u>bib</u></a>'}
	]
};

var otherPublications = {
	title: 'Forthcoming Publications',
	body: [
	  { type: 'list', listType: 'ul', content: [opub1] }
	]
};
/**************************** END: OTHER PUBLICATIONS ****************************/

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
