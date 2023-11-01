let numero = parseInt(prompt("Introduzca un número de 0 a 10"));
if (numero > 10) {
  alert("Número erróneo");
} else {
  switch (numero) {
    case 0:
    case 1:
    case 2:
      alert("Nota muy deficiente");
      break;
    case 3:
    case 4:
      alert("Nota insuficiente");
      break;
    case 5:
    case 6:
      alert("Nota suficiente");
      break;
    case 7:
      alert("Nota buena");
      break;
    case 8:
    case 9:
      alert("Nota notable");
      break;
    case 10:
      alert("Nota sobresaliente");
      break;
    default:
      alert("Introduce un número válido");
  }
}
