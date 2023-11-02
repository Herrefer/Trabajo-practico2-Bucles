let frase = "";

while (true) {
  let cadena = prompt("Mete aqui tu texto:");
  if (cadena === null) {
    break;
  }
  frase += cadena + "-";
}

if (frase.length > 0) {
 
  todasLasCadenas = frase.slice(0, -1);
  alert(frase);
} else {
  alert("No se ingreso nada");}

  