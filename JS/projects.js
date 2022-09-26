var clickAllowed = true;
var preferredTop = 367;
var preferredLeft = 488.5;

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
					projectPic.firstElementChild.style.left = (parseInt(window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("left").replace(/px/,"")) + 1) + "px";
				}else{
					leftDone = true;
				}
			}else{
				if(vLeft > preferredLeft){
					projectPic.firstElementChild.style.left = (parseInt(window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("left").replace(/px/,"")) - 1) + "px";
				}else{
					leftDone = true;
				}
			}

			if(up){
				if(vTop > preferredTop){
					console.log("move");
					projectPic.firstElementChild.style.top = (parseInt(window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("top").replace(/px/,"")) - 1) + "px";
				}else{
					topDone = true;
				}
			}else{
				if(vTop < preferredTop){
					projectPic.firstElementChild.style.top = (parseInt(window.getComputedStyle(projectPic.firstElementChild).getPropertyValue("top").replace(/px/,"")) + 1) + "px";
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

		//var root = document.querySelector(":root");
		//root.style.setProperty('--top', preferredTop + tDiff + "px");
		//root.style.setProperty('--left', preferredLeft + lDiff + "px");
		//projectPic.firstElementChild.style.position = "absolute";
		projectPic.firstElementChild.style.top = bTop;
		projectPic.firstElementChild.style.left = bLeft;

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
		window.location.href = "./projects.html";
	}

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

	function sleep(ms) {
  		return new Promise(resolve => setTimeout(resolve, ms));
	}

}