const texto = prompt("Ingrese un texto")
for (indiceFrase = 0; indiceFrase < texto.length; indiceFrase++){
    document.write(texto.charAt(indiceFrase) + "-")
}