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

/**************************** ACADEMIC AND PROFESSIONAL EXPERIENCE ****************************/
var lecturer = {
	title: 'Researcher and Lecturer (Assistant Professor) in Computer Science (2020-Present)',
	body: [
		{ type: 'text', content: 'Lancaster University' }
	]
};
var researchAssociate = {
	title: 'Research Associate (2019-2020)',
	body: [
		{ type: 'text', content: 'The University of Manchester' }
	]
};
var teachingAssistant = {
	title: 'Teaching Assistant (2015-2019)',
	body: [
		{ type: 'text', content: 'The University of Manchester' }
	]
};
var ibm = {
	title: 'Full-Stack Software Engineer (2015)',
	body: [
	  { type: 'text', content: 'International Business Machines (IBM)' }//,
		//{ type: 'text', content: 'Working in an international team made up of people from Brazil, Argentina, United States, and China. My activities were the following: unit, stress, and integration testing; Web development (back-end and front-end) using J2EE; software architecture; support to existent applications; design and development of tools for software developers by using generative programming techniques; process automation; bugs detection and fixing; code review and inspection; scripting; and data migration.' }
	]
}; 
var freelance = {
	title: 'Software Engineer Consultant and Project Manager (2011-2014)',
	body: [
		{ type: 'text', content: 'Freelance' }//,
		//{ type: 'text', content: 'I was involved in the design and development of Web applications using cutting-edge Web technologies (e.g., J2EEE, PHP, HTML5, AJAX, Jquery, Javascript, etc.) and frameworks (e.g., Hibernate, Struts 2, Doctrine, Zends, etc.); requirements engineering, project management using Extreme Programming (XP) and prototyping methodologies; and software innovation (I developed three innovation software with copyrights).' }
	]
};

var professionalExperience = {
	title: 'Academic and Industrial Experience',
	//icon: 'img/professional-icon.png',
	body: [
	  { type: 'list', content: [lecturer, researchAssociate, teachingAssistant, ibm, freelance] }
	]
};
/**************************** END: PROFESSIONAL EXPERIENCE ****************************/


/**************************** TEACHING EXPERIENCE ****************************/
var teachingLancaster = 'Currently, I am delivering the following modules in the <a href="http://www.lucbjtu.ac.uk/en/">School of Computing and Communications at Lancaster BJTU</a>:';
var teachingManchester = 
'Previously, I was a teaching assistant in the <a href="http://www.cs.manchester.ac.uk/">Department of Computer Science at The University of Manchester</a>, where I assisted the following courses:';
//var teachingDesc = 
//'Previously, I was a teaching assistant in the <a href="http://www.cs.manchester.ac.uk/">Department of Computer Science at The University of Manchester</a> where I have two main activities: (1) offering assistance to students to enable them to understand and complete their coursework and (2) marking exams and lab exercises of students according to a designated marking scheme. Particularly, I was a teaching assistant in the following courses:';
var teaching1 = {
	title: 'COMP28112: Distributed Computing (BSc course)',
	body: [
		{ type: 'text', content: 'Second Semester (2016, 2017, 2018 and 2019)' }
	]
};
var teaching2 = {
	title: 'COMP23420: Software Engineering (BSc course)',
	body: [
		{ type: 'text', content: 'First Semester (2017)' }
	]
};
var teaching3 = {
	title: 'COMP33711: Agile Software Engineering (BSc course)',
	body: [
		{ type: 'text', content: 'First Semester (2017)' }
	]
};
var teaching4 = {
	title: 'COMP10120: First Year Team Project (BSc course)',
	body: [
		{ type: 'text', content: 'First Semester (2017, 2018 and 2019)' }
	]
};
var teaching5 = {
	title: 'COMP18112: Fundamentals of Distributed Systems (BSc course)',
	body: [
		{ type: 'text', content: 'Second Semester (2017 and 2018)' }
	]
};
var teaching6 = {
	title: 'COMP62532: Component-Based Software Development (MSc course)',
	body: [
		{ type: 'text', content: 'Second Semester (2017, 2018 and 2019)' }
	]
};
var teaching7 = {
	title: 'COMP60411: Modelling Data on the Web (MSc course)',
	body: [
		{ type: 'text', content: 'First Semester (2019)' }
	]
};
var teaching8 = {
	title: 'CNSCC212: Advanced Programming (BSc course)',
	body: [
		{ type: 'text', content: 'Summer Term' }
	]
};
var teaching9 = {
	title: 'CNSCC202: Human-Computer Interaction (BSc course)',
	body: [
		{ type: 'text', content: 'Summer Term' }
	]
};
var teaching10 = {
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
          { type: 'list', content: [teaching8, teaching9, teaching10] },
	        { type: 'text', content:teachingManchester },
	        { type: 'list', content: [teaching6, teaching1, teaching5, teaching7, teaching4, teaching2, teaching3] }
	]
};
/**************************** END: TEACHING EXPERIENCE ****************************/


/**************************** INNOVATION SOFTWARE ****************************/
var innovationDesc = 'I have developed three pieces of innovation software whose Intelectual Property Rights have been transferred.';
var i1 = {
	title: 'PPROVigi Web',
	body: [
		{ type: 'text', content: 'Registration number: 03-2014-081312252200-01' },
         	{ type: 'text', content: 'Country: Mexico' }//,
                //{ type: 'link', ref: 'https://www.propharmaresearch.com/en/pprovigi', content: 'More Info' }
	]
};
var i2 = {
	title: 'PPROVigi Android',
	body: [
		{ type: 'text', content: 'Registration number: 03-2014-081312295500-01' },
		{ type: 'text', content: 'Country: Mexico' }//,
                //{ type: 'link', ref: 'https://www.propharmaresearch.com/en/pprovigi-report', content: 'More Info' }
	]
};  
var i3 = {
	title: 'PPROVigi iOS',
	body: [
		{ type: 'text', content: 'Registration number: 03-2014-081312320600-01' },
		{ type: 'text', content: 'Country: Mexico' }//,
                //{ type: 'link', ref: 'https://www.propharmaresearch.com/en/pprovigi-report', content: 'More Info' }
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


/**************************** ACADEMIC AND RESEARCH PROJECTS ****************************/
var p0 = {
	title: 'DXMan: a hierarchical component model for distributed software systems (2017)',
	body: [
		{ 
		type: 'text', 
		content: 'Proposal that includes the design and the implementation of a hierarchical component model for distributed software systems. This component model offers separation of concerns between data, control and computation since it is based on the X-Man component model.' 
		}
	]
};
var p1 = {
	title: 'RAToolkit: a flexible, configurable, and multi-agent toolkit for resource aggregation in collaborative P2P systems (2014)',
	body: [
		{ 
		type: 'text', 
		content: 'Proposal that includes the design and the implementation of a multi-agent based toolkit that allows resource aggregation in highly dynamic environments (i.e., where resources change rapidly) while maintaining cohesion between selection, matching and binding phases. It was developed as part of my Masters thesis and the publication is pending.' 
		}
	]
};
var p2 = {
	title: 'A novel algorithm for broadcasting search queries over P2P hybrid overlays (2014)',
	body: [
		{ 
		type: 'text', 
		content: 'Proposal that includes two algorithms (iRandomWalks and iFlooding) that allow queries broadcasting in unstructured P2P systems based on super-peers. Both algorithms increase the probability of success in query resolution, save bandwidth, and avoid redundancy since super-peers do not receive multiple copies of the same query. It was developed as part of my Masters thesis and the publication is pending.' 
		}
	]
};
var p3 = {
	title: 'A novel distributed algorithm for quorums obtaining (2013)',
	body: [
		{ 
		type: 'text', 
		content: 'A novel distributed algorithm for Quorums obtaining, which can be used to perform distributed mutual exclusion. This proposal is an optimization to the algorithm proposed by Agarwal-El Abaddi. The algorithm was implemented with C++ language, using CORBA as middleware. The publication is pending.' 
		}
	]
};
var p4 = {
	title: 'Autotest4C: a framework for automated random testing on programs written in C language (2013)',
	body: [
		{ 
		type: 'text', 
		content: 'Framework that allows automated random testing in C programs using design by contract. In order to validate the framework, the core was implemented with C and Java languages. The publication is pending.' 
		}
	]
};
var p5 = {
	title: 'Distributed system for the load, allocation and execution of rules and facts in CLIPS nodes (2013)',
	body: [
		{ 
		type: 'text', 
		content: 'Distributed system developed in Java language (JSE) using raw sockets. It has a server that loads, allocates (using less-used and round-robin policies) and executes rules and facts in nodes running CLIPS.' 
		}
	]
};
var p6 = {
	title: 'P2P file sharing system in a P2P ad-hoc network (2013)',
	body: [
		{ 
		type: 'text', 
		content: 'A decentralised P2P system for file sharing between mobile devices (Android Operating System) and desktop computers (Windows). It was developed in Java for Android and C#. This system automatically creates and uses an ad-hoc network in order to perform file sharing.' 
		}
	]
};
var p7 = {
	title: 'Distributed collaborative board with group conscience (2013)',
	body: [
		{ 
		type: 'text', 
		content: 'Distributed collaborative system (with group conscience mechanisms) developed in Java language (JSE) using the SDG (Single Display Groupware Toolkit) toolkit.' 
		}
	]
};
var p8 = {
	title: 'Distributed image viewer (2013)',
	body: [
		{ 
		type: 'text', 
		content: 'Distributed system developed in Objective-C language (using distributed objects) to view images in a 3x3 Videowall.' 
		}
	]
};
var p9 = {
	title: 'Parallel Merge Sort (2013)',
	body: [
		{ 
		type: 'text', 
		content: 'Parallel algorithm to sort numbers. It was implemented in C++ language using OpenMP and MPI. This algorithm is a modification of the one proposed in the following paper: [A. Radensky, 2011] A. Radensky, Shared Memory, Message Passing, and Hybrid Merge Sorts for Standalone and Clustered SMPs, In International Conference on Parallel and Distributed Processing Techniques and Applications, CSREA Press, pp. 367-373, 2011.' 
		}
	]
};
var p10 = {
	title: 'Conway\'s Game of Life (Multicore) (2012)',
	body: [
		{ 
		type: 'text', 
		content: 'Simulation of the cellular automaton (designed by John Horton Conway) implemented in C++ language using Intel’s TBB library to parallelize the algorithm and the Allegro library for graphics.' 
		}
	]
};
var p11 = {
	title: 'Distributed battleship (2012)',
	body: [
		{ 
		type: 'text', 
		content: 'Distributed videogame developed for Mac OS X and iOS, using the Objective-C language and distributed objects.' 
		}
	]
};
var p12 = {
	title: 'Lift Simulator using threads (2012)',
	body: [
		{ 
		type: 'text', 
		content: 'Implemented in C++ language using semaphores for process synchronization and the Allegro library for graphics.' 
		}
	]
};
var p13 = {
	title: 'News reader Web application for blind people (2011)',
	body: [
		{ 
		type: 'text', 
		content: 'It uses TTS (Text To Speech) to read news to blind people. It was developed using J2EE.' 
		}
	]
};
var p14 = {
	title: 'Web platform for E-learning (2011)',
	body: [
		{ 
		type: 'text', 
		content: 'It was developed using J2EE.' 
		}
	]
};
var p15 = {
	title: 'Web platform for the management of MySQL databases (2011)',
	body: [
		{ 
		type: 'text', 
		content: 'Web platform developed using J2EE. It was used to manage MySQL databases.' 
		}
	]
};
var p16 = {
	title: 'Chess with artificial intelligence using Minimax and Alpha-Beta algorithms (2011)',
	body: [
		{ 
		type: 'text', 
		content: 'It was implemented using the Java programming language (JSE), Swing for graphics and the minimax and alpha-beta algorithms.' 
		}
	]
};
var p17 = {
	title: 'Solution to 4x4 puzzles using artificial intelligence (2011)',
	body: [
		{ 
		type: 'text', 
		content: 'Implemented in C language using the breadth-first search (BFS) algorithm.' 
		}
	]
};
var p18 = {
	title: 'Pre-lexical analyzer (2011)',
	body: [
		{ 
		type: 'text', 
		content: 'Implemented in C language from scratch.' 
		}
	]
};
var p19 = {
	title: 'Simulation of a Robot to track edges using an artificial neural network (2011)',
	body: [
		{ 
		type: 'text', 
		content: 'Implemented in C language from scratch using an artificial neural network with back propagation.' 
		}
	]
};
var p20 = {
	title: 'Distributed simulation of the solution to the four spiders problem (2010)',
	body: [
		{ 
		type: 'text', 
		content: 'Implemented in C language using Allegro library for graphics.' 
		}
	]
};

var academicResearchProjects = {
	title: 'Main Academic and Research Projects',
	//icon: 'img/project-icon-2.png',
	body: [
	    { type: 'list', content: [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20] }
	]
};
/**************************** END: ACADEMIC AND RESEARCH PROJECTS ****************************/


/**************************** TECHNICAL SKILLS ****************************/
var r1 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-4', classes: 'title', content: 'Programming' },
		{ size: 'sm-8', classes: '', content: 
			'<p><b>Advanced: </b>C, PHP, Java, Erlang and JavaScript.</p>' +
			'<p><b>Intermediate: </b>C# (.NET MVC framework), C++, Objective-C, Scratch, Matlab, Assembler and Python.</p>' +
			'<p><b>Basic: </b>Go, Eiffel and Prolog.</p>'
		}
	]
};
var r2 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-4', classes: 'title', content: 'Markup Languages' },
		{ size: 'sm-8', classes: '', content: '<p>HTML, XHTML, XML, and LaTeX.</p>' }
	]
};
var r3 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-4', classes: 'title', content: 'Operating Systems' },
		{ size: 'sm-8', classes: '', content: '<p>Windows 9x/NT/2000/XP/Vista/7/8, Linux (Ubuntu, Fedora y Debian), Mac OS X, IBM AIX, Android, and iOS.</p>' }
	]
};
var r4 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-4', classes: 'title', content: 'Databases' },
		{ size: 'sm-8', classes: '', content: '<p>Blockchain, MySQL, Oracle, SQL Server, IBM DB2, and SQLite.</p>' }
	]
};
var r5 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-4', classes: 'title', content: 'Web Technologies' },
		{ size: 'sm-8', classes: '', content: '<p>CSS, Ajax, JQuery, JSON, Twig, Bootstrap, J2EE (JSP, JSF, JPA, EJB, Servlets, RMI, etc), Applets, and Web Services.</p>' }
	]
};
var r6 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-4', classes: 'title', content: 'Mobile Programming' },
		{ size: 'sm-8', classes: '', content: '<p>Java for Android (native API and NDK) and Objective-C for IOS.</p>' }
	]
};
var r7 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-4', classes: 'title', content: 'Frameworks' },
		{ size: 'sm-8', classes: '', content: '<p>Hyperledger Composer, Spring, Hibernate, Doctrine, AngularJS, Junit, Autotest for Eiffel, and Struts 2.</p>' }
	]
};
var r8 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-4', classes: 'title', content: 'Software Engineering' },
		{ size: 'sm-8', classes: '', content: 
			'<p>Design patterns, modeling with UML, Service-Oriented Architecture (SOA), processes and procedures mapping, design principles, design by contract, software craftsmanship philosophy, software development methodologies (e.g., waterfall, prototyping, incremental, spiral, and agile methodologies), Component-Based Software Development (CBSD), space-oriented programming, aspect-oriented programming, generative programming techniques, automated and random testing, etc.</p>' 
		}
	]
};
var r9 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-4', classes: 'title', content: 'Multicore and Parallel Libraries' },
		{ size: 'sm-8', classes: '', content: '<p>Intel TBB, OpenMP, MPI, and CUDA.</p>' }
	]
};
var r10 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-4', classes: 'title', content: 'Middlewares' },
		{ size: 'sm-8', classes: '', content: '<p>Java Virtual Machine (JVM) and Common Object Request Broker Architecture (CORBA).</p>' }
	]
};
var r11 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-4', classes: 'title', content: 'Applications' },
		{ size: 'sm-8', classes: '', content: 
			'<p>Hyperledger Fabric, Emacs, Netbeans IDE, Eclipse IDE, PHP Storm, MozartSpaces, Wx-DevC++, DevC++, Windows Azure, MySQL Server, phpMyAdmin, Visual Paradigm, Apache Tomcat, Dreamweaver, Wireshark, Joomla, MATLAB, Rational Software Architect, Eiffel Studio, Git, IBM WebSphere Application Server (WAS), IBM Rational Application Developer (RAD), Rational Team Concert (RTC), Oracle Weblogic Server, Oracle SQL Developer, GitHub, PeerSim, Xcode, Maven, Bower, etc.</p>' }
	]
};
var r12 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-4', classes: 'title', content: 'Semantic Web' },
		{ size: 'sm-8', classes: '', content: '<p>Ontologies using OWL.</p>' }
	]
};

var technicalSkills = {
	title: 'Technical Skills',
	//icon: 'img/skills-icon.png',
	body: [
		{ type: 'multi-column', content: [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12] }
	]
};
/**************************** END: TECHNICAL SKILLS ****************************/


/**************************** LANGUAGE SKILLS ****************************/
var ls1 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-4', classes: 'title', content: 'English' },
		{ size: 'sm-8', classes: '', content: '<p>Competent User - Advanced</p>' }
	]
};
var ls2 = {
	size: '', 
	classes: '',
	columns: [
		{ size: 'sm-4', classes: 'title', content: 'Spanish' },
		{ size: 'sm-8', classes: '', content: '<p>Native</p>' }
	]
};

var languageSkills = {
	title: 'Language Skills',
	//icon: 'img/language-icon.png',
	body: [
		{ type: 'multi-column', content: [ls1, ls2] }
	]
};
/**************************** END: LANGUAGE SKILLS ****************************/
