//document.addEventListener("DOMContentLoaded", function() {


setTimeout(getHomePage, 7000);//starts counting from loaded
function getHomePage(){
  console.log("hi");
    document.getElementById("loading").style.display="none";
    window.location.href = "Pages/home.html";
}

document.getElementById("logoGif").style.display="none";
function backflip(e){
    e.style.display="none";
    document.getElementById("logoGif").style.display="block";
    setTimeout(resetLogo, 3400);
}

function resetLogo(){
    document.getElementById("logoPic").style.display="block";
    document.getElementById("logoGif").style.display="none";
}


// portraits
function highlightTertius(){
 
  document.getElementById("James").style.filter = "brightness(60%)";
  document.getElementById("Francois").style.filter = "brightness(60%)";
  document.getElementById("Jay").style.filter = "brightness(60%)";
 document.getElementById("Angela").style.filter = "brightness(60%)";
 document.getElementById("Tertius").style.filter = "brightness(100%)";

 document.getElementById("headingTeamMember").innerHTML = "Tertius";
  document.getElementById("paragraphTeamMember").innerHTML = "Tertius is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
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
  document.getElementById("paragraphTeamMember").innerHTML = "Jay is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";
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
  document.getElementById("paragraphTeamMember").innerHTML = "James is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ;alskjf;laskdjflaskjdlsakjfdkjkdjffffffffffffffffflskdjflaksjdflaksdjflaksdfasdfasdfasasdfakjsdfkahdfklajdfhlkajsdfh ajklsdfhlakd akljdhfalk sjdfha askjdfhklasjdfh ahklsjdfhlak haskdjfhaksjdfhakjd aksdjfhskj jdjdjd kajsdfhlakjsdfhklasjdfhal kajsdfhasdf";
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
  document.getElementById("paragraphTeamMember").innerHTML = "Francois is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ;alskjf;laskdjflaskjdlsakjfdkjkdjffffffffffffffffflskdjflaksjdflaksdjflaksdfasdfasdfasasdfakjsdfkahdfklajdfhlkajsdfh ajklsdfhlakd akljdhfalk sjdfha askjdfhklasjdfh ahklsjdfhlak haskdjfhaksjdfhakjd aksdjfhskj jdjdjd kajsdfhlakjsdfhklasjdfhal kajsdfhasdf";
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






