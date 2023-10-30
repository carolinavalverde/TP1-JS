const frase = prompt ('Ingrese una frase');

function esVocal(letra) {
    return 'aeiouAEIOU'.indexOf(letra) !== -1;
}

console.log("Las vocales en la frase son:");
document.write("Las vocales en la frase son:<br>");
for (let i = 0; i < frase.length; i++) {
    let letra = frase.charAt(i);
    if (esVocal(letra)) {
        console.log(letra);
        console.log("está en la posición: "+ i);
        document.write("<br>-La letra " + letra.toUpperCase() + " está en la posición: "+ i);
    }
}
