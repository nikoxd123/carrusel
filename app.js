var count = 0; //Cuenta en que posicion del array va
var slide = document.getElementById("slide1");
var slideContainer = slide.getElementsByClassName("slide")[0];
var slideElements = slideContainer.getElementsByClassName("slideElement"); //Elementos del carrusel
var numElements = slideElements.length;	//Numeros de elementos en el carrusel
var maxWidth = numElements * 100;//Maximo de ancho, ejemp: Cuando hay 3 elementos se calcula que el width tiene que ser 300% 
var isPlay = true; //Se esta reproduciendo el carrusel
var slideTools = slide.getElementsByClassName("sliderTools")[0]; //Elementos de control del carrusel
slideContainer.style = "width:" + maxWidth + "%;"; //Se setea el with en el container

var back = slide.getElementsByClassName("back")[0];//Boton Volver
var next = slide.getElementsByClassName("next")[0];//Boton siguiente
//Esto Ayuda a que el usuario si no le dio tiempo a leer lo pueda hacer
//Cuando el mouse esta sobre las herramientas, el carrusel se para
slideTools.addEventListener("mouseover", function () {
	isPlay = false;
	showControllers(true);
	//console.log("mouse over");
});
//Cuando se sca el mouse de las herramientas, el carrusel sigue
slideTools.addEventListener("mouseout", function () {
	//console.log("mouse out");
	showControllers(false);
	isPlay = true;
	window.setTimeout(function () { timer(); }, 2500);
});

//Volver a la anterior imagen
//--Bug en esta parte del codigo--
back.addEventListener("click", function () {
	count--;
	if (count == -1) {
		count = numElements - 1;
	}
	selectelement();
});
//Pasar a la siguiente imagen
next.addEventListener("click", function () {
	timer();
});
//Funcion para el cambio de imagen automaticamente
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
//Selecciona la imagen
function selectelement() {
	slideContainer.style = "margin-left:" + ((100 * count) * -1) + "%;";
}

//Oculta y muestra los controles cuando se pone o se saca el mouse de encima.
function showControllers(show){
	if(show){
		back.style = "opacity:1;"
		next.style = "opacity:1;"
	}else{
		back.style = "opacity:0;"
		next.style = "opacity:0;"
	}
}