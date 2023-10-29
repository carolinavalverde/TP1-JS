let valor1 = parseInt(prompt('Ingrese un número'));
let valor2 = parseInt(prompt('Ingrese otro número'));
let valor3 = parseInt(prompt('Ingrese otro número'));

var mayor = valor1;

if(valor2 > mayor) {
    mayor = valor2;
}

if(valor3 > mayor) {
    mayor = valor3;
}

document.write("El número más grande es el " + mayor);

