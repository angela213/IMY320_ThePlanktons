document.getElementById("logoPic").style.display="none";
document.getElementById("logoGif").style.display="none";
setTimeout(getLogo, 4300);//starts counting from loaded

function getLogo(){//we nee to make this thing wait or make the loading generic enough that it doesn't have to
   document.getElementById("logoPic").style.display="block";
   document.getElementById("superman").style.display="none";
}

// portraits
function highlightTertius(){
 
  document.getElementById("James").style.filter = "brightness(60%)";
  document.getElementById("Francois").style.filter = "brightness(60%)";
  document.getElementById("Jay").style.filter = "brightness(60%)";
 document.getElementById("Angela").style.filter = "brightness(60%)";
 document.getElementById("Tertius").style.filter = "brightness(100%)";

 document.getElementById("headingTeamMember").innerHTML = "Tertius";
  document.getElementById("paragraphTeamMember").innerHTML = "Tertius is the best at what he does. He loves solving someone's coding issues and fixing it till perfection. He always focuses on the best solution for his projects and nothing will stop him from achieving that, unless Angela gives him a better one.";

  document.getElementById("Tertius").src="../Media/TertiusPicColour.png";
  //document.getElementById("Tertius").style.width="149px";

  document.getElementById("Francois").src="../Media/FrancoisPic.png";
  document.getElementById("Angela").src="../Media/AngelaPic.png";
  document.getElementById("Jay").src="../Media/JayPic.png";
  document.getElementById("James").src="../Media/JamesPic.png";
}

function highlightAngela(){
 
  document.getElementById("James").style.filter = "brightness(60%)";
  document.getElementById("Francois").style.filter = "brightness(60%)";
  document.getElementById("Jay").style.filter = "brightness(60%)";
 document.getElementById("Tertius").style.filter = "brightness(60%)";
 document.getElementById("Angela").style.filter = "brightness(100%)";

  document.getElementById("headingTeamMember").innerHTML = "Angela";
  document.getElementById("paragraphTeamMember").innerHTML = "Angela loves being part of this team as she can put all her ideas into many different types of projects. Cool functions and interactions are her go to for front end development. She is fun loving and excited to turn all your dreams into reality! P.S There are also women in StackMan!";

 document.getElementById("Angela").src="../Media/AngelaPicColour.png";

document.getElementById("Tertius").src="../Media/TertiusPic.png";
  document.getElementById("Francois").src="../Media/FrancoisPic.png";
  document.getElementById("Jay").src="../Media/JayPic.png";
  document.getElementById("James").src="../Media/JamesPic.png";
}

function highlightJay(){
 
  document.getElementById("James").style.filter = "brightness(60%)";
  document.getElementById("Francois").style.filter = "brightness(60%)";
  document.getElementById("Tertius").style.filter = "brightness(60%)";
 document.getElementById("Angela").style.filter = "brightness(60%)";
 document.getElementById("Jay").style.filter = "brightness(100%)";

 document.getElementById("headingTeamMember").innerHTML = "Jay";
  document.getElementById("paragraphTeamMember").innerHTML = "Jay is the computer scientist of our company. He secretly whishes he can design more things because his design is almost better than everyone's elses. He remains the head of our computer science department with a proud smile.";

  document.getElementById("Jay").src="../Media/JayPicColour.png";
  //document.getElementById("Jay").style.width="151px";

  document.getElementById("Tertius").src="../Media/TertiusPic.png";
  document.getElementById("Francois").src="../Media/FrancoisPic.png";
  document.getElementById("Angela").src="../Media/AngelaPic.png";
  document.getElementById("James").src="../Media/JamesPic.png";
}

function highlightJames(){
 
  document.getElementById("Jay").style.filter = "brightness(60%)";
  document.getElementById("Francois").style.filter = "brightness(60%)";
  document.getElementById("Tertius").style.filter = "brightness(60%)";
 document.getElementById("Angela").style.filter = "brightness(60%)";
 document.getElementById("James").style.filter = "brightness(100%)";

 document.getElementById("headingTeamMember").innerHTML = "James";

  document.getElementById("paragraphTeamMember").innerHTML = "James has a bit of a work addiction. He will not stop until the project is nothing short from perfect. He loves back end-development, always making everyone else feel a bit behind with their outdated software. Nobody is secretly as good as James in design, although he might try to make you think otherwise.";
  document.getElementById("James").src="../Media/JamesPicColour.png";
  //document.getElementById("James").style.width="148px";

  document.getElementById("Tertius").src="../Media/TertiusPic.png";
  document.getElementById("Francois").src="../Media/FrancoisPic.png";
  document.getElementById("Jay").src="../Media/JayPic.png";
  document.getElementById("Angela").src="../Media/AngelaPic.png";
}

function highlightFrancois(){
 console.log("hi hover works ");
  document.getElementById("James").style.filter = "brightness(60%)";
  document.getElementById("Tertius").style.filter = "brightness(60%)";
  document.getElementById("Jay").style.filter = "brightness(60%)";
  document.getElementById("Angela").style.filter = "brightness(60%)";
  document.getElementById("Francois").style.filter = "brightness(100%)";

  document.getElementById("headingTeamMember").innerHTML = "Francois";
  document.getElementById("paragraphTeamMember").innerHTML = "Francois is a web-development specialist. He loves javascript and all the other interesting web app languages. Francois sometimes has more in common with the computer than anyone else but just because he speaks the language so well.";
  document.getElementById("Francois").src="../Media/FrancoisPicColour.png";

  document.getElementById("Tertius").src="../Media/TertiusPic.png";
  document.getElementById("Angela").src="../Media/AngelaPic.png";
  document.getElementById("Jay").src="../Media/JayPic.png";
  document.getElementById("James").src="../Media/JamesPic.png";
}



  var light = document.getElementById("Light"),
  lightBox = light.getBoundingClientRect(),
  centerPoint = window.getComputedStyle(light).transformOrigin, //getting the transform origin of the light which we set in css
  centers = centerPoint.split(" "); //splitting into x and y

  function rotatelight(e) {
     var lightEvent = e;
     mouseX = e.clientX,
     mouseY = e.clientY;

   var centerY = lightBox.top + parseInt(centers[1]) - window.pageYOffset, //- window.pageYOffset,
   centerX = lightBox.left + parseInt(centers[0])- window.pageXOffset,// - window.pageXOffset,
   radians = Math.atan2(mouseX - centerX, (mouseY - centerY)),//(mouseX - centerX, mouseY - centerY),
   degrees = (radians * (180 / Math.PI) * -1) + 180; 
   degrees=degrees-215; //doesn't work
   //console.log(degrees);
   light.style.transform = 'rotate('+degrees+'deg)';

  }
const meetTeam=document.getElementById("meetTeam");
  meetTeam.addEventListener('mousemove', rotatelight);






