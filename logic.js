let boton= document.querySelector(".carrito");
let barra= document.querySelector(".carrito__barra");
let select= document.querySelector(".formulario__select");
let cantidad= document.querySelector(".formulario__cantidad");
let agregar= document.querySelector(".formulario__boton");
let titulo= document.querySelector(".titulo");
let texto= document.querySelector(".carrito__barra-texto");
let texto2= document.querySelector(".carrito__barra-texto-2");
let imagen= document.querySelector(".carrito__imagen");
let notification= document.querySelector(".notificacion");




let nombre = titulo.textContent;

let bandera = 0;

let valor ;
let talla;
let precioTotal = 25;


agregar.addEventListener("click", ()=>{

valor = cantidad.value;
talla = select.value;
precioTotal *= valor;
if(bandera ===0){
 

 if(talla!== "--seleccione una talla--" && valor !== ""){
 	 texto.textContent =`Añadido al carrito`;
	 texto2.textContent = `Camiseta: ${nombre} Talla: ${talla} Cantidad: ${valor} Precio: $${precioTotal}`;
 	 bandera =1;
 	 notification.textContent = 1;

 	 	notification.style.visibility != 'visible'?notification.style.visibility = 'visible': notification.style.visibility = 'hidden';
	// statement
}

 }});

	


boton.addEventListener("click", ()=>{

	barra.style.visibility != 'visible'?barra.style.visibility = 'visible': barra.style.visibility = 'hidden';
   

})