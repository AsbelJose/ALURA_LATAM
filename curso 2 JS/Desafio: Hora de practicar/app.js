// Selecciona un elemento del documento
let titulo = document.querySelector('h1'); 
// cambia el contenido del elemento HTML
titulo.innerHTML = 'Hora del desafio';

// código de la función 
function alertFunction() {
    alert('yo amo JS');
}

function consoleMensaje() {
    console.log('el boton fue clicado');
}

function promptMensaje() {
    let ciudad = prompt('Escriba la ciudad de brazil: ');
    alert(`Estuve en ${ciudad} y me acorde de ti`);
}

function suma() {
    let valor1 = parseInt(prompt('Digite el primer valor: '));
    let valor2 = parseInt(prompt('Digite el segundo valor: '));
    suma = valor1 + valor2;
    alert(`El resultado de la suma es: ${suma}`);
    
}