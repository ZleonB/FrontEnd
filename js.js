let precioFinal;

precioFinal = 200 + (200*0,21);

console.log(precioFinal);

prompt("Pon tu nombre");

alert("Hola");

Number("2"); /*transforma string a number (tiene que ser transformable)*/

let numero;
let resto;

numero = Number(prompt("Introduce el número"));
resto = numero%2

console.log(false == resto);

let arr= [1,2,3,4,5,6,7,8,9,10];
let arr[99]

obj["llave"] = "valor" /*permite acceder al valor con la llave*/
console.info(arr[0]);
console.table(arr);
console.error("Error");
const suma2= function(a, b) {
    return a + b;
}/* las funciones siempre con const porque no queremos que las modifiquen*/

Math. floor
Math.ceil
Math.round

let numero;
let cuadrado;
numero = Number(prompt("Introduce el número"));
cuadrado = Number(prompt("introduce el cuadrado"));

/* Con if y else */
if (cuadrado == numero*numero) {
    console.log("Es un cuadrado perfecto");
}
else {
    console.log("El resultado es erroneo");
}
/* Con ternarios */
cuadrado == numero*numero ? console.log("Es un cuadrado perfecto") : console.log("El resultado es erroneo");

/* con switch */
let menu = prompt("¿Qué menú quiere tomar?").toLowerCase();
let msj2 = ""
switch(menu) {
    case "carne":
        msj2 = "Bebida: vino tinto";
        break;
    case "pescado":
        msj2 = "Bebida: vino blanco";
        break;
    case "verdura":
        msj2 = "Bebida: agua";
        break;
    default:
        msj2 = "Elija carne, pescado o verdura";
}

let i;
let numero;
let msg

numero = Number(prompt("Introduce un número"))
msg = ""

for (i = 0; i < numero; i++) {
    msg += i + ","
}
msg+= numero
console.log(msg)

let i;
let numero;
let msg;
let par;
numero = Number(prompt("Introduce un número"))
msg = ""
par = 0

for (i = 1; par < numero; i++) {
    msg += par + "\n"
    par = i*2
}

alert(msg)

/* Ejercicio MCD */

function MCD(num1, num2) {
    while (num1 != 0 && num2 != 0) {
        if (num1 >= num2) {
            resto =num1%num2;
            num1 = num2,
            num2 = resto;
        }
        else {
            resto = num2%num1;
            num2 = num1,
            num1 = resto;
        }
        
    }
    if (num1 == 0) {
        return num2;
    }
    if (num2 == 0) {
        return num1;
    }
}

num1 = Number(prompt("Introduce el primer número")),
num2 = Number(prompt("Introduce el segundo número"))

MCD = MCD(num1, num2)
console.log("El máximo común divisor es: " + MCD)


// objetos y arrays
let alumno = {
    "nombre"  : "Pepe",
    "apellido": "Martínez",
    "ingles"  : 9,
    "programacion": 8,
    "html"    : 7
  }
  // 1. Declaramos variables necesarias (inputs)
  let nombreAlumno   = alumno.nombre;
  let apellidoAlumno = alumno.apellido;
  let nombreCompleto = nombreAlumno + " " + apellidoAlumno;
  // array de notas:
  let notas = [
    alumno.ingles,        // 9
    alumno.programacion,  // 8
    alumno.html           // 7
  ];
  function calcularMedia(arr){
    let suma = 0;
    for(let i = 0; i < arr.length; i++){
      suma += arr[i];
    }
    return suma / arr.length;
  }

const arrVacio =[]
let contador = 0
arrnumeros.forEach(function()