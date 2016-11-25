var count = 0;
var slide = document.getElementById("slide1");
var slideContainer = slide.getElementsByClassName("slide")[0];
var slideElements = slideContainer.getElementsByClassName("slideElement");
var numElements = slideElements.length;
var maxWidth = numElements * 100;
var isPlay = true;
var slideTools = slide.getElementsByClassName("sliderTools")[0];
slideContainer.style = "width:" + maxWidth + "%;";
var back = slide.getElementsByClassName("back")[0];
var next = slide.getElementsByClassName("next")[0];
slideTools.addEventListener("mouseover", function () {
	isPlay = false;
	showControllers(true);
	//console.log("mouse over");
});
slideTools.addEventListener("mouseout", function () {
	//console.log("mouse out");
	showControllers(false);
	isPlay = true;
	window.setTimeout(function () { timer(); }, 2500);
});
back.addEventListener("click", function () {
	count--;
	if (count == -1) {
		count = numElements - 1;
	}
	selectelement();
});
next.addEventListener("click", function () {
	timer();
});

function timer() {
	if (isPlay) {
		count++;
		if (count > numElements - 1) {
			count = 0
		}
		selectelement();

		console.log(count);
		window.setTimeout(function () { timer(); }, 5000);
	}
}


function selectelement() {
	slideContainer.style = "margin-left:" + ((100 * count) * -1) + "%;";
}
function showControllers(show){
	if(show){
		back.style = "opacity:1;"
		next.style = "opacity:1;"
	}else{
		back.style = "opacity:0;"
		next.style = "opacity:0;"
	}
}