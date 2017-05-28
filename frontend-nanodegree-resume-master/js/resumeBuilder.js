/*
This is empty on purpose! Your code to build the resume will go here.
*/

var bio = {
  name: "Baby Pterodactyl",
  role: "Front End Developer",
  contactInfo: "sasha@babypterodactyl.com",
  picture: "https://cdn.pterodactyl.io/site-assets/logo-icon.png",
  welcomeMessage: "Hello, welcome to my page.",
  skills: ["HTML", "CSS", "JavaScript"]
};

var formattedHTMLbioPic = HTMLbioPic.replace("%data%",bio.picture);
$("#header").prepend(formattedHTMLbioPic);

var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedHTMLheaderName);

var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedHTMLheaderRole);

var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedHTMLwelcomeMsg);

var formattedHTMLcontactGeneric = HTMLcontactGeneric.replace("%contact%", "Contact Me").replace("%data%",bio.contactInfo);
$("#lets-connect").append(formattedHTMLcontactGeneric);

$("#workExperience").append(HTMLskillsStart);

var formattedHTMLskillsStart = HTMLskillsStart.replace("%data%",HTMLskills);
$("#workExperience").append(formattedHTMLskillsStart);

var formattedHTMLskills = HTMLskills.replace("%data%",bio.skills[0]);
$("#skills").append(formattedHTMLskills);
