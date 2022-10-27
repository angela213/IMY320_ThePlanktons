setTimeout(getHomePage, 7500);//starts counting from loaded
function getHomePage(){//we nee to make this thing wait or make the loading generic enough that it doesn't have to
  console.log("hi");
    document.getElementById("loading").style.display="none";
    window.location.href = "Pages/home.html";
}