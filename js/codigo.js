//declaracion de variables
var cuadrado=null;
var cuadradoP=0;
var cuadradoA=0;
var cuadradoButtonP=null;
var cuadradoButtonA=null;

var rectangulo1=null;
var rectangulo2=null;
var rectanguloP=0;
var rectanguloA=0;
var rectanguloButtonP=null;
var rectanguloButtonA=null;

var triangulo1=null;
var triangulo2=null;
var triangulo3=null;
var trianguloP=0;
var trianguloA=0;
var trianguloButtonP=null;
var trianguloButtonA=null;

var circulo=null;
var circuloP=0;
var circuloA=0;
var circuloButtonP=null;
var circuloButtonA=null;




//*******************Lectura de los TEXBOX*******************

//********************/ Lectura del cuadrado
cuadrado=document.getElementById("inputCuadrado");
cuadradoButtonP=document.getElementById("inputCuadradoP");
cuadradoButtonA=document.getElementById("inputCuadradoA");

//********************/ Lectura del Rectangulo
rectangulo1=document.getElementById("inputRectangulo1");
rectangulo2=document.getElementById("inputRectangulo2");
rectanguloButtonP=document.getElementById("rectanguloButtonP");
rectanguloButtonA=document.getElementById("rectanguloButtonA");

//********************/ Lectura del triangulo
triangulo1=document.getElementById("inputTriangulo1");
triangulo2=document.getElementById("inputTriangulo2");
triangulo3=document.getElementById("inputTriangulo3");
trianguloButtonP=document.getElementById("trianguloButtonP");
trianguloButtonA=document.getElementById("trianguloButtonA");

//********************/ Lectura del circulo
circulo=document.getElementById("inputCirculo");
circuloButtonP=document.getElementById("circuloButtonP");
circuloButtonA=document.getElementById("circuloButtonA");


//****************Cuadrado funcionalidad************** */
cuadradoButtonP.addEventListener("click",calcCuadradoP);
cuadradoButtonA.addEventListener("click",calcCuadradoA);


function calcCuadradoP(){
	cuadradoP=parseFloat(cuadrado.value) * 4 ;
	document.getElementById("outputCuadradoP").innerHTML=cuadradoP+" Cm";
	
}

function calcCuadradoA(){
	cuadradoA= Math.pow(parseFloat(cuadrado.value),2);
	document.getElementById("outputCuadradoA").innerHTML=cuadradoA +" Cm^2";
	
}

//****************Rectangulo funcionalidad************** */
rectanguloButtonP.addEventListener("click",calcRectanguloP);
rectanguloButtonA.addEventListener("click",calcRectanguloA);


function calcRectanguloP(){
	rectanguloP=(parseFloat(rectangulo1.value) * 2) +(parseFloat(rectangulo2.value) * 2 );
	document.getElementById("outputRectanguloP").innerHTML=rectanguloP+" Cm";
	
}

function calcRectanguloA(){
	rectanguloA= parseFloat(rectangulo1.value) * parseFloat(rectangulo2.value);
	document.getElementById("outputRectanguloA").innerHTML=rectanguloA +" Cm^2";
	
}

//****************Triangulo funcionalidad************** */
trianguloButtonP.addEventListener("click",calcTrianguloP);
trianguloButtonA.addEventListener("click",calcTrianguloA);


function calcTrianguloP(){
	trianguloP=parseFloat(triangulo1.value) +parseFloat(triangulo2.value)+parseFloat(triangulo3.value);
	document.getElementById("outputTrianguloP").innerHTML=trianguloP+" Cm";
	
}

function calcTrianguloA(){
	trianguloA=(parseFloat(triangulo1.value)*parseFloat(triangulo2.value))/2;
	document.getElementById("outputTrianguloA").innerHTML=trianguloA +" Cm^2";
	
}

//***************Circulo funcionalidad*************** */
circuloButtonP.addEventListener("click",calcCirculoP);
circuloButtonA.addEventListener("click",calcCirculoA);

function calcCirculoP(){
	circuloP= 2 * Math.PI * parseFloat(circulo.value);
	circuloP=circuloP.toFixed(2);
	document.getElementById("outputCirculoP").innerHTML=circuloP + " Cm";
	

}

function calcCirculoA(){
	circuloA= Math.PI * Math.pow(parseFloat(circulo.value),2);
	circuloA=circuloA.toFixed(2);
	document.getElementById("outputCirculoA").innerHTML=circuloA + " Cm^2"
	
}


// Este es un cambio


