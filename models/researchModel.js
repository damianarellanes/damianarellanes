/**************************** RESEARCH INTERESTS ****************************/
var researchInterestsDesc = 'My work is in <b>Theoretical Computer Science</b>, a field that adheres to principles of mathematical rigour with the aim of laying the foundations of computer science. I am particularly interested in uncovering/extracting the theoretical foundations of <b>Algebraic Composition</b> for <b>Models of High-Level Computation</b>. For an accessible introduction to such models, see <a target="_blank" href="https://arxiv.org/pdf/2402.02602.pdf">this paper</a>.<br/><br/>As part of my scientific programme, I have previously discovered the notion of workflow spaces for algebraically constructing variable control-driven computations. With the foundations of cellular automata and category theory, I have <a target="_blank" href="papers/Composition_Machines.pdf">demonstrated</a> that complex spaces of sequential computations can emerge from simple rules in the form of abstract categories. More recently, I discovered a <a target="_blank" href="https://arxiv.org/pdf/2309.06397.pdf">category-theoretic model</a> for describing high-level control-driven computations (in a compositional setting) with well-defined algebraic operators built upon colimit semantics. This model has been <a target="_blank" href="https://arxiv.org/pdf/2506.22687">proved</a> to be more computationally powerful than Turing machines in the non-uniform setting.<br/><br/>My work on algebraic models has found applications in Software Engineering for supporting the compositional construction of complex software systems via algebraic operators. In this regard, I have demonstrated that these operators can enable the automatic synthesis, transformation and adaptation of software at the model-level, particularly in dynamic and distributed environments such as the Internet of Things.'//<br/><br/>By delving into the realm of Theoretical Computer Science, I aim to push the boundaries of our understanding of computation and lay the groundwork for future advancements in the field. Through my research, I hope to contribute to the ongoing quest for a deeper comprehension of the fundamental principles that underlie the world of computation. In this industry-dominated world, we should not forget that there is no practice without foundations. My work is not career-focused but scientific minded!';

var researchInterests = {
	title: 'Research Interests',
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
	    {type: 'text', content: 'Damian Arellanes. <a style="color:#000a56" target="_blank" href="papers/Composition_Machines.pdf">Composition Machines: Programming Self-Organising Software Models for the Emergence of Sequential Program Spaces</a>. In Proceedings of the 18th Symposium on Theoretical Aspects of Software Engineering (TASE), 2024.'}
	]
};
var opub2 = {
	title: '',
	body: [
		{type: 'text', content: 'Damian Arellanes. <a style="color:#000a56" target="_blank" href="https://arxiv.org/pdf/2206.01694.pdf">Towards an Algebra of Computon Spaces</a>, arXiv:2206.01694, 2022.'}
	]
};
var opub3 = {
	title: '',
	body: [
		{type: 'text', content: 'Damian Arellanes. <a style="color:#000a56" target="_blank" href="https://arxiv.org/pdf/2309.06397.pdf">Compositional Separation of Control Flow and Data Flow</a>, arXiv:2309.06397, 2023.'}
	]
};
var opub4 = {
	title: '',
	body: [
	    {type: 'text', content: 'Damian Arellanes. <a style="color:#000a56" target="_blank" href="https://arxiv.org/pdf/2402.02602.pdf">Models of High-Level Computation</a>. Frontiers in Computer Science, 2025.'}
	]
};
var opub5 = {
	title: '',
	body: [
	    {type: 'text', content: 'Damian Arellanes. <a style="color:#000a56" target="_blank" href="https://arxiv.org/pdf/2506.22687">Compositional Control-Driven Boolean Circuits</a>, arXiv:2506.22687, 2025.'}
	]
};

var otherPublications = {
	title: 'Forthcoming Publications',
	body: [
	    { type: 'list', listType: 'ul', content: [opub5,opub3,opub2] }
	]
};
var pubs = {
	title: 'Refereed Articles in Journals and in Conference Proceedings',
	body: [
	    { type: 'text', content: 'A list of my previous publications is available on <a href="https://scholar.google.com/citations?user=mYm6CDsAAAAJ&hl=en">Google Scholar</a> and <a href="https://dblp.org/pid/173/8097.html">DBLP</a>.' },
	    { type: 'list', listType: 'ul', content: [opub4,opub1] }
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

var revJournIntro = 'Journal Reviewer: IEEE TSC, IEEE TPDS, Logical and Algebraic Methods in Programming.';
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

var orgIntro = 'Co-Organiser: IEEE ACSOS-UK\'22.';

var reviews = {
	title: 'Professional Services',
        body: [
                { type: 'text', content: revJournIntro },
    	        { type: 'text', content: pcIntro },  
	        { type: 'text', content: revConf },
	        { type: 'text', content: orgIntro }
	]
};
/**************************** END: REVIEW COMMITTEE ****************************/
