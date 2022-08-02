function saludo(persona){
    alert("Bienvenido profesor/a" + persona)
}

const pedirNombre =()=> {
    let nombre = prompt("Nombre del profesor/a")
    saluda(nombre)
}


const usuarioContrasena = () =>{
    let usuario = prompt("Ingrese su Usuario")
    while ( usuario != "Coder"){
    alert( "Usuario Incorrecto");
    usuario = prompt("Ingrese su Usuario")
    return usuario
} 

let contrasena = prompt("Ingrese la contraseña")

 while (contrasena != "1234") {
    alert("Contraseña incorrecta")
    contrasena = prompt("Ingrese la contraeña")
}   

 alert (`Hola ${usuario}, Bienvenido a simulador de lista de promedios`)
 
 //saluda(usuario);
}
const saluda=(usuario)=>{
    alert(`Bienvenido ${usuario}`)
    
}


pedirNombre()
usuarioContrasena()

function promediofinal() {
	let primernumero = prompt("Ingrese la nota de 1er trimestre")
	let segundonumero = prompt("Ingrese la nota de 2do trimestre")
	let tercernumero = prompt("Ingrese la nota de 3er trimestre")
	let n1 = parseInt(primernumero)
	let n2 = parseInt(segundonumero)
	let n3 = parseInt(tercernumero)
	let pro = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3))/ 3
	document.getElementById("promedio").innerHTML = pro;
	if (n1 < 0 || n1 > 10) {
		alert ('La nota del 1er trimestre es incorrecta')
	} else if (n2 < 0 || n2 > 10) {
		alert ('La nota del 2do trimestre es incorrecto') ;
	} else if (n3 < 0 || n3 > 10) {
		alert ('La nota del 3er trimestre es incorrecta')
	}
}




//function NotaTrimestral(n1 ,n2 ,n3 ) {
   
//}




//let resultado = promediofinal(n1 , n2 , n3)
//	alert (resultado)





	//<h1>Lista de Alumnos</h1>
	//	<h4> Alberto Nuñes </br>Alejando Sanz</br>Carlos Santillan</br>Estela Muños</br>Jonathan Romero</br>Jose Gaspar</br>Julio Verne</br>Lucia Britez</br>Marta Dominguez</br>Matias Vigario</br>Paulo Iglesia</br>Roberto Mercedes</br>Rocio Pasteur</br>Silvina Escudero</br>Vito Corleone</h4>//