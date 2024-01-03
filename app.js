// ELEMENTS

const body = document.querySelector("body");
const header = document.createElement("header");
const conatiner = document.createElement("div");

const leftSide = document.createElement("div");
const rightSide = document.createElement("div");
const siteLogo = document.createElement("h3");

const navTabs = document.createElement("ul");
const home = document.createElement("li");
const resume = document.createElement("li");
const projets = document.createElement("li");
const contact = document.createElement("li");

const section = document.createElement("section");
const conatiner1 = document.createElement("div");
const contLeftSide = document.createElement("div");
const contTextSpan = document.createElement("span");
const contTextH3 = document.createElement("h3");
const contTextH1 = document.createElement("h1");
const resumeButton = document.createElement("button");
const projectButton = document.createElement("button");

const contRightSide = document.createElement("div");
const contRightSideImg = document.createElement("div");
const img = document.createElement("img");

const section2 = document.createElement("section");
const aboutH1 = document.createElement("h1");
const aboutSpan = document.createElement("span");
const aboutP = document.createElement("p");
const icons = document.createElement("div");

const footer = document.createElement("footer");
const footerLeft = document.createElement("div");
const footerRight = document.createElement("div");
const conatiner2 = document.createElement("div");
const footerSpan = document.createElement("span");




// CLASS NAMES

navTabs.className = "navTabs";
leftSide.className = "leftSide";
rightSide.className = "rightSide";
conatiner.className = "conatiner";

section.className = "welcome";
conatiner1.className = "conatiner1";
contLeftSide.className = "contLeftSide";
resumeButton.className = "resumeButton";
projectButton.className = "projectButton";

contRightSide.className = "contRightSide";
contRightSideImg.className = "contRightSideImg";

section2.className = "about";
conatiner2.className = "conatiner2"
//INNERS

siteLogo.innerText = "Start Bootstrap";

home.innerText = "Home";
resume.innerText = "Resume";
projets.innerText = "Projets";
contact.innerText = "Contact";

img.src = "profile.png";

contTextSpan.innerText = "DESIGN · DEVELOPMENT · MARKETING";
contTextH3.innerText = "I can help your business to";
contTextH1.innerText = "Get online and grow fast";
resumeButton.innerText = "Resume";
projectButton.innerText = "Project";

aboutH1.innerText = "About Me";
aboutSpan.innerText = "My name is Start Bootstrap and I help brands grow.";
icons.innerHTML = `

<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-linkedin"></i>
<i class="fa-brands fa-github"></i>

`;
aboutP.innerText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?";

  footerSpan.innerText = "Copyright © Your Website 2023"
  footerRight.innerHTML = `
  <a href="">Privacy</a>
  <a href="">Terms</a>
  <a href="">Contact</a>
  `
  //APPENDS

body.append(header, section, section2,footer);
header.append(conatiner);
conatiner.append(leftSide, rightSide);
leftSide.append(siteLogo);
navTabs.append(home, resume, projets, contact);
rightSide.append(navTabs);

section.append(conatiner1);
conatiner1.append(contLeftSide, contRightSide);

contLeftSide.append(
  contTextSpan,
  contTextH3,
  contTextH1,
  resumeButton,
  projectButton
);
contRightSide.append(contRightSideImg);
contRightSideImg.append(img);

section2.append(aboutH1, aboutSpan, aboutP, icons);
footer.append(conatiner2);
conatiner2.append(footerLeft,footerRight)
footerLeft.append(footerSpan)
footerRight

