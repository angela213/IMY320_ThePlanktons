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

        if(math == 15){
            console.log("1");
            if(clicked == "home"){
                $("#home").animate({top: '45%', left:'92%'}, 400, "linear");
                $("#contactUsNav").animate({top: '75%', left:'84%'}, 400, "linear");
                $("#projects").animate({top: '90%', left:'60%'}, 200, "linear").animate({top: '5%', left:'78%'}, 0, "linear")
                .animate({top: '15%', left:'84%'}, 200, "linear");
                window.location.replace("home.html");
            }
            else if(clicked == "contactUsNav"){
                $("#contactUsNav").animate({top: '45%', left:'92%'}, 400, "linear");
                $("#projects").animate({top: '75%', left:'84%'}, 400, "linear");
                $("#home").animate({top: '90%', left:'60%'}, 200, "linear").animate({top: '5%', left:'78%'}, 0, "linear")
                .animate({top: '15%', left:'84%'}, 200, "linear");
                window.location.replace("ContactUs.html");
            }
            else if(clicked=="projects"){
                $("#projects").animate({top: '45%', left:'92%'}, 400, "linear");
                $("#home").animate({top: '75%', left:'84%'}, 400, "linear");
                $("#contactUsNav").animate({top: '90%', left:'60%'}, 200, "linear").animate({top: '5%', left:'78%'}, 0, "linear")
                .animate({top: '15%', left:'84%'}, 200, "linear");
                window.location.replace("Projects.html");
            }
        }
        else if(math == 75){
            console.log("2");
            if(clicked == "home"){
                $("#home").animate({top: '45%', left:'92%'}, 400, "linear");
                $("#projects").animate({top: '15%', left:'84%'}, 400, "linear");
                $("#contactUsNav").animate({top: '5%', left:'60%'}, 200, "linear").animate({top: '90%', left:'78%'}, 0, "linear")
                .animate({top: '75%', left:'84%'}, 200, "linear");
                window.location.replace("home.html");
            }else if(clicked == "contactUsNav"){
                $("#contactUsNav").animate({top: '45%', left:'92%'}, 400, "linear");
                $("#home").animate({top: '15%', left:'84%'}, 400, "linear");
                $("#projects").animate({top: '5%', left:'60%'}, 200, "linear").animate({top: '90%', left:'78%'}, 0, "linear")
                .animate({top: '75%', left:'84%'}, 200, "linear");
                window.location.replace("ContactUs.html");
            }else if(clicked == "projects"){
                $("#projects").animate({top: '45%', left:'92%'}, 400, "linear");
                $("#contactUsNav").animate({top: '15%', left:'84%'}, 400, "linear");
                $("#home").animate({top: '5%', left:'60%'}, 200, "linear").animate({top: '90%', left:'78%'}, 0, "linear")
                .animate({top: '75%', left:'84%'}, 200, "linear");
                window.location.replace("Projects.html");
            }
            
        }
}

$(document).ready(function(){
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
        //window.location.replace("index.html");
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
        //window.location.replace("index.html");
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
        //window.location.replace("index.html");
        ChangeNav("projects");
    });

});

