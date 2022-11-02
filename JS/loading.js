setTimeout(getSplashPage, 7500);//starts counting from loaded
function getSplashPage(){//we nee to make this thing wait or make the loading generic enough that it doesn't have to
  console.log("hi");
    document.getElementById("loading").style.display="none";
    window.location.href = "Pages/SplashV3.html";
}