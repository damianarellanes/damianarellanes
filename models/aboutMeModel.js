/**************************** RESUME ****************************/
var resumeDesc = 'I am a Research Associate at the Department of Computer Science, The University of Manchester, with a prime focus on software engineering models for tackling the scale and complexity of the Internet of Things (IoT). During my PhD studies, I developed an algebraic service composition model, DX-MAN, that enables a hierarchical bottom-up approach to incrementally compose services by exogenous composition operators. The model provides (i) explicit control flow; (ii) separation between, control, data, computation and autonomicity; (iii) decentralised data flows; (iv) distributed workflows; (v) location transparency; and (vi) workflow variability. Since 2017, I have produced 9 research papers derived from my model: 1 collaborative publication and 8 first-authored manuscripts, including a best paper award and a research medal. The papers were submitted to internationally reputable journals with a high impact factor and presented in top international conferences on (Autonomous) IoT. In addition to an early academic impact, DX-MAN derived a startup business proposal that won the Nick Sanders Fund and was the runner-up in the Next Big Thing competition. The model also served as the basis for four masters theses from which I was assistant supervisor.'; 
/*I am a PhD candidate in Computer Science at the <a href="http://www.cs.manchester.ac.uk/"> The University of Manchester</a>. My doctoral studies are focused on Service Models for Internet of Things systems. My research is supervised by <a href="http://www.cs.man.ac.uk/~kung-kiu/">Dr. Kung-Kiu Lau</a>. In 2012, I completed a Bachelor of Engineering in Computer Systems at the <a href="http://www.isc.escom.ipn.mx/"> National Polytechnic Institute (IPN)</a> which is considered one of the best universities for Computer Systems in Mexico. Then, pursued a Master of Science in Computer Science at the <a href="http://www.cinvestav.mx/">Center for Research and Advanced Studies from the National Polytechnic Institute (CINVESTAV-IPN)</a> in 2014, one of the most prestigious research centers in Latin America. My Masters thesis had special emphasis on Multi-agent Systems in the context of P2P Computing. This thesis won the second place in the Best Thesis Award in the Masters Thesis Category on Artificial Intelligence, which was awarded in the International Conference on Artifical Intelligence \'15 (MICAI 2015).';*/

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
		{ type: 'link', ref: 'http://www.cs.cinvestav.mx/en', content: 'Department of Computer Science' },
		{ type: 'text', content: '<a href="http://www.cinvestav.mx/">Center for Research and Advanced Studies of the National Polytechnic Institute (CINVESTAV-IPN)</a>, Mexico' }
	]
};
var ed3 = {
	title: 'BSc in Computer Science (2008-2012)',
	body: [
		{ type: 'text', content: 'Thesis title:<i>"P2P network for the detection and the adquisition of illegal files"</i>' },
		{ type: 'link', ref: 'http://www.isc.escom.ipn.mx/', content: 'Superior School of Computing of the National Polytechnic Institute (ESCOM-IPN)' },
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

/**************************** HONORS AND AWARDS ****************************/
var ha1 = {
	title: 'Best MSc Thesis on Artificial Intelligence (2015)',
	body: [
		{ type: 'text', content: '<a href="http://www.smia.org.mx">Mexican Society for Artificial Intelligence (SMIA)</a>, 2015' },
		{ type: 'text', content: '<a href="http://www.micai.org/2015">International Conference on Artifical Intelligence \'15 (MICAI 2015)</a>, Mexico' }	
	]
};
var ha2 = {
	title: 'MSc First-Class Honours (2014)',
	body: [
		{ type: 'text', content: '<a href="http://www.cinvestav.mx/">Center for Research and Advanced Studies of the National Polytechnic Institute (CINVESTAV-IPN)</a>' },
		{ type: 'text', content: '<a href="http://www.cs.cinvestav.mx/en">Department of Computer Science</a>, Mexico</div>' }
	]
};
var ha4 = {
	title: 'Accepted to study a Master of Science in Computer Science in a High Quality Graduate Program (2012)',
	body: [
		{ type: 'text', content: '<a href="http://www.cinvestav.mx/">Center for Research and Advanced Studies of the National Polytechnic Institute (CINVESTAV-IPN)</a>' },
		{ type: 'text', content: '<a href="http://www.cs.cinvestav.mx/en">Department of Computer Science</a>, Mexico</div>' }
	]
};
var ha5 = {
	title: 'Knockout finals (top 14%) in the International Programming Contest Google Code Jam (2014)',
	body: [
		{ type: 'text', content: 'Google Code Jam' }
	]
};
var ha6 = {
	title: 'Best Paper Award for the fisrt-authored paper "Algebraic Service Composition for User-Centric IoT Applications" (2018)',
        body: [
                { type: 'text', content: '<a href="http://www.servicessociety.org/en/">Services Society</a>' }, 
		{ type: 'text', content: '<a href="http://www.iciot.org/2018/news.html">2018 International Conference on Internet of Things (ICIOT)</a>' }
	]
};
var ha7 = {
	title: 'Runner-up in The Next Big Thing competition (2019)',
        body: [
                { type: 'text', content: '<a href="http://www.manchester.ac.uk/">The University of Manchester</a>' }, 
		{ type: 'text', content: '<a href="https://umip.com/the-next-big-thing-competition/">The Next Big Thing Competition 2018-2019</a>' }
	]
};
var ha8 = {
	title: 'Runner-up for the Carole Goble Medal for Outstanding Doctoral Paper in Computer Science (2019)',
        body: [
                { type: 'text', content: '<a href="http://www.manchester.ac.uk/">The University of Manchester</a>' }, 
		{ type: 'text', content: 'This prize was awarded for my outstanding doctoral paper entitled "Analysis and Classification of Service Interactions for the Scalability of the Internet of Things."' },
	]
};
var ha9 = {
	title: 'Nick Sanders Kickstarter Fund',
        body: [
                { type: 'text', content: '<a href="https://www.alliancembs.manchester.ac.uk/study/masood-enterprise-centre/">Masood Enterprise Centre, Alliance MBS</a>' }, 
		{ type: 'text', content: 'Fund competitively awarded to support student start-ups.' },
	]
};

var honorsAwards = {
	title: 'Honors and Awards',
	icon: 'img/award-icon.png',
	body: [
	  { type: 'list', content: [ha9, ha8, ha7, ha6, ha1, ha2, ha5, ha4] }
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
	title: 'Reinforcement Scholarship for PhD Studies',
	body: [
		{ type: 'text', content: '<a href="http://www.sep.gob.mx/swb/sep_en/">Mexican Secretariat of Public Education (SEP)</a>, 2015-2016 and 2017-2018' },
		{ type: 'text', content: 'Additional financial support for studying a PhD abroad.' }
	]
};
var sch3 = {
	title: 'CONACyT Scholarship for MSc Studies',
	body: [
		{ type: 'text', content: '<a href="http://www.conacyt.mx/">National Council on Science and Technology (CONACyT)</a>, 2012-2014' },
		{ type: 'text', content: 'Financial support for postgraduate students who are both studying in a high-ranked research programme in Mexico and having high academic performance.' }
	]
};
var sch4 = {
	title: 'PRONABES Scholarship',
	body: [
		{ type: 'text', content: '<a href="http://www.sep.gob.mx/swb/sep_en/">Mexican Secretariat of Public Education (SEP)</a>, 2009-2012' },
		{ type: 'text', content: 'Financial support for undergraduate students who have high academic performance.' }
	]
};

var scholarships = {
	title: 'Scholarships',
	icon: 'img/scholarships-icon.png',
	body: [
		{ type: 'list', content: [sch1, sch2, sch3, sch4] }
	]
};
/**************************** END: SCHOLARSHIPS ****************************/
