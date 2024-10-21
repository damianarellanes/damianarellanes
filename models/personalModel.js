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
var music1 = '<p>My major passions converge at the intersection of three profound domains related to the platonic world of ideas: Philosophy, Computation and Music. </p>' ;
var music2 = '<p>Although I only play piano and guitar, to date I have composed a number of musical pieces that encompass multiple instruments (from drums to ensemble of strings). My fascination with the ancient concept of "music of the spheres" has led me to incorporate celestial sounds into my work, e.g., in <a target="_blank" href="https://www.youtube.com/watch?v=e2yklb69deg"> Euclidaeum Ténebris (Pt. 1)</a>.</p>';
var music3 = 
    'In the past, I used to compose and play for a number of bands. My last band was <a target="_blank" href="https://naicametal.bandcamp.com/track/loud-sighs-2">NAICA</a>, an extreme metal band with influences bordering on djent, prog and shred.';

var music = {
	title: 'Music',
	//icon: 'img/music-icon.png',
	body: [
	    { type: 'text', content: music1 },
	    { type: 'text', content: music2 },
		{ type: 'text', content: music3 }
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
