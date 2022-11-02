//console.log("hello")

///var RedCircle = document.getElementsByClassName("redCircle");//yes it is
const RedCircle = document.querySelector('.redCircle');
const buttons= document.querySelector('.DrawnButton');
//buttons.addEventListener("mouseover", UnHide, false);
RedCircle.addEventListener("mouseover", disappear, false);//i can't add it to the element?

function disappear(){
	console.log("heollo");// works now
	//make this disappear
	 this.classList.add('hide');
	 buttons.classList.add('unhide');
}

/*function UnHide(){
	console.log("heollo");// works now
	//make this appear
	
}//*/