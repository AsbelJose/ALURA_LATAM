console.log('Bienvenido');
let nombre = 'Jose';

console.log(`Hola, ${nombre}`);
alert(`Hola, ${nombre}`);

let lenguaje = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(lenguaje);

let valor1 = 5;
let valor2 = 6;
resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

let edad = prompt('digite su edad: ');

if (edad <= 18) {
    console.log('es mayor de edad');
}

let numero = parseInt(prompt('Digite un número: '));

if (numero > 0) {
    alert('el numero es mayor que cero');
} else if (numero < 0) {
    alert('el número es mayor que cero');
} else {
    alert('el número es cero');
}

let aleatorio = Math.random();
console.log(aleatorio);

