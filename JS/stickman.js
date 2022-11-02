
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
document.addEventListener('scroll', (e) => {
	document.getElementById("arrow").style.display="none";
});
document.getElementById("ringTelephone").style.display="none";
function ringTelephone(e){
 	e.style.display="none";
    document.getElementById("ringTelephone").style.display="block";
    setTimeout(resetTelephone, 4900);
}
function resetTelephone(){
	document.getElementById("telephone").style.display="block";
    document.getElementById("ringTelephone").style.display="none";
}
