const numero1 = parseInt(prompt("Ingrese un número"));
esDivisible(numero1);

function esDivisible(numero) {
  const mostrar = (nIngresado, num) =>
    `<p>El ${nIngresado} es divisible por ${num}</p>`;

  if (numero % 2 === 0) {
    document.write(mostrar(numero, 2));
  }

  if (numero % 3 === 0) {
    document.write(mostrar(numero, 3));
  }

  if (numero % 5 === 0) {
    document.write(mostrar(numero, 5));
  }

  if (numero % 7 === 0) {
    document.write(mostrar(numero, 7));
  }
}
