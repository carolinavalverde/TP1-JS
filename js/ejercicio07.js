const valor1 = parseInt(prompt('Ingrese un número'));
const valor2 = parseInt(prompt('Ingrese otro número'));
const valor3 = parseInt(prompt('Ingrese otro número'));
let mayor;

if(valor1 > valor2) {
    mayor = valor1;
}
if(valor2 > valor1) {
    mayor = valor2;
}
if(mayor > valor3) {
document.write("El número más grande es el " + mayor); 
}else{
    document.write("El número más grande es el " + valor3);
}




