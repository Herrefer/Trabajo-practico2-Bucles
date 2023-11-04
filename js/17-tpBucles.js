const texto = prompt("Ingrese un texto");

for (indiceTexto = 0; indiceTexto < texto.length; indiceTexto++) {
  if (
    texto.charAt(indiceTexto) == "a" ||
    texto.charAt(indiceTexto) == "e" ||
    texto.charAt(indiceTexto) == "i" ||
    texto.charAt(indiceTexto) == "o" ||
    texto.charAt(indiceTexto) == "u"
  ){
    console.log("La primera vocal del texto (" + texto.charAt(indiceTexto) + ") está en la posición " + indiceTexto)
    break;
  }
  }

