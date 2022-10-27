
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