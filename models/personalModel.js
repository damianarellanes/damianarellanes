/**************************** INTRO ****************************/
var personalIntro = { 
	title: '',
	icon: '',
	body: [
		{
		type: 'text',
		content:
		'<i>"The true nature of things can be better studied from the eyes of a theoretician, not from a mechano-experimental viewpoint. Following the Hellenic ideology, "intuition over observation" is the key to formulate universal principles directly extracted from the world of ideas. As mathematics is just the language to describe what it is and what we observe, semantics has a permanent value in the development of abstract thinking." D. Arellanes (2020)</i></br></br><i>"Although a philosophical fact is often considered a figment of imagination, it could actually be a node in a tree of infinite possibilities. The path to reach that node is full of probabilistic conditions that make it difficult to converge on that point. Science provides directions to find accurate solutions that allow a global visualisation of the critical path of possibilities to reach that point. Howbeit, the synergy between science and philosophy may potentially provide directions to find solutions that best describe the real essence of Nature\'s behaviour. Thus, believing in scientific truth does not deny that philosophy is a just possibility among an infinite set of possibilities (perhaps beyond transfinite cardinalities)." D. Arellanes (2012)</i></br></br><i>"The basis of existence and evolution of human beings lies in science; however, the fundamental reason for such an existence and evolution lies in the arts. Human beings need these factors to continue navigating through those infinite waters that get lost in its own immensity, while we try to find the right path that takes us to what we have craved, to that Truth that we do have craved." D. Arellanes (2013) </i>'
		}
	]
};
/**************************** END: INTRO ****************************/


/**************************** MUSIC ****************************/
var music1 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-6', classes: '', content: 
			'<p>My two major interests are Computer Science and Music. I have been involved in computing from a very early age, and today it represents a great passion in my life. While I was an undergrad, I was pursuing a degree in classical piano in parallel. From this experience, I realised that there is a close relationship between arts and science.</p>' 
		},
		{ size: 'sm-6', classes: '', content: '<img src="img/arts-science.jpg" width="100%" height="100%" />' }
	]
};
var music2 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-5', classes: '', content: '<img src="img/music-spheres7.gif" width="100%" height="100%" />' },
		{ size: 'sm-7', classes: '', content: 
			'<p>As we live in a multi-directional universe where options are infinite, I am not particularly eager to limit myself to specific contexts. In terms of music, I like to compose my own pieces (I compose for strings, percussion and piano) and I am so interested in the music of the spheres. In particular, in my last piano album, I introduced sounds captured by NASA’s Voyager 1 for the background of some pieces -- e.g., listen to <a href="https://www.youtube.com/watch?v=e2yklb69deg"> Euclidaeum Ténebris (Pt. 1)</a>. I will launch my first music album soon which will be called <i>Time and Eternity</i> (7 songs). Nowadays, I am composing the second album in which <a href="https://www.youtube.com/watch?v=e2yklb69deg">Euclidaeum Ténebris (Pt. 1)</a> and <a href="https://www.youtube.com/watch?v=CO8-UPc1XJU">Euclidaeum Ténebris (Pt. 2)</a> are the opening songs.</p>' 
		}
	]
};
var music3 = 
		'I used to play the keyboard/synthesiser in an experimental band, but I decided to leave it to dedicate more time to my own music and my science projects. I do really love works by Debussy, Bach and Rachmaninov, e.g., one of my favourite pieces is the concerto for Piano and Orchestra No.3 (also called Rach 3 ) by Rachmaninov. When I was studying classical piano, I enjoyed playing works by Mozart and Bach. In my last performance, I played the K.545 Sonata by Wolfgang Amadeus Mozart. But I definitely prefer to compose my own music :)';
var music4 = 
		'I have some experience in commercial software development. However, I feel more attracted to science due to its limitless nature. I believe creativity is much more important than logic, and that the only limit can be our imagination. Perhaps we are the whole Universe even though we think we are just a Universe\'s component. As I have a lot of ideas in my mind that I want to materialise, I am convinced that I will dedicate the rest of my life to my real passion: science.';

var music = {
	title: 'Music',
	icon: 'img/music-icon.png',
	body: [
		{ type: 'multi-column', content: [music1, music2] },
		{ type: 'text', content: music3 }
		//{ type: 'text', content: music4 }
	]
};
/**************************** END: MUSIC ****************************/


/**************************** CONTESTS ****************************/
var contestsIntro = 'I used to participate in programming competitions in the past.';
var contests1 = {
	title: 'Google Code Jam 2014',
	body: [
		{ type: 'bold', content: '3,600th place in an International scope (Knockout Finals)' },
		{ type: 'link', ref: 'http://www.go-hero.net/jam/14/name/damian.arellanes', content: 'See my ranking by clicking here!' }
	]
};
var contests2 = {
	title: 'Programming Online Judge (Teddy)',
	body: [
		{ type: 'bold', content: '23rd place, with an almost perfect ranking' },
		{ type: 'link', ref: 'https://www.teddyonlinejudge.net/runs.php?user=damian.arellanes', content: 'See my ranking by clicking here!' }
	]
};

var contests = {
	title: 'Programming Contests and Online Judges',
	icon: 'img/programming-icon.png',
	body: [
		{ type: 'text', content: contestsIntro },
		{ type: 'list', content: [contests1, contests2] }
	]
};
/**************************** END: CONTESTS ****************************/


/**************************** INTERNATIONAL SOCIETIES ****************************/
var soc1 = {
	title: '',
	body: [
		{ type: 'link', ref: 'https://www.mensa.org/', content: 'Mensa International' },
		{ type: 'text', content: 'Membership number: 71206' }
	]
};
var soc2 = {
	title: '',
	body: [
		{ type: 'link', ref: 'https://www.ieee.org/', content: 'Institute of Electrical and Electronics Engineers (IEEE)' },
		{ type: 'text', content: 'Membership number: 93830700' }
	]
};

var internationalSocieties = {
	title: 'International Societies',
	icon: 'img/societies-icon.png',
	body: [
		{ type: 'list', content: [soc1, soc2] }
	]
};
/**************************** END: INTERNATIONAL SOCIETIES ****************************/


/**************************** HOBBIES ****************************/
var hobbiesStatement = 
	'My hobbies include going out to the cinema, listening to music, hanging around with my friends, playing football (I used to train in a professional fashion when I was a child), writing (e.g., nowadays I am writing a science fiction novel), playing piano, composing music, reading books (my favourite writer is H. P. Lovecraft, I love his work because he combines science with horror), and programming. In a pragmatic perspective, I believe that the experience gained in real life is the best way to have a better performance in all spheres of life. Who knows?... the best ideas might emerge in social meetings. Friends are very important to me and I like to preserve them. I do really love enjoying each moment in my life because we cannot turn the time back. At least that is what we believe so far...';
var hobbiesQuote = '<i>"Carpe Diem"</i> :)';
var visitedPlaces =  '<img src="img/visited-countries.png" />';
	
var hobbies = {
	title: 'Hobbies',
	icon: 'img/hobbies-icon.png',
	body: [
		{ type: 'text', content: hobbiesStatement },
                { type: 'text', content: hobbiesQuote },
        	{ type: 'text', content: visitedPlaces }
	]
};
/**************************** END: HOBBIES ****************************/

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
	        { type: 'text', content: 'Thesis title:<i>"P2P network for detecting and acquiring illegal files"</i>' },
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
	title: 'Best MSc Thesis on Artificial Intelligence (2015)',
	body: [
		{ type: 'text', content: '<a href="http://www.smia.org.mx">Mexican Society for Artificial Intelligence (SMIA)</a>' },
		{ type: 'text', content: '<a href="http://www.micai.org/2015">Mexican International Conference on Artifical Intelligence \'15 (MICAI 2015)</a>' }
	]
};
var ha5 = {
	title: 'Knockout finals (top 14%) in the International Programming Contest Google Code Jam (2014)',
	body: [
		{ type: 'text', content: '<a href="https://www.go-hero.net/jam/14/name/damian.arellanes">Google Code Jam</a>' }
	]
};
var ha6 = {
	title: 'Best Paper Award at ICIOT (2018)',
        body: [
                { type: 'text', content: '<a href="http://www.servicessociety.org/en/">Services Society</a>' }, 
		{ type: 'text', content: '<a href="http://www.iciot.org/2018/news.html">2018 International Conference on Internet of Things (ICIOT 2018)</a>' }
	]
};
var ha7 = {
	title: 'Second Prize in The Next Big Thing competition (2019)',
        body: [
		{ type: 'text', content: '<a href="https://umip.com/the-next-big-thing-competition/">The Next Big Thing Competition 2018-2019</a>' }
	]
};
var ha8 = {
	title: 'Second Prize for Outstanding Doctoral Paper in Computer Science (2019)',
        body: [
                { type: 'text', content: '<a href="http://www.manchester.ac.uk/">The University of Manchester</a>' }
	]
};
var ha9 = {
	title: 'Nick Sanders Kickstarter Fund (2019)',
        body: [
                { type: 'text', content: '<a href="https://www.alliancembs.manchester.ac.uk/study/masood-enterprise-centre/">Masood Enterprise Centre, Alliance MBS</a>' }
	]
};

/**************************** END: HONORS AND AWARDS ****************************/

/**************************** SCHOLARSHIPS ****************************/
var sch1 = {
	title: 'CONACyT Scholarship for PhD Studies',
	body: [
		{ type: 'text', content: '<a href="http://www.conacyt.mx/">National Council on Science and Technology (CONACyT)</a>, 2015-2019' }//,
		//{ type: 'text', content: 'Financial support (tuition fees, health care, and living allowances) for PhD studies at the University of Manchester, United Kingdom.' }
	]
};
var sch2 = {
	title: 'Complementary Scholarship for PhD Studies',
	body: [
		{ type: 'text', content: '<a href="http://www.sep.gob.mx/swb/sep_en/">Mexican Secretariat of Public Education (SEP)</a>, 2017-2018' }//,
		//{ type: 'text', content: 'Additional financial support for studying a PhD abroad.' }
	]
};
var sch3 = {
	title: 'CONACyT Scholarship for MSc Studies',
	body: [
		{ type: 'text', content: '<a href="http://www.conacyt.mx/">National Council on Science and Technology (CONACyT)</a>, 2012-2014' }//,
		//{ type: 'text', content: 'Financial support for postgraduate students who study in a highly ranked research programme in Mexico.' }
	]
};
var sch4 = {
	title: 'PRONABES Scholarship',
	body: [
		{ type: 'text', content: '<a href="http://www.sep.gob.mx/swb/sep_en/">Mexican Secretariat of Public Education (SEP)</a>, 2009-2012' }//,
		//{ type: 'text', content: 'Financial support for undergraduate students with a high academic performance.' }
	]
};
var sch5 = {
	title: 'Complementary Scholarship for PhD Studies',
	body: [
		{ type: 'text', content: '<a href="http://www.sep.gob.mx/swb/sep_en/">Mexican Secretariat of Public Education (SEP)</a>, 2015-2016' }//,
		//{ type: 'text', content: 'Additional financial support for studying a PhD abroad.' }
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

var honorsAwards = {
	title: 'Awards',
	icon: 'img/award-icon.png',
	body: [
	  { type: 'list', content: [ha9, ha8, ha7, ha6, ha1, sch1, sch2, sch5, sch3, sch4] }
	]
};
