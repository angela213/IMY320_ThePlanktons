var clickAllowed = true;
var preferredTop = 20;
var preferredLeft = 20;
var cip;
function sleep(ms) {
  	return new Promise(resolve => setTimeout(resolve, ms));
}

async function fadeIn(){
	await sleep(3000);
	document.body.style.overflow = "inherit";
	document.body.firstElementChild.remove();
  	const projectPic = document.getElementsByClassName("projectLink")[0];

  	const div = document.createElement("div");
  	div.classList.add("video");
  	const video = document.createElement("video");
  	video.classList.add("thevideo");
  	video.loop = true;
  	video.muted = true;
  	video.preload = "auto";
  	const source = document.createElement("source");
  	var pNum = parseInt(projectPic.id.replace("Project_", ""));
  	switch(pNum){
  		case 1:
  			source.src = "../Media/Videos/rick.mp4";
  			break;
  		case 2:
  			source.src = "../Media/Videos/rick.mp4";
  			break;
  		case 3:
  			source.src = "../Media/Videos/rick.mp4";
  			break;
  		case 4:
  			source.src = "../Media/Videos/rick.mp4";
  			break;
  		case 5:
  			source.src = "../Media/Videos/rick.mp4";
  			break;
  		case 6:
  			source.src = "../Media/Videos/rick.mp4";
  			break;
  		case 7:
  			source.src = "../Media/Videos/rick.mp4";
  			break;
  		case 8:
  			source.src = "../Media/Videos/rick.mp4";
  			break;
  		case 9:
  			source.style.src = "../Media/Videos/rick.mp4";
  			break;
  		case 10:
  			source.style.src = "../Media/Videos/rick.mp4";
  			break;
  	}
  	source.type = "video/mp4";
  	video.append(source);
  	div.append(video);
  	//projectPic.firstElementChild.firstElementChild.remove();
  	projectPic.firstElementChild.append(div);
  	cip = $(".video").hover( hoverVideo, hideVideo );
}

function projectChangePage(pageNum){
	if(clickAllowed){
		clickAllowed = false;
		console.log("Clicked Page: " + pageNum);
		const o = document.createElement("div");
		
		document.body.insertBefore(o, document.body.firstChild);
		document.body.style.overflow = "hidden";
		const projectPic = document.getElementById("Project_" + pageNum);
		
		/*var viewportOffset = projectPic.firstElementChild.getBoundingClientRect();
		// these are relative to the viewport, i.e. the window
		var vTop = viewportOffset.top;
		var vLeft = viewportOffset.left;
		console.log("vTop: " + vTop + " vLeft: " + vLeft);

		var wTop = vTop + document.documentElement.scrollTop;
		var wLeft = vLeft + document.documentElement.scrollLeft;
		console.log("wTop: " + wTop + " wLeft: " + wLeft);
		//var tDiff = vTop - wTop;
		//var lDiff = vLeft - wLeft;

		var top = window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("top");
		var left = window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("left");

		console.log("Top: " + top + " Left: " + left);

		var tDiff = vTop - top;
		var lDiff = vLeft - left;*/
		var bTop = window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("top");
		var bLeft = window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("left");
		var top = window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("top");
		var left = window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("left");
		var up;
		var viewportOffset = projectPic.firstElementChild.getBoundingClientRect();

		const screenSize = document.getElementsByClassName("screenSize")[0];
		var viewportOffset2 = screenSize.getBoundingClientRect();
		preferredTop = screenSize.firstElementChild.getBoundingClientRect().top / viewportOffset2.height * 100;
		preferredLeft = screenSize.firstElementChild.getBoundingClientRect().left / viewportOffset2.width * 100;
		console.log("prefferedTop: " + preferredTop + " preferredLeft: " + preferredLeft);
		// these are relative to the viewport, i.e. the window
		var vTop = bTop = viewportOffset.top / viewportOffset2.height * 100;
		var vLeft = bLeft = viewportOffset.left / viewportOffset2.width * 100;
		projectPic.firstElementChild.style.left = vLeft + "%";
		projectPic.firstElementChild.style.top = vTop + "%";
		projectPic.firstElementChild.style.position = "fixed";

		//root.style.setProperty('--top', window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("top"));
		//root.style.setProperty('--left', window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("left"));
		console.log("height: " + viewportOffset2.height);
		console.log("beforeTop: " + vTop + " beforeLeft: " + vLeft);
		if(vTop > preferredTop){
			up = true;
		}else{
			up = false;
		}
		var left;
		if(vLeft > preferredLeft){
			left = false;
		}else{
			left = true;
		}
		var i = 0;
		var topDone, leftDone = false;
		while(true){
			var viewportOffset = projectPic.firstElementChild.getBoundingClientRect();
			//var viewportOffset2 = projectPic.parentElement.getBoundingClientRect();
			// these are relative to the viewport, i.e. the window
			var vTop = viewportOffset.top / viewportOffset2.height * 100;
			var vLeft = viewportOffset.left / viewportOffset2.width * 100;
			i++;
			if(i == 10000){
				var root = document.querySelector(":root");
				root.style.setProperty('--top', window.getComputedStyle(screenSize.firstElementChild).getPropertyValue("top"));
				root.style.setProperty('--left', window.getComputedStyle(screenSize.firstElementChild).getPropertyValue("left"));
				break;
			}
			if(left){
				if(vLeft < preferredLeft){
					projectPic.firstElementChild.style.left = (parseInt(window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("left").replace(/%/,"")) + 0.1) + "%";
				}else{
					leftDone = true;
				}
			}else{
				if(vLeft > preferredLeft){
					projectPic.firstElementChild.style.left = (parseInt(window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("left").replace(/%/,"")) - 0.1) + "%";
				}else{
					leftDone = true;
				}
			}

			if(up){
				if(vTop > preferredTop){
					console.log("move");
					projectPic.firstElementChild.style.top = (parseInt(window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("top").replace(/%/,"")) - 0.1) + "%";
				}else{
					topDone = true;
				}
			}else{
				if(vTop < preferredTop){
					projectPic.firstElementChild.style.top = (parseInt(window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("top").replace(/%/,"")) + 0.1) + "%";
				}else{
					topDone = true;
				}
			}

			if(leftDone && topDone){
				var root = document.querySelector(":root");
				root.style.setProperty('--top', window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("top"));
				root.style.setProperty('--left', window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("left"));
				break;
			}
		}
		var root = document.querySelector(":root");
				root.style.setProperty('--top', window.getComputedStyle(screenSize.firstElementChild).getPropertyValue("top"));
				root.style.setProperty('--left', window.getComputedStyle(screenSize.firstElementChild).getPropertyValue("left"));

		//var root = document.querySelector(":root");
		//root.style.setProperty('--top', preferredTop + tDiff + "px");
		//root.style.setProperty('--left', preferredLeft + lDiff + "px");
		//projectPic.firstElementChild.style.position = "absolute";

		projectPic.firstElementChild.style.top = bTop + "%";
		projectPic.firstElementChild.style.left = bLeft + "%";

		projectPic.firstElementChild.style.zIndex = 2;
		o.classList.add("overlay");
		projectPic.firstElementChild.classList.remove("projectImgAnim");
		projectPic.firstElementChild.classList.add("projectImgAnimSelected");


		waitForAnim();
		//moveAnim(vTop, vLeft, projectPic, pageNum);
	}

	async function waitForAnim(){
		await sleep(3500);
		console.log("change page");
		window.location.href = "./projectPage.html";
		
	}
	/*
	async function moveAnim(vTop, vLeft, projectPic, pageNum){
		await sleep(3000);
		var top = window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("top");
		var left = window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("left");
		var up;
		var viewportOffset = projectPic.firstElementChild.getBoundingClientRect();
		// these are relative to the viewport, i.e. the window
		var vTop = viewportOffset.top;
		var vLeft = viewportOffset.left;
		if(vTop > preferredTop){
			up = true;
		}else{
			up = false;
		}
		var left;
		if(vLeft > preferredLeft){
			left = false;
		}else{
			left = true;
		}
		var i = 0;
		var topDone, leftDone = false;

		/*while(true){
			var viewportOffset = projectPic.firstElementChild.getBoundingClientRect();
			// these are relative to the viewport, i.e. the window
			var vTop = viewportOffset.top;
			var vLeft = viewportOffset.left;
			i++;
			if(i == 10000){
				break;
			}
			if(left){
				if(vLeft < preferredLeft){
					projectPic.firstElementChild.style.left = (parseInt(window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("left").replace(/px/,"")) + 2) + "px";
				}else{
					leftDone = true;
				}
			}else{
				if(vLeft > preferredLeft){
					projectPic.firstElementChild.style.left = (parseInt(window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("left").replace(/px/,"")) - 2) + "px";
				}else{
					leftDone = true;
				}
			}

			if(leftDone){
				break;
			}
			await sleep(1);

		}


		while(true){
			var viewportOffset = projectPic.firstElementChild.getBoundingClientRect();
			// these are relative to the viewport, i.e. the window
			var vTop = viewportOffset.top;
			var vLeft = viewportOffset.left;
			i++;
			if(i == 10000){
				break;
			}
			if(up){
				if(vTop > preferredTop){
					console.log("move");
					projectPic.firstElementChild.style.top = (parseInt(window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("top").replace(/px/,"")) - 2) + "px";
				}else{
					topDone = true;
				}
			}else{
				if(vTop < preferredTop){
					projectPic.firstElementChild.style.top = (parseInt(window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("top").replace(/px/,"")) + 2) + "px";
				}else{
					topDone = true;
				}
			}

			if(topDone){
				break;
			}
			await sleep(1);

		}*/
		/*
		while(true){
			var viewportOffset = projectPic.firstElementChild.getBoundingClientRect();
			// these are relative to the viewport, i.e. the window
			var vTop = viewportOffset.top;
			var vLeft = viewportOffset.left;
			i++;
			if(i == 10000){
				break;
			}
			if(left){
				if(vLeft < preferredLeft){
					projectPic.firstElementChild.style.left = (parseInt(window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("left").replace(/px/,"")) + 2) + "px";
				}else{
					leftDone = true;
				}
			}else{
				if(vLeft > preferredLeft){
					projectPic.firstElementChild.style.left = (parseInt(window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("left").replace(/px/,"")) - 2) + "px";
				}else{
					leftDone = true;
				}
			}

			if(up){
				if(vTop > preferredTop){
					console.log("move");
					projectPic.firstElementChild.style.top = (parseInt(window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("top").replace(/px/,"")) - 2) + "px";
				}else{
					topDone = true;
				}
			}else{
				if(vTop < preferredTop){
					projectPic.firstElementChild.style.top = (parseInt(window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("top").replace(/px/,"")) + 2) + "px";
				}else{
					topDone = true;
				}
			}

			if(leftDone && topDone){
				break;
			}
			await sleep(1);

		}
		//var top = window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("top");
		//var left = window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("left");
	}
	*/
	

}


function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 

}