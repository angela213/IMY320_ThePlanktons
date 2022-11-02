//console.log("hello")

///var RedCircle = document.getElementsByClassName("redCircle");//yes it is
const RedCircle = document.querySelector('.redCircle');
RedCircle.addEventListener("mouseover", disappear, false);//i can't add it to the element?

function disappear(){
	console.log("heollo");// works now
	//make this dissappear
	 this.classList.add('hide');
}