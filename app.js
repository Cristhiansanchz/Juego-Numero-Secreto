
let numeroSecreto = 0;
let intentos = 0;
let maxIntentos = 3;
let numMaximo = 10;
let listaNumerosSorteados = [];

function agregarTextoHTML(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
        return; //Buena práctica
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* numMaximo)+1;
    // Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numMaximo) {
        agregarTextoHTML('p', 'Ya se sortearon todos los números posibles');
    } else {
        // Si el número secreto está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto;
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function validarIntento() {
    // Obtener el valor que el usuario digita en el input
    let numeroUsuario = document.getElementById('valorUsuario').value;
    if (numeroUsuario == numeroSecreto) {
        agregarTextoHTML('p',`Acertaste, el número secreto es: ${numeroSecreto}, lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        // Habilitar botón "Juego nuevo" despues de acertar
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (intentos == maxIntentos) {
        agregarTextoHTML('p', `Ha alcanzado el número permitido de intentos, ${maxIntentos}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            agregarTextoHTML('p','El número secreto es menor');
        } else {
            agregarTextoHTML('p','El número secreto es mayor');
            }
        }
        intentos++;
        limpiarCampo();
}

function limpiarCampo(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales () {
    agregarTextoHTML('h1', 'Secret Numbers Game');
    agregarTextoHTML('p', `Digita un número entre 1 y ${numMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar campo
    limpiarCampo();
    // Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


// Desafio 1

/*
Crear una función que muestre "¡Hola, mundo!" en la consola.
*/

/*
function mensaje() {
    return('¡Hola, mundo!');
}

console.log(mensaje());
*/

// Desafio 2

/*
Crear una función que reciba un nombre como parámetro y muestre
"¡Hola, [nombre]!" en la consola.
*/

/*
function mostrarNombre(nombre) {
    return(`¡Hola, ${nombre}!`);
}

console.log(mostrarNombre('Cristhian'));
*/

// Desafio 3

/*
Crear una función que reciba un número como parámetro y devuelva el doble
de ese número.
*/

/*
function numeroDoble(numero) {
    return (numero*2);
}

console.log(numeroDoble(8));
*/

// Desafio 4

/*
Crear una función que reciba tres números como parámetros y
devuelva su promedio.
*/

/*
function promedio(num1, num2, num3) {
    return (Math.floor((num1+num2+num3)/3));
}

console.log(promedio(3,5,6));
*/

// Desafio 5

/*
Crear una función que reciba dos números como parámetros y
devuelva el mayor de ellos.
*/

/*
function suma(num1, num2) {
    return(num1+num2);
}

console.log(suma(5,2));
*/

// Desafio 6

/*
Crear una función que reciba un número como parámetro y
devuelva el resultado de multiplicar ese número por sí mismo.
*/

/*
function multiplicar(numero) {
    return(numero*numero);
}

console.log(multiplicar(9));
*/

// Desafio 7

/*
Crea una función que calcule el índice de masa corporal (IMC) de una persona
a partir de su altura en metros y peso en kilogramos, que se recibirán como
parámetros.
*/

/*
peso = 80;
altura = 1.75;

function calcularIMC(peso, altura) {
    return (`Peso ${peso}Kg, Altura ${altura}Mts, IMC: ${parseFloat(peso/(altura*altura)).toFixed(2)}`);
}

console.log(calcularIMC(peso, altura));
*/

// Desafio 8
/*
Crea una función que calcule el valor del factorial de un número pasado como parámetro.
*/

/*
let numero = 5;

function calculoFactorial (numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(calculoFactorial(numero));
*/

// Desafio 9

/*
Crea una función que convierta un valor en dólares, pasado como parámetro,
y devuelva el valor equivalente en moneda colombiana. Para esto, considera la cotización
del dólar igual a R$4,80.
*/

/*
let valor = 200;
const dolar = 4118;

function calcularDolares (valor) {
    return(pesosColombianos = valor * dolar);
}

console.log(calcularDolares(valor));
*/

// Desafio 10

/*
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
utilizando la altura y la base que se proporcionarán como parámetros.
*/

/*
let base = parseInt(5);
let altura = parseInt(3);

function calcularAreaRectangulo(base, altura) {
    let area = base * altura;
    return area;
}

function calcularPerimetroRectangulo(base, altura) {
    perimetro = 2 * (base + altura)
    return perimetro;
}

console.log(`El area del rectángulo de base ${base} y altura ${altura} es ${calcularAreaRectangulo(base, altura)}m2`);
console.log(`El perímetro del rectángulo de base ${base} y altura ${altura} es ${calcularPerimetroRectangulo(base, altura)}m`);
*/

// Desafio 11

/*
Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
*/

/*
let radio = 4;

const pi = 3.14;

function calcularAreaCirculo (radio) {
    area = pi * Math.pow(radio, 2);
    return area;
}

function calcularPerimetroCirculo (radio) {
    perimetro = 2 * pi * radio;
    return perimetro;
}

console.log(`El área del circulo con un radio de ${radio}m es ${calcularAreaCirculo(radio)}m2`);
console.log(`El perímetro de un circulo con un radio de ${radio}m es ${calcularPerimetroCirculo(radio)}m`);
*/

// Desafio 12

/*
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado
como parámetro.
*/

/*
let numero = 6;
let hasta = 10;

function tablaMultiplicar (numero) {
    for (i = 1; i <= hasta; i++) {
       console.log(`${numero} * ${i} = ${numero * i}`);
    }
}

console.log(tablaMultiplicar(numero));
*/

// Desafio 13

/*
Crea una lista vacía llamada "listaGenerica".
*/

/*
let listaGenerica = [];
*/

// Desafio 14

/*
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con
los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
*/

/*
let lenguagesDeProgramacion = ['C', 'C++', 'Kotlin', 'Python'];
*/

// Desafio 15

/*
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos:
'Java', 'Ruby' y 'GoLang'.
*/

/*
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
*/

// Desafio 16

/*
Crea una función que muestre en la consola todos los elementos de la lista
"lenguagesDeProgramacion.
*/

/*
function mostrarLenguagesProgramacion () {
    console.log(lenguagesDeProgramacion);
}

mostrarLenguagesProgramacion();
*/

// Desafio 17

/*
Crea una función que muestre en la consola todos los elementos de la lista
"lenguagesDeProgramacion en orden inverso.
*/

/*
function mostrarLenguagesProgramacion () {
    console.log(lenguagesDeProgramacion.reverse());
}

mostrarLenguagesProgramacion();
*/

// Desafio 18

/*
Crea una función que calcule el promedio de los elementos en una lista de números.
*/

/*
let listaNumeros = [4, 7, 9];

function calcularPromedio () {
    let suma = 0;

    for (let i = 0; i < listaNumeros.length; i++) {
        suma += listaNumeros[i];
    }
    let promedio = suma / listaNumeros.length;
    return promedio;
}

console.log(calcularPromedio());
*/

// Desafio 19

/*
Crea una función que muestre en la consola el número más grande y el número
más pequeño en una lista.

operador de propagación (...)
*/

/*
let listaNumeros = [10, 20, 30, 40, 15];

function calcularNumero() {
    let numeroMayor = Math.max(...listaNumeros);
    let numeroMenor = Math.min(...listaNumeros);
    
    console.log('Número mayor:', numeroMayor);
    console.log('Número menor:', numeroMenor);
}

calcularNumero();
*/

// Desafio 20

/*
Crea una función que devuelva la posición en la lista donde se encuentra un
elemento pasado como parámetro, o -1 si no existe en la lista.
*/

// include devuelve true o false si el elemento se encuentra en la lista
// indexOf devuelve la posición o indice donde se encuentra el elemento

/*
let vehiculo = 'Toyota';

function posicionVehiculo(vehiculo) {
    let vehiculos = ['Chevrolet', 'Toyota', 'Mazda', 'Ford'];
    let indice = vehiculos.indexOf(vehiculo)
    if (vehiculos.includes(vehiculo)) {
        console.log(`${vehiculo} se encuentra en la lista en el indice ${indice}`);
    } else {
        console.log(`${vehiculo} no se encuentra en la lista`);
    }
}

posicionVehiculo(vehiculo);
*/

// Desafio 21

/*
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una
nueva lista con la suma de los elementos uno a uno.

*/

/*
function mostrarMarcaVehiculos() {
    let marcaMotos = ['Yamaha', 'Suzuki', 'Honda', 'Ducati'];
    let marcaCarros = ['Ford', 'Toyota', 'Chevrolet', 'Kia'];
    let marcaVehiculos = [...marcaMotos,...marcaCarros];

    console.log(marcaVehiculos);
}

mostrarMarcaVehiculos();
*/

// Desafio 22

/*
Crea una función que reciba una lista de números y devuelva una nueva lista
con el cuadrado de cada número.
*/

/*
let numeros = [2, 4, 6, 8, 10];

function calcularNumeroCuadrado() {
    let nuevaLista = [];
    for (let i = 0; i < numeros.length; i++) {
        nuevaLista.push(Math.pow(numeros[i],2));
    }
    console.log(nuevaLista);
}

calcularNumeroCuadrado();
*/