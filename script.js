let nombre;
let apellido;
let mail;
let cantidad;
let categoria;
let precio = 0;

const botonResumen = document.querySelector("#botonResumen");
botonResumen.addEventListener("click", function(event) {

	let nombreAux = document.getElementById("inputFormCompraNombre").value;
	let apellidoAux = document.getElementById("inputFormCompraApellido").value;
	let mailAux = document.getElementById("inputFormCompraMail").value;
	let cantidadAux = document.getElementById("inputFormCompraCantidad").value;
	let mensajesErrores = document.getElementById("errores");

	if (validacionCantidad(cantidadAux) && validacionTexto(nombreAux) && validacionTexto(apellidoAux) && validacionMail(mailAux)) {
		mensajesErrores.innerHTML = "";
		setearDatos();
		calcularPrecio();
		rellenarCampos();
		event.preventDefault();
		event.stopPropagation();
	} else {
		document.querySelector("#precio").textContent = "Total a pagar: $ ";

		let errores = "";
		let errorEncontrado = false;	
		mensajesErrores.innerHTML = "";
		
		if (!validacionTexto(nombreAux)) {
			errores += "El nombre ingresado no es válido por favor, ingrese un nombre válido, sin números, espacios ni símbolos. <br>";
			errorEncontrado = true;
		}
		if (!validacionTexto(apellidoAux)) {
			errores += "El apellido ingresado no es válido, por favor, ingrese un apellido válido, sin números, espacios ni símbolos. <br>";
			errorEncontrado = true;
		}
		if (!validacionMail(mailAux)) {
			errores += "El mail ingresado no es válido, por favor, ingrese un email válido. <br>";
			errorEncontrado = true;
		}
		if (!validacionCantidad(cantidadAux)) {
			errores += "La cantidad ingresada no es válida, por favor, ingrese un valor numérico de 1 a 3 dígitos. <br>";
			errorEncontrado = true;
		}
		if (errorEncontrado) {
			mensajesErrores.innerHTML = errores;
		}
		event.preventDefault();
		event.stopPropagation();

		

const botonBorrar = document.querySelector("#botonBorrar");
botonBorrar.addEventListener("click", function() {
	borrarCampos();
});

function rellenarCampos() {
	document.getElementById("inputFormCompraNombre").value = nombre;
	document.getElementById("inputFormCompraApellido").value = apellido;
	document.getElementById("inputFormCompraMail").value = mail;
	document.getElementById("inputFormCompraCantidad").value = cantidad;
	document.getElementById("inputFormCompraCategoria").value = categoria;
}

function borrarCampos() {
	document.getElementById("inputFormCompraNombre").value = "";
	document.getElementById("inputFormCompraApellido").value = "";
	document.getElementById("inputFormCompraMail").value = "";
	document.getElementById("inputFormCompraCantidad").value = "";
	document.querySelector("#precio").textContent = "Total a pagar: $ ";
}

function validacionTexto(texto) {
	const nombreOapellido = /^(?=.{4,20}$)[a-zA-ZÀ-ÿ\u00f1\u00d1]+([a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.exec(texto);
	const comprobarTexto = !!nombreOapellido;
	return comprobarTexto
}

function validacionMail(correo) {
	const email = /^[a-zA-Z0-9.!Ññ#$%&'*+\=?^_`{|}~-]+@([\w-]+\.)+[\w-]{2,4}$/.exec(correo);
	const comprobarMail = !!email;
	return comprobarMail;
}

function validacionCantidad(cantidadSeleccionada) {
	const cantidadAcomprobar = /^[0-9]{1,3}$/.exec(cantidadSeleccionada);
	const comprobarCantidad = !!cantidadAcomprobar;
	return comprobarCantidad;
}

function setearDatos() {
	setNombre();
	setApellido();
	setMail();
	setCantidad();
	setCategoria();
}

function setNombre() {
	return nombre = document.getElementById("inputFormCompraNombre").value;
}

function setApellido() {
	return apellido = document.getElementById("inputFormCompraApellido").value;
}

function setMail() {
	return mail = document.getElementById("inputFormCompraMail").value;
}

function setCantidad() {
	return cantidad = parseInt(document.getElementById("inputFormCompraCantidad").value, 10);
}

function setCategoria() {
	return categoria = document.getElementById("inputFormCompraCategoria").value;
}

function calcularPrecio() {
	const categoriaSeleccionada = document.getElementById("inputFormCompraCategoria").value;
	let descuento;
	if (categoriaSeleccionada === "Estudiante") {
		descuento = 80;
	} else if (categoriaSeleccionada === "Trainee") {
		descuento = 50;
	} else if (categoriaSeleccionada === "Junior") {
		descuento = 15;
	}
	let montoDescuento = (100 - descuento) / 100;
	precio = (cantidad * 200) * montoDescuento;
	document.querySelector("#precio").textContent = "Total a pagar: $ " + precio;
}
}
}
)