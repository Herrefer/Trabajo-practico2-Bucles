for (let filas = 1; filas <= 30; filas++) {
  let linea = "";
  document.write(`<br>`);
  for (let numeroDeVeces = 1; numeroDeVeces <= filas; numeroDeVeces++) {
    linea += filas;
  }
  document.write(linea);
}
