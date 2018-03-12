// $('#mapDiv').prepend(googleMap);

// function test(link) {
//   $('.projectThumb').on( 'click', 'a', function(e) {
//     $('.projectThumb a').attr('href', link);
//   })
// };


function shuffle(array) {
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
};

//Bio data
let bio = {
  "name" : "Freddy Polanía",
  "role" : "Visual designer and front-end web developer",
  "welcomeMessage": "Design and technology altogether",
  "contacts" : [
    {
      "mobile" : "+58.414.134.91.30",
      "email" : "fpolania@gmail.com",
      "github" : "https://github.com/Flaex",
      "location" : "Caracas"
    }
  ],
  "skills": ["Visual designer", "UI design", "Web design", "Logo and branding", "Typography"],
  "image" : "me.jpg"
};
//Display function
bio.display = function() {
  let formattedPic = HTMLbioPic.replace('%data%', bio.image);
  let formattedName = HTMLheaderName.replace('%data%', bio.name);
  let formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  let formattedMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  let formattedBioText = formattedName + formattedRole + formattedMessage;
  let formattedBioData = HTMLbioInfo.replace('%data%',formattedBioText);
  $('.bio-info').prepend(formattedPic);
  $('.bio-info').append(formattedBioData)
  $('.bioText').append(HTMLskillsStart);
  for (i=0; i < bio.skills.length;i++) {
    let formattedItem = HTMLskills.replace('%data%', bio.skills[i]);
    $('#skills').append(formattedItem);
  };
  for (i=0; i < bio.contacts.length;i++) {
    $('.bioText').append(HTMLbioContactsStart);
    let formattedMobile = HTMLmobile.replace('%data%', bio.contacts[i].mobile);
    let formattedEmail = HTMLemail.replace('%data%', bio.contacts[i].email);
    let formattedGithub = HTMLgithub.replace('%data%', bio.contacts[i].github);
    let formattedLocation = HTMLlocation.replace('%data%', bio.contacts[i].location);
    let formattedItem = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
    $('#topContacts').prepend(formattedItem);
  };
};
$('#bio').prepend(bio.display());

// Education data
let education = {
  "schools" : [
    {
      "name" : "Darias Design Institute",
      "location" : "Caracas",
      "degree" : "Graphic Designer, Visual Communication mention",
      "dates" : "July 2006 - May 2013"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-End Web Developer Nanodegree",
      "school" : "Udacity",
      "dates" : "October 2017 - present",
      "url" : "https://www.udacity.com/"
    }
  ]
};
// Display function
education.display = function() {
  for (i=0; i < education.schools.length;i++) {
    $('#education').append(HTMLschoolStart);
    let formattedName = HTMLschoolName.replace('%data%', education.schools[i].name);
    let formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
    let formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
    let formattedDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
    let formattedData = formattedName + formattedDegree;
    $('.education-entry').append(formattedData);
    let formattedDataTwo = formattedDates + formattedLocation;
    $('.education-entry').append(formattedDataTwo);
  };

  for (i=0; i < education.onlineCourses.length;i++) {
    $('#education').append(HTMLschoolStart);
    let formattedTitle = HTMLonlineTitle.replace('%data%',  education.onlineCourses[i].title);
    let formattedLocation = HTMLonlineSchool.replace('%data%',  education.onlineCourses[i].school);
    let formattedDegree = HTMLonlineDates.replace('%data%',  education.onlineCourses[i].dates);
    let formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);
    let formattedData = formattedTitle + formattedLocation + formattedDegree + formattedURL;
    $('.education-entry:last').append(formattedData);
  }
};
$('#education').append(education.display());


let work = {
  "jobs": [
    {
      "employer": "Novanet",
    	"title": "Director",
    	"dates": "May 2010 - present",
      "location": "Caracas",
      "description": "Visual designer, UI designer, web projects managment, corporate image and branding projects, typography projects."
    },
    {
      "employer": "G2 ",
    	"title": "Graphic Designer",
    	"dates": "Feb 2009 - June 2009",
      "location": "Caracas",
      "description": "Print design, final artwork, BTL."
    }
  ]
};
work.display = function() {
  for (i=0; i < work.jobs.length;i++) {
    $('#workExperience').append(HTMLworkStart);
    let formattedEmployer = HTMLworkEmployer.replace('%data%',  work.jobs[i].employer);
    let formattedTitle = HTMLworkTitle.replace('%data%',  work.jobs[i].title);
    let formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
    let formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
    let formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
    let formattedData = formattedEmployer +formattedTitle + formattedDescription + formattedDates + formattedLocation;
    $('.work-entry:last').append(formattedData);
  }
};
$('#workExperience').append(work.display());

let projects = {
  "works": [
    {
      "title": "Banco del Libro website",
      "date": "May 2013",
      "description": "Web design, html/css implementation.",
      "url" : "http://galerias.bid-dimad.org/bid_14/?p=4191",
      "images" : [
        {
          "src": "bdl-web1-200.jpg",
          "href" : "bdl-web1-900.jpg"
        },
        {
          "src": "bdl-web2-200.jpg",
          "href" : "bdl-web2-900.jpg"
        }
      ]
    },
    {
      "title": "Novanet website",
      "date": "Jun 2015",
      "description": "Responsive web design, html/css implementation.",
      "images" : [
        {
          "src": "nn-web1-200.jpg",
          "href" : "nn-web1-900.jpg"
        },
        {
          "src": "nn-web2-200.jpg",
          "href" : "nn-web2-900.jpg"
        },
        {
          "src": "nn-web3-200.jpg",
          "href" : "nn-web3-900.jpg"
        }
      ]
    },
    {
      "title": "Merlin Data Quality",
      "date": "Ago 2017",
      "description": "Corporate manual and commercial stationery design.",
      "images" : [
        {
          "src": "mdq-man1-200.jpg",
          "href" : "mdq-man11-900.jpg"
        },
        {
          "src": "mdq-man3-200.jpg",
          "href" : "mdq-man3-900.jpg"
        }
      ]
    },
    {
      "title": "Take on Bar",
      "date": "May 2016",
      "description": "Logo design, commercial stationery, brochure, web page.",
      "images" : [
        {
          "src": "tob-pap1-200.jpg",
          "href" : "tob-pap1-900.jpg"
        },
        {
          "src": "tob-pap2-200.jpg",
          "href" : "tob-pap2-900.jpg"
        }
      ]
    },
    {
      "title": "Novanet",
      "date": "Dic 2017",
      "description": "Logo design.",
      "images" : [
        {
          "src": "nn-log-200.jpg",
          "href" : "nn-log-900.jpg"
        }
      ]
    },
    {
      "title": "Escuela de natación Rivas",
      "date": "Oct 2017",
      "description": "Logo design, commercial stationery, brochure, web page.",
      "images" : ["edr-log-200.jpg"],
      "images" : [
        {
          "src": "edr-log-200.jpg",
          "href" : "edr-log-900.jpg"
        }
      ]
    }
  ]
};
projects.display = function() {

    for (i=0; i < projects.works.length;i++) {
    $('#projects').append(HTMLprojectStart);
    let formattedTitle = HTMLprojectTitle.replace('%data%', projects.works[i].title);
    let formattedDate = HTMLprojectDates.replace('%data%', projects.works[i].date);
    let formattedDescription = HTMLprojectDescription.replace('%data%', projects.works[i].description);
    let formattedData = formattedTitle + formattedDescription + formattedDate;
    $('.project-entry:last').append(formattedData);
    for (j=0; j < projects.works[i].images.length;j++) {



      let shapes = [
        ["circleBg", "circle"],
        ["squareBg", "square"],
        ["triangleBg", "triangle"]
      ];
      let randomFigures = shuffle(shapes);
      // let href = 'images/' + projects.works[i].images[j].href;
      // let test2 = test(href);
      let formattedItem = HTMLprojectImageContainer.replace('%data%', randomFigures[0][0] ) +
      HTMLprojectImageHref.replace('%data%', projects.works[i].images[j].href)   +
      HTMLprojectImageMask.replace('%data%', randomFigures[0][1]) + HTMLprojectImage.replace('%data%', projects.works[i].images[j].src);

      $('.project-entry:last').append(formattedItem);


    };
  };
}
$('#projects').append(projects.display());
