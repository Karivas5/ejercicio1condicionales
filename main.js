//1. Solicitar al usuario que responda la siguiente pregunta:
// en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.
let respuesta=prompt("¿Hola! \nPor favor, responde la siguiente pregunta: \n¿Estas bellísimo/a? (Si/No)");
if (respuesta.toLowerCase ()==="si"){
  alert("¡Ciertamente!");
}else{
  alert("No te creo.");
}

//2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. 
//Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.
// Solicitar al usuario que ingrese un número.
let numero = prompt("Por favor, ingresa un número:");
// Convertir el valor ingresado a un número entero.
numero = parseInt(numero);
// Verificar si el número es divisible entre dos.
if (numero % 2 === 0) {
  alert(numero + " es divisible entre 2.");
} else {
  alert(numero + " no es divisible entre 2.");
}


//3. Crear un programa que determine si un número introducido en un Prompt es par o no, 
//la respuesta será mostrada en un Alert.
let numero_1 = prompt("Por favor, ingresa un número");
numero_1 = parseInt(numero_1);
if (numero_1 % 2 === 0){
  alert(numero_1 + " es un número par.");
}else{
  alert(numero_1 + " no es un número par.")
}

//4. Solicitar al usuario un número de cliente. 
//Si el número es el 1000, imprimir 'Ganaste un premio', 
//en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
const numeroCliente = prompt("Por favor, ingresa tu número de cliente:");
// Verificar si el número de cliente es 1000
if(numeroCliente === '1000') {
    alert('¡Ganaste un premio!');
} else {
    alert(`Lo sentimos, sigue participando.\nTu número fue: ${numeroCliente}`);
}


//5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos n es menor.
// No considerar el caso en que ambos números son iguales. 
let numero1 = prompt("Ingresa el primer número:");
let numero2 = prompt("Ingresa el segundo número:");
// Verificar que ambos números no son iguales y mostrar cual es el menor.
if (numero1 != numero2) {
  if (numero1 < numero2) {
    alert(`El número menor es: ${numero1}`);
  } else {
    alert(`El número menor es: ${numero2}`);
  }
} else {
  alert("Los números ingresados son iguales.");
}


//6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. 
//Considerar el caso en que 2 números sean iguales.
let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");
let num3 = prompt("Ingrese el tercer número:");
// Convertir las entradas a números enteros.
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
// Comparar los números y mostrar el mayor.
if (num1 >= num2 && num1 >= num3) {
  alert("El número mayor es: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
  alert("El número mayor es: " + num2);
} else {
  alert("El número mayor es: " + num3);
}

//7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, 
//otro mensaje diferente si es viernes, 
//otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
let dia = prompt("Por favor, ingresa un día de la semana:");
// Convertir la entrada a minúsculas para la comparación.
dia = dia.toLowerCase();
// Comparar el día ingresado por el usuario y mostrar el mensaje correspondiente.
switch(dia) {
    case 'lunes':
        alert("¡Excelente inicio de semana!");
        break;
    case 'viernes':
        alert("¡Disfruta el fin de semana!");
        break;
    case 'sábado':
    case 'domingo':
        alert("¡Disfruta tu día en familia!");
        break;
    default:
        alert("¡Que tengas un lindo día!");
}


//8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
let calificacion = prompt("Por favor, ingresa tu calificación (entre 1 y 10):");
// Convertir la entrada a número.
calificacion = Number(calificacion);
// Comprobar que la calificación este en el rango correcto.
if (calificacion < 1 || calificacion > 10) {
  alert("Error: La calificación debe estar entre 1 y 10.");
} else {
  // Imprimir el mensaje que corresponda según la calificación.
  if (calificacion < 6) {
    alert("Reprobado");
  } else if (calificacion >= 6 && calificacion <= 8) {
    alert("Regular");
  } else if (calificacion === 9) {
    alert("Bien");
  } else if (calificacion === 10) {
    alert("¡Excelente!");
  }
}


//9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida 
//cuánto le costará en función del topping que elija.
//El helado sin topping cuesta 50 MXN.
//El topping de oreo cuesta 10 MXN.
//El topping de KitKat cuesta 15 MXN.
//El topping de brownie cuesta 20 MXN.
//En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.
const precioHeladoSencillo = 50;
const preciosToppings = {
  oreo: 10,
  kitkat: 15,
  brownie: 20
};
// Función para calcular el costo del helado
function calcularCostoHelado(topping) {
  if (preciosToppings.hasOwnProperty(topping.toLowerCase())) {
    return precioHeladoSencillo + preciosToppings[topping.toLowerCase()];
  } else {
    alert("No tenemos este topping, lo sentimos.");
    return precioHeladoSencillo;
  }
}

const toppingUsuario = prompt("¿Qué topping te gustaría agregar a tu helado? (oreo, kitkat, brownie)");
const costoHelado = calcularCostoHelado(toppingUsuario);
alert(`El costo de tu helado es de: ${costoHelado} `);



