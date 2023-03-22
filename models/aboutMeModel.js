// An element of a list
/*var varName = {
	title: 'Full-Stack Software Engineer (2015)',
	body: [
		{ type: 'link', ref: 'http://www.ibm.com', content: 'International Business Machines (IBM)' },
		{ type: 'bold', content: 'TEST1' },
		{ type: 'italic', content: 'TEST2' },
		{ type: 'text', content: 'A text...' }
	]
};*/

// A section declaration
/*var varName = {
	title: 'Section title',
	icon: 'a/path/icon.png',
	body: [
		{ type: 'text', content: textVariable },
		{ type: 'list', content: [elementVariable1, elementVariable2, ..., elementVariableN] }
	]
};*/ 

/**************************** RESUME ****************************/
var resumeDesc = 'I am a Lecturer (Assistant Professor) in Computer Science at <a href="https://www.lancaster.ac.uk/scc/">Lancaster University</a> (UK) and a member of the <a href="https://www.lancaster.ac.uk/lira/research/fundamentals/">Lancaster Centre for Intelligent, Robotic and Autonomous Systems (LIRA)</a>. Before joining Lancaster, I was a Research Associate in the Department of Computer Science from the University of Manchester, where I obtained a PhD in Computer Science in 2020.<br/><br/>I am currently accepting PhD proposals in the areas of: (i) Theory of Emergent/Self-Organising Computation, (ii) Program Synthesis and/or (iii) Foundational Semantics for Automatic Composition. If you are interested, please email me your CV, academic transcripts and a short research proposal (2-3 pages).<br/><p style="color:red">***We have PhD studentships available for UK/International students (covering fees and living expenses)***<p style="color:red">';

var resume = { 
	title: '',
	icon: '',
	body: [
		{ type: 'text', content:resumeDesc }
	]
};
/**************************** END: RESUME ****************************/


/**************************** TEACHING EXPERIENCE ****************************/
var teachingLancaster = 'As a Fellow of the Higher Education Academy (AFHEA), I am currently delivering the following computer science modules at <a href="https://www.lancaster.ac.uk/scc/">Lancaster University</a>:';
var teaching1 = {
	title: 'CNSCC212: Advanced Programming (BSc course)',
	body: [
		{ type: 'text', content: 'Summer Term' }
	]
};
var teaching2 = {
	title: 'CNSCC363: Security and Risk (BSc course)',
	body: [
		{ type: 'text', content: 'Summer Term' }
	]
};

var teaching = {
	title: 'Teaching',
	//icon: 'img/teaching-icon.png',
	body: [
                { type: 'text', content:teachingLancaster },
          { type: 'list', content: [teaching1, teaching2] }
	]
};
/**************************** END: TEACHING EXPERIENCE ****************************/


/**************************** INNOVATION SOFTWARE ****************************/
var innovationDesc = 'I have developed three pieces of innovation software whose Intelectual Property Rights have been transferred.';
var i1 = {
	title: 'PPROVigi Web',
	body: [
		{ type: 'text', content: 'Registration number: 03-2014-081312252200-01' },
         	{ type: 'text', content: 'Country: Mexico' }
	]
};
var i2 = {
	title: 'PPROVigi Android',
	body: [
		{ type: 'text', content: 'Registration number: 03-2014-081312295500-01' },
		{ type: 'text', content: 'Country: Mexico' }
	]
};  
var i3 = {
	title: 'PPROVigi iOS',
	body: [
		{ type: 'text', content: 'Registration number: 03-2014-081312320600-01' },
		{ type: 'text', content: 'Country: Mexico' }
	]
};

var innovationSoftware = {
	title: 'Patents and Copyrights',
	//icon: 'img/innovation-icon.png',
	body: [
		{ type: 'text', content: innovationDesc },
		{ type: 'list', content: [i1, i2, i3] }
	]
};
/**************************** END: INNOVATION SOFTWARE ****************************/

