/**************************** RESUME ****************************/
var resumeDesc = 'I am a Lecturer (Assistant Professor) in Computer Science at Lancaster University, with a prime focus on software engineering models for the scale and the complexity of the Internet of Things (IoT). Currently, I am developing a novel IoT programming model for the compositional construction of service-oriented IoT systems by using algebraic composition operators. This model, known as DX-MAN, underlies the principles of a workflow variability theory which allows the autonomic evolution of software behaviour at run-time (under highly dynamic contexts). The current state of the model derived a startup business proposal that won the Nick Sanders Kickstarter Fund (Masood Enterprise Centre) and the second prize in the Next Big Thing competition (Manchester, UK). It also won the Best Paper Award at the International Conference on Internet of Things (ICIOT 2018) and was the runner-up for the Carole Goble Medal (The University of Manchester).'

var resume = { 
	title: '',
	icon: '',
	body: [
		{ type: 'text', content:resumeDesc }
	]
};
/**************************** END: RESUME ****************************/

/**************************** EDUCATION ****************************/
var ed1 = {
	title: 'PhD in Computer Science (2015-2019)',
	body: [

	        { type: 'text', content: 'Thesis title:<i>"An Algebraic Service Composition Model for the Construction of Large-Scale IoT Systems"</i>' },
	        { type: 'text', content: '<font color="red">Awarded as a Journal Format</font>' },
		{ type: 'link', ref: 'http://www.cs.manchester.ac.uk/', content: 'Department of Computer Science' },
		{ type: 'text', content: '<a href="http://www.manchester.ac.uk/">The University of Manchester</a>, United Kingdom' }
	]
};
var ed2 = {
	title: 'MSc in Computer Science (2012-2014)',
	body: [
		{ type: 'text', content: 'Thesis title:<i>"RASupport: flexible, bio-inspired, auto-configurable, and multi-agent support for resource aggregation in collaborative P2P systems"</i>' },
	        { type: 'text', content: '<font color="red">Best MSc Thesis in Artificial Intelligence</font>' },
                { type: 'text', content: '<font color="red">First Class Honours</font>' },
		{ type: 'link', ref: 'http://www.cs.cinvestav.mx/en', content: 'Department of Computer Science' },
		{ type: 'text', content: '<a href="http://www.cinvestav.mx/">Center for Research and Advanced Studies of the National Polytechnic Institute (CINVESTAV-IPN)</a>, Mexico' }
	]
};
var ed3 = {
	title: 'BEng in Computer Systems Engineering (2008-2012)',
	body: [
	        { type: 'text', content: 'Thesis title:<i>"P2P network for the detection and the adquisition of illegal files"</i>' },
         	{ type: 'text', content: '<font color="red">Upper Second-Class Honours</font>' },
		{ type: 'link', ref: 'http://www.isc.escom.ipn.mx/', content: 'School of Computing' },
		{ type: 'text', content: '<a href="http://www.ipn.mx/english/Paginas/Inicio.aspx">National Polytechnic Institute (IPN)</a>, Mexico' }
	]
}; 

var education = {
	title: 'Education',
	icon: 'img/education-icon.png',
	body: [
		{ type: 'list', content: [ed1, ed2, ed3] }
	]
};
/**************************** END: EDUCATION ****************************/

/**************************** AWARDS ****************************/
var ha1 = {
	title: 'Best MSc Thesis on Artificial Intelligence',
	body: [
		{ type: 'text', content: '<a href="http://www.smia.org.mx">Mexican Society for Artificial Intelligence (SMIA)</a>, 2015' },
		{ type: 'text', content: '<a href="http://www.micai.org/2015">International Conference on Artifical Intelligence \'15 (MICAI 2015)</a>, Mexico' }
	]
};
var ha5 = {
	title: 'Knockout finals (top 14%) in the International Programming Contest Google Code Jam 2014',
	body: [
		{ type: 'text', content: '<a href="https://www.go-hero.net/jam/14/name/damian.arellanes">Google Code Jam</a>' }
	]
};
var ha6 = {
	title: 'Best Paper Award at ICIOT 2018',
        body: [
                { type: 'text', content: '<a href="http://www.servicessociety.org/en/">Services Society</a>' }, 
		{ type: 'text', content: '<a href="http://www.iciot.org/2018/news.html">2018 International Conference on Internet of Things (ICIOT 2018)</a>' }
	]
};
var ha7 = {
	title: 'Second Prize in The Next Big Thing competition 2018-2019',
        body: [
		{ type: 'text', content: '<a href="https://umip.com/the-next-big-thing-competition/">The Next Big Thing Competition 2018-2019</a>' }
	]
};
var ha8 = {
	title: 'Runner-up for the Carole Goble Medal for Outstanding Doctoral Paper in Computer Science (2019)',
        body: [
                { type: 'text', content: '<a href="http://www.manchester.ac.uk/">The University of Manchester</a>' }
	]
};
var ha9 = {
	title: 'Nick Sanders Kickstarter Fund',
        body: [
                { type: 'text', content: '<a href="https://www.alliancembs.manchester.ac.uk/study/masood-enterprise-centre/">Masood Enterprise Centre, Alliance MBS</a>' }
	]
};

var honorsAwards = {
	title: 'Awards',
	icon: 'img/award-icon.png',
	body: [
	  { type: 'list', content: [ha9, ha8, ha7, ha6, ha1, ha5] }
	]
};
/**************************** END: HONORS AND AWARDS ****************************/

/**************************** SCHOLARSHIPS ****************************/
var sch1 = {
	title: 'CONACyT Scholarship for PhD Studies',
	body: [
		{ type: 'text', content: '<a href="http://www.conacyt.mx/">National Council on Science and Technology (CONACyT)</a>, 2015-2019' },
		{ type: 'text', content: 'Financial support (tuition fees, health care, and living allowances) for PhD studies at the University of Manchester, United Kingdom.' }
	]
};
var sch2 = {
	title: 'Complementary Scholarship for PhD Studies',
	body: [
		{ type: 'text', content: '<a href="http://www.sep.gob.mx/swb/sep_en/">Mexican Secretariat of Public Education (SEP)</a>, 2015-2016 and 2017-2018' },
		{ type: 'text', content: 'Additional financial support for studying a PhD abroad.' }
	]
};
var sch3 = {
	title: 'CONACyT Scholarship for MSc Studies',
	body: [
		{ type: 'text', content: '<a href="http://www.conacyt.mx/">National Council on Science and Technology (CONACyT)</a>, 2012-2014' },
		{ type: 'text', content: 'Financial support for postgraduate students who study in a highly ranked research programme in Mexico.' }
	]
};
var sch4 = {
	title: 'PRONABES Scholarship',
	body: [
		{ type: 'text', content: '<a href="http://www.sep.gob.mx/swb/sep_en/">Mexican Secretariat of Public Education (SEP)</a>, 2009-2012' },
		{ type: 'text', content: 'Financial support for undergraduate students with a high academic performance.' }
	]
};

var scholarships = {
	title: 'Grants (~£106,818)',
	icon: 'img/scholarships-icon.png',
	body: [
		{ type: 'list', content: [sch1, sch2, sch3, sch4] }
	]
};
/**************************** END: SCHOLARSHIPS ****************************/
