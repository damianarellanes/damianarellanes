/**************************** RESEARCH INTERESTS ****************************/
var researchInterestsDesc = 'I am interested in the areas of Autonomic Computing, Distributed Computing and Artificial Intelligence. In the last years, there has been an increasing interest in software systems that self-manage by adapting at runtime according to changes in the external (e.g., changes in the business requirements) and internal (e.g., a component failure) environment, without endangering or disrupting the proper operation of the system. My ongoing research is focused on the design of a software component model for the development of Decentralised Autonomic Software Systems (DASS).';

var researchInterests = {
	title: 'Research Interests',
	icon: 'img/research-icon.png',
	body: [
		{ type: 'text', content: researchInterestsDesc }
	]
};
/**************************** END: RESEARCH INTERESTS ****************************/

/**************************** RESEARCH PROJECTS ****************************/
var researchProjectsDesc = 'I am so interested in collaborations between the Academy and the Industry. The following lists the set of projects in which I am involved as part of my ongoing research.';
var rproject1_0 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-12', content: '<br/><br/><p><b><a href="http://www.mub.eps.manchester.ac.uk/xman/">X-MAN II Project</a></b></p>' }
	]
};
var rproject1_1 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-6', content: '<img src="img/projects/xman.png" width="100%" height="100%" />' },		
		{ size: 'sm-6', classes: '', content: 			
			'<p>X-MAN II toolset is developed using Eclipse model-driven engineering. Essentially, it is EMF framework instantiated with meta-models of X-MAN component model and its extensions. Included plugins provide complete semantics of the X-MAN component model and component-based software development paradigm.</p>' +
			'<p>X-MAN II tool development is supported by the <a href="http://www.artemis-emc2.eu/">European funded EMC2 project</a> and the <a href="http://www.manchester.ac.uk/study/postgraduate-research/why-manchester/doctoral-college/doctoral-training/">Centre for Doctoral Training (CDT) programme</a> at the University of Manchester.</p>'
	}
	]
};
var rproject2_0 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-12', content: '<br/><br/><p><b><a href="https://www.orange.com">Service-based Componentisation (Industrial collaboration)</a></b></p>' }
	]
};
var rproject2_1 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-6', content: '<img src="img/projects/orange-logo.png" width="35%" height="35%" />' },		
		{ size: 'sm-6', classes: '', content: 			
			'<br/><br/><p>This project is an industrial collaboration with <a href="https://www.orange.com">Orange Research Labs</a>. The aim is to investigate service-based componentization approaches for Software Defined Networks (SDN).</p>' }
	]
};
var rproject3_0 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-12', content: '<br/><br/><p><b><a href="">D-XMAN Project</a></b></p>' }
	]
};
var rproject3_1 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-6', content: '<img src="img/projects/D-XMAN.png" width="100%" height="100%" />' },		
		{ size: 'sm-6', classes: '', content: 			
			'<br/><br/><p>D-XMAN (Distributed X-MAN) is a software platform for hierarchical service composition. This platform offers separation of concerns between data, control and computation. It provides the complete semantics of the X-MAN component model and new semantics for supporting distribution.</p>' }
	]
};


var researchProjects = {
	title: 'Projects',
	icon: 'img/research-project-icon.png',
	body: [
		{ type: 'text', content: researchProjectsDesc },
	    { type: 'multi-column', content: [rproject3_0, rproject3_1, rproject2_0, rproject2_1, rproject1_0, rproject1_1] }
	]
};
/**************************** END: RESEARCH PROJECTS ****************************/


/**************************** PUBLICATIONS ****************************/
var pub1 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '[Arellanes et al., 2014] D. Arellanes, S. Mendoza, and D. Decouchant, <b>Support for resource aggregation in collaborative P2P systems</b>, In Proceedings of the 11th International Conference on Electrical Engineering, Computing Science and Automatic Control (CCE), IEEE Computer Society, pp. 1-6, September 29 - October 3, 2014.' 
		}
	]
};
var pub2 = {
	title: '',
	body: [
		{ 
			type: 'text', content: '[Arellanes, 2014] D. Arellanes, <b>RASupport: soporte flexible, bio-inspirado, auto-configurable y multi-agente para la agregación de recursos en sistemas P2P colaborativos</b>, Masters Thesis, Center for Research and Advanced Studies of the National Polytechnic Institute (CINVESTAV-IPN), Department of Computer Science, Winter 2014.' 
		}
	]
};

var publications = {
	title: 'Publications',
	icon: 'img/publications-icon.png',
	body: [
		{ type: 'list', listType: 'ul', content: [pub1, pub2] }
	]
};
/**************************** END: PUBLICATIONS ****************************/
