let numeroIndicado = prompt("Indique un número entre 1 y 50")
for (let filas = 1; filas <= numeroIndicado; filas++) {
    let linea = ""
    document.write(`<br>`)
    for (let numeroDeVeces = 1; numeroDeVeces <= filas; numeroDeVeces++) {
      linea += filas
    }
    document.write(linea)
  }
  