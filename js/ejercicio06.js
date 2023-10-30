const valor1 = parseInt(prompt('Ingrese un número'));
const valor2 = parseInt(prompt('Ingrese otro número'));

if( valor1 >=valor2){
    document.write(`<p>El ${valor1} es el número más grande</p>`);
}else{
    document.write(`<p>El ${valor2} es el número más grande</p>`);
}