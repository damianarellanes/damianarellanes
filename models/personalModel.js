/**************************** INTRO ****************************/
var personalIntro = { 
	title: '',
	icon: '',
	body: [
		{
		type: 'text',
		content:
		'<i>"The true nature of things can be better studied from the eyes of a theoretician, not from a mechano-experimental viewpoint. Following the Hellenic ideology, "intuition over observation" is the key to formulate universal principles directly extracted from the world of ideas. As mathematics is just the language to describe what it is and what we observe, semantics has a permanent value in the development of abstract thinking." D. Arellanes (2020)</i>'  
		/*'<i>"The true nature of things can be better studied from the eyes of a theoretician, not from a mechano-experimental viewpoint. Following the Hellenic ideology, "intuition over observation" is the key to formulate universal principles directly extracted from the world of ideas. As mathematics is just the language to describe what it is and what we observe, semantics has a permanent value in the development of abstract thinking." D. Arellanes (2020)</i></br></br><i>"Although a philosophical fact is often considered a figment of imagination, it could actually be a node in a tree of infinite possibilities. The path to reach that node is full of probabilistic conditions that make it difficult to converge on that point. Science provides directions to find accurate solutions that allow a global visualisation of the critical path of possibilities to reach that point. Howbeit, the synergy between science and philosophy may potentially provide directions to find solutions that best describe the real essence of Nature\'s behaviour. Thus, believing in scientific truth does not deny that philosophy is a just possibility among an infinite set of possibilities (perhaps beyond transfinite cardinalities)." D. Arellanes (2012)</i></br></br><i>"The basis of existence and evolution of human beings lies in science; however, the fundamental reason for such an existence and evolution lies in the arts. Human beings need these factors to continue navigating through those infinite waters that get lost in its own immensity, while we try to find the right path that takes us to what we have craved, to that Truth that we do have craved." D. Arellanes (2013) </i>'*/
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
	//icon: 'img/music-icon.png',
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
	//icon: 'img/programming-icon.png',
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
	//icon: 'img/societies-icon.png',
	body: [
		{ type: 'list', content: [soc1, soc2] }
	]
};
/**************************** END: INTERNATIONAL SOCIETIES ****************************/
