const texto = prompt("Ingrese un texto");
let textoReves = Math.max(texto.length)
for (indiceFrase = 0; indiceFrase <= texto.length; indiceFrase++){
    document.write(texto.charAt(textoReves--))
}