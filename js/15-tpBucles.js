const texto = prompt("Ingrese un texto");
let contador = 0

for (indiceTexto = 0; indiceTexto < texto.length; indiceTexto++) {
  if (
    texto.charAt(indiceTexto) == "a" ||
    texto.charAt(indiceTexto) == "e" ||
    texto.charAt(indiceTexto) == "i" ||
    texto.charAt(indiceTexto) == "o" ||
    texto.charAt(indiceTexto) == "u"
  ){
    contador++
    }
}
document.write("La cantidad de vocal/es que tiene su texto es de " + contador + " vocal/es")