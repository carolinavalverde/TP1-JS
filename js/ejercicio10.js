const numero1 = parseInt(prompt("Ingrese un número"));
esDivisible(numero1);

function esDivisible(numero) {

if (numero % 2 === 0) {
  document.write("<p>El número ingresado es divisible por 2.</p>");
return;
}

if (numero % 3 === 0) {
  document.write("<p>El número ingresado es divisible por 3.</p>");
  return;
}

if (numero % 5 === 0) {
  document.write("<p>El número ingresado es divisible por 5.</p>");
  return;
}

if (numero % 7 === 0) {
  document.write("<p>El número ingresado es divisible por 7.</p>");
} else {
  document.write(
    "<p>El número ingresado no es divisible por ninguno de los números indicados en el ejercicio.</p>"
  );
}
}