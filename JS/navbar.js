//on hover of home button alert

function ChangeNav(clicked){
        //1 top: 15%; left: 84%;
        //2 top: 45%; left: 92%;
        //3 top: 75%; left: 84%;

        //get window width and height
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        var homePos = parseInt($("#" + clicked + "").css("top"),10);
        var math = Math.round((homePos/windowHeight)*100);

        console.log("Math: " + math);

        if(math == 18){
            console.log("1");
            if(clicked == "home"){
                $("#home").animate({top: '45%', left:'92%'}, 400, "linear");
                $("#contactUsNav").animate({top: '75%', left:'84%'}, 400, "linear");
                $("#projects").animate({top: '90%', left:'60%'}, 200, "linear").animate({top: '5%', left:'78%'}, 0, "linear")
                .animate({top: '15%', left:'84%'}, 200, "linear");
                setTimeout(function(){
                    if("individualProj".length > 0){
                        window.location.assign("../Pages/home.html");
                    }else{
                        window.location.assign("../Pages/home.html");
                    }
                  }, 500);
            }
            else if(clicked == "contactUsNav"){
                $("#contactUsNav").animate({top: '45%', left:'92%'}, 400, "linear");
                $("#projects").animate({top: '75%', left:'84%'}, 400, "linear");
                $("#home").animate({top: '90%', left:'60%'}, 200, "linear").animate({top: '5%', left:'78%'}, 0, "linear")
                .animate({top: '15%', left:'84%'}, 200, "linear");
                setTimeout(function(){
                    if("individualProj".length > 0){
                        window.location.assign("../Pages/ContactUs.html");
                    }else{
                        window.location.assign("../Pages/ContactUs.html");
                    }
                  }, 500);
            }
            else if(clicked=="projects"){
                $("#projects").animate({top: '45%', left:'92%'}, 400, "linear");
                $("#home").animate({top: '75%', left:'84%'}, 400, "linear");
                $("#contactUsNav").animate({top: '90%', left:'60%'}, 200, "linear").animate({top: '5%', left:'78%'}, 0, "linear")
                .animate({top: '15%', left:'84%'}, 200, "linear");
                setTimeout(function(){
                    window.location.assign("Projects.html");
                  }, 500);
            }
        }
        else if(math == 90){
            console.log("2");
            if(clicked == "home"){
                $("#home").animate({top: '45%', left:'92%'}, 400, "linear");
                $("#projects").animate({top: '15%', left:'84%'}, 400, "linear");
                $("#contactUsNav").animate({top: '5%', left:'60%'}, 200, "linear").animate({top: '90%', left:'78%'}, 0, "linear")
                .animate({top: '75%', left:'84%'}, 200, "linear");
                setTimeout(function(){
                    if("individualProj".length > 0){
                        window.location.assign("../Pages/home.html");
                    }else{
                        window.location.assign("../Pages/home.html");
                    }
                    //window.location.assign("home.html");
                  }, 500);
            }else if(clicked == "contactUsNav"){
                $("#contactUsNav").animate({top: '45%', left:'92%'}, 400, "linear");
                $("#home").animate({top: '15%', left:'84%'}, 400, "linear");
                $("#projects").animate({top: '5%', left:'60%'}, 200, "linear").animate({top: '90%', left:'78%'}, 0, "linear")
                .animate({top: '75%', left:'84%'}, 200, "linear");
                setTimeout(function(){
                    if("individualProj".length > 0){
                        window.location.assign("../Pages/ContactUs.html");
                    }else{
                        window.location.assign("../Pages/ContactUs.html");
                    }
                  }, 500);
            }else if(clicked == "projects"){
                $("#projects").animate({top: '45%', left:'92%'}, 400, "linear");
                $("#contactUsNav").animate({top: '15%', left:'84%'}, 400, "linear");
                $("#home").animate({top: '5%', left:'60%'}, 200, "linear").animate({top: '90%', left:'78%'}, 0, "linear")
                .animate({top: '75%', left:'84%'}, 200, "linear");
                setTimeout(function(){
                    window.location.assign("Projects.html");
                  }, 500);
            }
            
        }else if(math == 54){
            if(clicked == "projects"){
                if("individualProj".length > 0){
                    window.location.assign("../Pages/Projects.html");
                }
            }
        }
}

$(document).ready(function(){
    //console.log("Testing 123!");
    //variables for the navbar
    homeWidth = $("#home").width();
    homeHeight = $("#home").height();

    contactUsNavWidth = $("#contactUsNav").width();
    contactUsNavHeight = $("#contactUsNav").height();

    projectsWidth = $("#projects").width();
    projectsHeight = $("#projects").height();
    
    //home
    $("#home").mouseover(function(){
        //console.log("hovered");
        $("#home").animate({width: '200px', height:'150px', 'line-height': "150px"},200, "linear")
        
    })
    $("#home").mouseout(function(){
        //console.log("unhovered");
        $("#home").animate({width: homeWidth, height: homeHeight, 'line-height': "95px"},200, "linear");
    });
    $("#home").click(function(){
        //alert("You clicked home!");
        //window.location.assign("index.html");
        ChangeNav("home");
    });

    //contactUsNav
    $("#contactUsNav").mouseover(function(){
        //console.log("hovered");
        $("#contactUsNav").animate({width: '200px', height:'150px', 'line-height': "150px"},200, "linear")
    });
    $("#contactUsNav").mouseout(function(){
        //console.log("unhovered");
        $("#contactUsNav").animate({width: contactUsNavWidth, height: contactUsNavHeight, 'line-height': "95px"},200, "linear");
    });
    $("#contactUsNav").click(function(){
        //alert("You clicked home!");
        //window.location.assign("index.html");
        ChangeNav("contactUsNav");
    });

    //projects
    $("#projects").mouseover(function(){
        //console.log("hovered");
        $("#projects").animate({width: '200px', height:'150px', 'line-height': "150px"},200, "linear")
    });
    $("#projects").mouseout(function(){
        //console.log("unhovered");
        $("#projects").animate({width: projectsWidth, height: projectsHeight, 'line-height': "95px"},200, "linear");
    });
    $("#projects").click(function(){
        //alert("You clicked home!");
        //window.location.assign("index.html");
        ChangeNav("projects");
    });


});

