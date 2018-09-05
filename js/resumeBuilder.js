//Model
let db = {
  bio: {
    name : 'Freddy polanía',
    role : 'Visual designer and front-end web developer',
    contacts : [
      {
        mobile : '+58.414.134.91.30',
        email : 'fpolania@gmail.com',
        github : 'https://github.com/Flaex',
        location : 'Caracas'
      }
    ],
    welcomeMessage: 'Design and technology altogether',
    skills: ['Visual designer', 'UI design', 'Web design', 'Logo and branding', 'Typography'],
    biopic : 'me.jpg'
  },
  schools : [
    {
      name : 'Darias Design Institute',
      location : 'Caracas',
      degree : 'Graphic Designer, Visual Communication mention',
      majors : ['Editorial design', 'Typography'],
      dates : 'July 2006 - May 2013',
    }
  ],
  onlineCourses : [
    {
      title : 'Front-End Web Developer Nanodegree',
      school : 'Udacity',
      dates : 'October 2017 - present',
      url : 'https://www.udacity.com/'
    }
  ],
  jobs : [
    {
      employer: 'Novanet',
    	title: 'Director',
      location: 'Caracas',
    	dates: 'May 2010 - present',
      description: 'Visual designer, UI designer, web projects managment, corporate image and branding projects, typography projects.'
    },
    {
      employer: 'G2 ',
    	title: 'Graphic Designer',
      location: 'Caracas',
    	dates: 'Feb 2009 - June 2009',
      description: 'Print design, final artwork, BTL.'
    }
  ],
  works: [
    {
      title: "Banco del Libro",
      dates: "May 2014",
      description: "Selección Bienal Iberoamericana de Diseño 2014.",
      url : "http://galerias.bid-dimad.org/bid_14/?p=4191",
      images: [
        {
          src: "bdl-web1-200.jpg",
          href: "bdl-web1-900.jpg"
        },
        {
          src: "bdl-web3-200.jpg",
          href: "bdl-web3-900.jpg"
        },
        {
          src: "bdl-web4-200.jpg",
          href: "bdl-web4-900.jpg"
        }
      ]
    },
    {
      title: 'Novanet website',
      dates: 'May 2018',
      description: 'Responsive web design, html/css implementation.',
      images : [
        {
          src: 'nn-web1-200.jpg',
          href : 'nn-web1-900.jpg'
        },
        {
          src: 'nn-web2-200.jpg',
          href : 'nn-web2-900.jpg'
        },
        {
          src: 'nn-web3-200.jpg',
          href : 'nn-web3-900.jpg'
        }
      ]
    },
    {
      title: "Lobees",
      dates: "May 2018",
      description: "Vistas web para aplicación.",
      images: [
        {
          src: "lb-web1-200.jpg",
          href: "lb-web1-900.jpg"
        },
        {
          src: "lb-web2-200.jpg",
          href: "lb-web2-900.jpg"
        },
        {
          src: "lb-web3-200.jpg",
          href: "lb-web3-900.jpg"
        }
      ]
    },
    {
      title: "Caracas Design 2015",
      dates: "Nov 2015",
      description: "Sitio web en CMS.",
      images: [{
          src: "cd-web1-200.jpg",
          href: "cd-web1-900.jpg"
        },
        {
          src: "cd-web2-200.jpg",
          href: "cd-web2-900.jpg"
        },
        {
          src: "cd-web3-200.jpg",
          href: "cd-web3-900.jpg"
        }
      ]
    },
    {
      title: "Merlin Data Quality",
      dates: "May 2017",
      description: "Manual corporativo y papelería comercial.",
      images : [
         {
           src: "mdq-man1-200.jpg",
           href : "mdq-man1-900.jpg"
         },
         {
           src: "mdq-man2-200.jpg",
           href : "mdq-man2-900.jpg"
         },
         {
           src: "mdq-pap2-200.jpg",
           href : "mdq-pap2-900.jpg"
         }
       ]
    },
    {
      title: "Take on Bar",
      dates: "Ago 2015",
      description: "Papelería comercial, brochure y página web",
      images : [
         {
           src: "tob-pap1-200.jpg",
           href : "tob-pap1-900.jpg"
         },
         {
           src: "tob-web1-200.jpg",
           href : "tob-web1-900.jpg"
         },
         {
           src: "tob-sm-200.jpg",
           href : "tob-sm-900.jpg"
         }
       ]
    },
    {
      title: "Rhinovations",
      dates: "May 2018",
      description: "Logotipo y piezas impresas.",
      images : [
         {
           src: "rv-pap1-200.jpg",
           href : "rv-pap1-900.jpg"
         },
         {
           src: "rv-bra2-200.jpg",
           href : "rv-bra2-900.jpg"
         },
         {
           src: "rv-pap2-200.jpg",
           href : "rv-pap2-900.jpg"
         }
       ]
    },
    {
      title: "Zaituna Café",
      dates: "Dic 2017",
      text: "Identidad gráfica y branding.",
      images : [
         {
           src: "zc-man1-200.jpg",
           href : "zc-man1-900.jpg"
         },
         {
           src: "zc-man2-200.jpg",
           href : "zc-man2-900.jpg"
         },
         {
           src: "zc-man3-200.jpg",
           href : "zc-man3-900.jpg"
         }
       ]
    },
    {
      title: 'Novanet',
      dates: 'Dic 2017',
      description: 'Logo design.',
      images : [
        {
          src: 'nn-log-200.jpg',
          href : 'nn-log-900.jpg'
        }
      ]
    },
    {
      title: "Rhinovations",
      dates: "May 2018",
      description: "Logotipo para compañía de remodelación",
      images : [
         {
           src: "rv-logo-200.jpg",
           href : "rv-logo-900.jpg"
         }
       ]
    },
    {
      title: "Zaituna Café",
      dates: "Dic 2017",
      description: "Imagen gràfica para restaurant.",
      images : [
         {
           src: "zc-logo-200.jpg",
           href : "zc-logo-900.jpg"
         }
       ]
    },
    {
      title: "Take on Bar",
      dates: "May 2017",
      description: "Logotipo para barra móvil.",
      images : [
         {
           src: "tob-log-200.jpg",
           href : "tob-log-900.jpg"
         }
       ]
    },
  ]
};

//View
let HTMLheaderName = '<h1 class="blueThree">%data%</h1>';
let HTMLheaderRole = '<h2 class="blueTwo ">%data%</h2>';
let HTMLbioPic = '<div class="bioPic col-20"><img src="images/%data%"></div>';
let HTMLbioInfo = '<div class="bioText col-80">%data%</div>';
let HTMLbioContactsStart = '<ul id="topContacts"><h4>Contact me:</h4></ul>';

let HTMLmobile = '<li ><i class="fa fa-phone"></i>%data%</li>';
let HTMLemail = '<li ><i class="fa fa-envelope"></i>%data%</li>';
let HTMLgithub = '<li ><i class="fa fa-github"></i>%data%</li>';
let HTMLlocation = '<li ><i class="fa fa-map-marker"></i>%data%</li>';
let HTMLwelcomeMsg = '<h3 class="welcomemessage">%data%</h3>';

let HTMLskillsStart = '<ul id="skills"><h4>Skills at a Glance:</h4></ul>';
let HTMLskills = '<li><i class="fa fa-caret-right"></i>%data%</li>';

let HTMLworkStart = '<div class="work-entry"></div><br>';
let HTMLworkEmployer = '<h3>%data%';
let HTMLworkTitle = ' - %data%</h3>';
let HTMLworkDates = '<div class="date">%data%</div>';
let HTMLworkLocation = '<p class="location-text">%data%</p>';
let HTMLworkDescription = '<p>%data%</p>';

let HTMLprojectStart = '<div class="project-entry col-50"></div>';
let HTMLprojectTitle = '<h3>%data%</h3>';
let HTMLprojectDates = '<div class="date">%data%</div>';
let HTMLprojectDescription = '<p>%data%</p>';
let HTMLprojectImageContainer = '<div class="projectThumb col-25 %data%">';
let HTMLprojectImageHref = '<a >';
let HTMLprojectImageMask = '<img class="%data%"';
let HTMLprojectImage = ' src="images/%data%"></a></div>';
let HTMLprojectModal = '<div class="modalDialog"><div><a href="#close" title="Close" class="close"><strong>x</strong></a><img class="preview" src="images/%data%"></div></div>';

let HTMLschoolStart = '<div class="education-entry"></div><br>';
let HTMLschoolName = '<h3>%data%';
let HTMLschoolDegree = ' - %data%</h3>';
let HTMLschoolMajors = '<p class="majors">• %data% </p>';
let HTMLschoolDates = '<div class="date">%data%</div>';
let HTMLschoolLocation = '<div class="location-text">%data%</div>';

let HTMLonlineTitle = '<h3 href="#">%data%';
let HTMLonlineSchool = ' - %data%</h3>';
let HTMLonlineDates = '<div class="date">%data%</p>';
let HTMLonlineURL = '<a href="#">%data%</a>';

let internationalizeButton = '<button>Internationalize</button>';
let googleMap = '<div id="map"></div>';

let helpers = {
    shuffle: function (array) {
        let currentIndex = array.length,
          temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
    }
}
let sectionRender = {
  bio: function() {
      let formattedPic = HTMLbioPic.replace('%data%', db.bio.biopic);
      let formattedName = HTMLheaderName.replace('%data%', db.bio.name);
      let formattedRole = HTMLheaderRole.replace('%data%', db.bio.role);
      let formattedMessage = HTMLwelcomeMsg.replace('%data%', db.bio.welcomeMessage);
      let formattedBioText = formattedName + formattedRole + formattedMessage;
      let formattedBioData = HTMLbioInfo.replace('%data%',formattedBioText);
      $('.bio-info').prepend(formattedPic);
      $('.bio-info').append(formattedBioData);
      $('.bioText').append(HTMLskillsStart);
      for (i=0; i < db.bio.skills.length;i++) {
          let formattedItem = HTMLskills.replace('%data%', db.bio.skills[i]);
          $('#skills').append(formattedItem);
      }
      for (i=0; i < db.bio.contacts.length;i++) {
          $('.bioText').append(HTMLbioContactsStart);
          let formattedMobile = HTMLmobile.replace('%data%', db.bio.contacts[i].mobile);
          let formattedEmail = HTMLemail.replace('%data%', db.bio.contacts[i].email);
          let formattedGithub = HTMLgithub.replace('%data%', db.bio.contacts[i].github);
          let formattedLocation = HTMLlocation.replace('%data%', db.bio.contacts[i].location);
          let formattedItem = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
          $('#topContacts').append(formattedItem);
      }
  },
  education: function() {
      for (i=0; i < db.schools.length;i++) {
          $('#education').append(HTMLschoolStart);
          let formattedName = HTMLschoolName.replace('%data%', db.schools[i].name);
          let formattedLocation = HTMLschoolLocation.replace('%data%', db.schools[i].location);
          let formattedDegree = HTMLschoolDegree.replace('%data%', db.schools[i].degree);
          let formattedDates = HTMLschoolDates.replace('%data%', db.schools[i].dates);
          let formattedData = formattedName + formattedDegree;
          $('.education-entry').append(formattedData);
          let formattedDataTwo = formattedDates + formattedLocation;
          for (j=0; j < db.schools[i].majors.length;j++) {
            let formattedMajors = HTMLschoolMajors.replace('%data%', db.schools[i].majors[j]);
            $('.education-entry').append(formattedMajors);
          }
          $('.education-entry').append(formattedDataTwo);
      }

      for (i=0; i < db.onlineCourses.length;i++) {
          $('#education').append(HTMLschoolStart);
          let formattedTitle = HTMLonlineTitle.replace('%data%',  db.onlineCourses[i].title);
          let formattedLocation = HTMLonlineSchool.replace('%data%',  db.onlineCourses[i].school);
          let formattedDegree = HTMLonlineDates.replace('%data%',  db.onlineCourses[i].dates);
          let formattedURL = HTMLonlineURL.replace('%data%', db.onlineCourses[i].url);
          let formattedData = formattedTitle + formattedLocation + formattedDegree + formattedURL;
          $('.education-entry:last').append(formattedData);
      }
  },
  jobs: function() {
      for (i=0; i < db.jobs.length;i++) {
          $('#workExperience').append(HTMLworkStart);
          let formattedEmployer = HTMLworkEmployer.replace('%data%',  db.jobs[i].employer);
          let formattedTitle = HTMLworkTitle.replace('%data%',  db.jobs[i].title);
          let formattedDescription = HTMLworkDescription.replace('%data%', db.jobs[i].description);
          let formattedDates = HTMLworkDates.replace('%data%', db.jobs[i].dates);
          let formattedLocation = HTMLworkLocation.replace('%data%', db.jobs[i].location);
          let formattedData = formattedEmployer +formattedTitle + formattedDescription + formattedDates + formattedLocation;
          $('.work-entry:last').append(formattedData);
      }
  },
  projects: function() {
      for (i=0; i < db.works.length;i++) {
          $('#projects').append(HTMLprojectStart);
          let formattedTitle = HTMLprojectTitle.replace('%data%', db.works[i].title);
          let formattedDate = HTMLprojectDates.replace('%data%', db.works[i].dates);
          let formattedDescription = HTMLprojectDescription.replace('%data%', db.works[i].description);
          let formattedData = formattedTitle + formattedDescription + formattedDate;
          $('.project-entry:last').append(formattedData);
          for (j=0; j < db.works[i].images.length;j++) {
              let shapes = [
                  ["circleBg", "circle"],
                  ["squareBg", "square"],
                  ["triangleBg", "triangle"]
              ];
              let randomFigures = helpers.shuffle(shapes);
              let formattedItem = HTMLprojectImageContainer.replace('%data%', randomFigures[0][0] ) + HTMLprojectImageHref + HTMLprojectImageMask.replace('%data%', randomFigures[0][1]) + HTMLprojectImage.replace('%data%', db.works[i].images[j].src)
              + HTMLprojectModal.replace('%data%', db.works[i].images[j].href);
              $('.project-entry:last').append(formattedItem);
          }
          //Serial id's to a tag
          $.each($('.projectThumb a'), function(index, value){
              let num = index + 1;
              $(value).attr("href","#openModal"+ num);
          });
          //Serial id's to modal
          $.each($('.modalDialog'), function(index, value){
              let num = index + 1;
              $(value).attr("id","openModal"+ num);
          });
    }
  }
}

//Controller
let controller = {
    init: function() {
        // initialize views
        sectionRender.bio();
        sectionRender.education();
        sectionRender.jobs();
        sectionRender.projects();
    },
};
    //Event listener
    $('button').click(function() {
        var $name = $('#name');
        var iName = inName($name.text()) || function(){};
        $name.html(iName);
    })
    // Google maps
    function initMap() {
      var uluru = {lat: 10.500000, lng: -66.916664};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }
controller.init();
