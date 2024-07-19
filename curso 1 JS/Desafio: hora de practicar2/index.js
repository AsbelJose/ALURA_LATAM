let diaSemana = prompt('que día de la semana es: ');

if (diaSemana == 'Sabado' || diaSemana == 'Domingo') {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}

let esPositivo = prompt('digite su número: ');

if (esPositivo > 0) {
    alert('El número es positivo.');
}

let saldo = prompt('digite el valor: ');

alert(`El saldo es: $${saldo}`);