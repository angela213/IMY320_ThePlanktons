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
        console.log("homePos: " + homePos + " windowHeight: " + windowHeight + " math: " + math);
        //console.log("Math: " + math);

        if(math == 18){
            console.log("1");
            if(clicked == "home"){
                $("#home").animate({top: '45%', left:'92%'}, 400, "linear");
                $("#contactUsNav").animate({top: '75%', left:'84%'}, 400, "linear");
                $("#projects").animate({top: '90%', left:'60%'}, 200, "linear").animate({top: '5%', left:'78%'}, 0, "linear")
                .animate({top: '15%', left:'84%'}, 200, "linear");
                setTimeout(function(){
                    window.location.assign("home.html");
                  }, 500);
            }
            else if(clicked == "contactUsNav"){
                $("#contactUsNav").animate({top: '45%', left:'92%'}, 400, "linear");
                $("#projects").animate({top: '75%', left:'84%'}, 400, "linear");
                $("#home").animate({top: '90%', left:'60%'}, 200, "linear").animate({top: '5%', left:'78%'}, 0, "linear")
                .animate({top: '15%', left:'84%'}, 200, "linear");
                setTimeout(function(){
                    if($("#individualProj").length > 0){
                        window.location.assign("../ContactUs.html");
                    }else{
                        window.location.assign("ContactUs.html");
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
                    if($("#individualProj").length > 0){
                        window.location.assign("../home.html");
                    }else{
                        window.location.assign("home.html");
                    }
                    //window.location.assign("home.html");
                  }, 500);
            }else if(clicked == "contactUsNav"){
                $("#contactUsNav").animate({top: '45%', left:'92%'}, 400, "linear");
                $("#home").animate({top: '15%', left:'84%'}, 400, "linear");
                $("#projects").animate({top: '5%', left:'60%'}, 200, "linear").animate({top: '90%', left:'78%'}, 0, "linear")
                .animate({top: '75%', left:'84%'}, 200, "linear");
                setTimeout(function(){
                    window.location.assign("ContactUs.html");
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
                console.log($("#individualProj").length);
                if($("#individualProj").length){
                    window.location.assign("../Projects.html");
                }else{
                    //window.location.assign("../Projects.html");
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
    
    homeIsAnim = false;
    contactUsNavIsAnim = false;
    projectsIsAnim = false;

    //home
    $("#home").mouseover(function(){
        //console.log("hovered");
        if(!homeIsAnim){
            homeIsAnim = true;
            $("#home").animate({width: '200px', height:'150px', 'line-height': "150px"},200, "linear");
        }
        
    })
    $("#home").mouseout(function(){
        //console.log("unhovered");
        $("#home").animate({width: homeWidth, height: homeHeight, 'line-height': "95px"},200, "linear");
        setTimeout(function(){
            homeIsAnim = false;
          }, 200);
        
    });
    $("#home").click(function(){
        //alert("You clicked home!");
        //window.location.assign("index.html");
        ChangeNav("home");
    });

    //contactUsNav
    $("#contactUsNav").mouseover(function(){
        //console.log("hovered");
        if(!contactUsNavIsAnim){
            contactUsNavIsAnim = true;
            $("#contactUsNav").animate({width: '200px', height:'150px', 'line-height': "150px"},200, "linear")
        }
    });
    $("#contactUsNav").mouseout(function(){
        //console.log("unhovered");
        $("#contactUsNav").animate({width: contactUsNavWidth, height: contactUsNavHeight, 'line-height': "95px"},200, "linear");
        setTimeout(function(){
            contactUsNavIsAnim = false;
          }, 200);
    });
    $("#contactUsNav").click(function(){
        //alert("You clicked home!");
        //window.location.assign("index.html");
        ChangeNav("contactUsNav");
    });

    //projects
    $("#projects").mouseover(function(){
        //console.log("hovered");
        if(!projectsIsAnim){
            projectsIsAnim = true;
            $("#projects").animate({width: '200px', height:'150px', 'line-height': "150px"},200, "linear")
        }
    });
    $("#projects").mouseout(function(){
        //console.log("unhovered");
        $("#projects").animate({width: projectsWidth, height: projectsHeight, 'line-height': "95px"},200, "linear");
        setTimeout(function(){
            projectsIsAnim = false;
          }, 200);
    });
    $("#projects").click(function(){
        //alert("You clicked home!");
        //window.location.assign("index.html");
        ChangeNav("projects");
    });


});

