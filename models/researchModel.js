/**************************** RESEARCH INTERESTS ****************************/
//I am interested in the following questions:<br/><br/><img src="img/questions.png" width="80%" height="80%" />
var researchInterestsDesc = 'My search is in the broad area of <b>Theoretical Computer Science</b> and it is primarily aimed at discovering the foundations of <b>Self-Composition</b> by exploring the intersection of composition spaces, algebraic semantics, emergence and self-reduction.<br/><br/><img src="img/context.png" width="100%" height="100%" /><br/><br/><b>Composition spaces</b> are abstract structures that encapsulate a potentially infinite number of composition constructs (which can either be computable or non-computable). In this line, I am particularly interested in defining algebraic semantics for such spaces as well as understanding their emergence and self-reduction limits.<br/><br/>During my search journey, I have discovered the notion of workflow spaces which allow the algebraic construction of variable computations. With the foundations of self-organisation, I have <a target="_blank" href="https://arxiv.org/pdf/2108.05402.pdf">shown</a> that complex composition spaces can emerge from simple rules in the form of abstract categories. More recently, I started to develop a <a target="_blank" href="https://arxiv.org/pdf/2206.01694.pdf">single-sorted algebra</a> of computon spaces which are morphisms that generalise the notion of composition.';

var researchInterests = {
	title: 'Research Interests',
	//icon: 'img/research-icon.png',
	body: [
	  { type: 'text', content: researchInterestsDesc }
	]
};
/**************************** END: RESEARCH INTERESTS ****************************/

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
		{type: 'text', content: 'Filippos Ventirozos, Riza Theresa Batista-Navarro, Sarah Clinch and <b>Damian Arellanes</b>. <span style="color:#000a56">A Comparison Between Behaviour Trees and the DX-MAN Model</span>. In International Conference on Model Driven Engineering, Languages and Systems Companion (MODELS), pages 341-350. ACM/IEEE, 2021.'}
	]
};
var pub13 = {
	title: '',
	body: [
		{type: 'text', content: '<b>Damian Arellanes</b>, Kung-Kiu Lau and Rizos Sakellariou. <a target="_blank" href=""><span style="color:#000a56">Decentralized Data Flows for the Functional Scalability of Service-Oriented IoT Systems</span></a>. Computer Journal, 2022.'},
	        {type: 'text', content: '<a target="_blank" href="https://doi.org/10.1093/comjnl/bxac023"><u>original</u></a>&nbsp;&nbsp;<a href=""><u>bib</u></a>&nbsp;&nbsp;<a target="_blank" href=""><u>preprint</u></a>'}
	]
};

var pubs = {
	title: 'Refereed Articles in Journals and in Conference Proceedings',
	//icon: 'img/publications-icon.png',
	body: [
	  //{ type: 'list', listType: 'ul', content: [pub13, pub12, pub11, pub10, pub9, pub8, pub7, pub6, pub5, pub3, pub4, pub1] }
	  { type: 'text', content: 'The list of previous publications is available on <a href="https://scholar.google.com/citations?user=mYm6CDsAAAAJ&hl=en">Google Scholar</a> and <a href="https://dblp.org/pid/173/8097.html">DBLP</a>.' }
	]
};
var journalPubs = {
	title: 'Refereed Articles in Journals',
	body: [
	  { type: 'list', listType: 'ul', content: [pub13, pub11, pub10] }
	]
};
var conferencePubs = {
	title: 'Refereed Articles in Conference Proceedings',
	body: [
	  { type: 'list', listType: 'ul', content: [pub12, pub9, pub8, pub7, pub6, pub5, pub3, pub4, pub1] }
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
var opub2 = {
	title: '',
	body: [
		{type: 'text', content: '<b>Damian Arellanes</b>. <span style="color:#000a56">Towards an Algebra of Computon Spaces</span>. ArXiv e-prints, arXiv:2206.01694, 2022.'},
	        {type: 'text', content: '<a target="_blank" href="https://arxiv.org/pdf/2206.01694.pdf"><u>preprint</u></a>&nbsp;&nbsp;<a href="https://ui.adsabs.harvard.edu/abs/2022arXiv220601694A/exportcitation"><u>bib</u></a>'}
	]
};

var otherPublications = {
	title: 'Forthcoming Publications',
	body: [
	  { type: 'list', listType: 'ul', content: [opub2,opub1] }
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
var pcIntro = 'Programme Committee Member: UCC\'20, FACS\'19, SEFM\'18, SEFM\'16.';
var pc1 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '13th IEEE/ACM International Conference on Utility and Cloud Computing (UCC 2020)' 
		}
	]
};
var pc2 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '12th International Conference on Evolving Internet (INTERNET 2020)' 
		}
	]
};
var pc3 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '16th International Conference on Formal Aspects of Component Software (FACS 2019)' 
		}
	]
};
var pc4 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '16th International Conference on Software Engineering and Formal Methods (SEFM 2018)' 
		}
	]
};
var pc5 = {
	title: '',
	body: [
		{ 
		        type: 'text', content: '14th International Conference on Software Engineering and Formal Methods (SEFM 2016)' 
		}
	]
};

var revConf = 'Conference Reviewer: ICECCS\'19, CONCUR\'18, ICECCS\'18, ICECCS\'17, ICECCS\'16.'

var revJournIntro = 'Journal Reviewer: IEEE TSC, IEEE TPDS.';
var revJourn1 = {
	title: '',
	body: [{ type: 'text', content: 'IEEE Transactions on Services Computing' }]
};
var revJourn2 = {
	title: '',
	body: [{ type: 'text', content: 'Journal of Grid Computing' }]
};
var revJourn3 = {
	title: '',
	body: [{ type: 'text', content: 'IEEE Access' }]
};
var revJourn4 = {
	title: '',
	body: [{ type: 'text', content: 'Sensors Journal (Internet of Things Section)' }]
};
var revJourn5 = {
	title: '',
	body: [{ type: 'text', content: 'Electronics Journal (Artificial Intelligence Section)' }]
};
var revJourn6 = {
	title: '',
	body: [{ type: 'text', content: 'IEEE Transactions on Parallel and Distributed Systems' }]
};

var orgIntro = 'Co-Organiser: IEEE ACSOS\'22 (UK Edition).';

var reviews = {
	title: 'Professional Services',
	//icon: 'img/review-icon.png',
        body: [
                { type: 'text', content: revJournIntro },
    	        { type: 'text', content: pcIntro },  
	        { type: 'text', content: revConf },
	        { type: 'text', content: orgIntro }
	]
};
/**************************** END: REVIEW COMMITTEE ****************************/
