//declaración de variables
let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
   // selecciona el objeto html y lo guarda en la variable elementoHTML
    let elementoHTML = document.querySelector(elemento);
  // toma el objeto titulo y colocale el texto
    elementoHTML.innerHTML = texto;
    return; 
}


//función que captura el valor del input
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    // triple igual tiene que ser en valor y en tipo
    if (numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez':'veces'}`);
        // activa el boton de nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        // el usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'el número secreto es menor');
        }
        else {
            asignarTextoElemento('p', 'el número secreto es mayor');
        }
        //cada vez que no acierte aumenta en uno.
        intentos++;
        limpiarCaja();       
    };
    return;
}

function limpiarCaja() {
    // queryselecto por id usando # anetes del nombre.
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // preguntar si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        // preguntar si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            //recursividad 
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }    
    }
      
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    //guarda el numero secreto que crea la funcion
    numeroSecreto =generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio de intervalo de numero
    //reinicializar el numero intentos.
    //generar el número aleatorio
    condicionesIniciales();
    //desahabilitar el boton de nuevo juegos.
    document.querySelector('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();