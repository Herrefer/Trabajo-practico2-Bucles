do {
  let edad = parseInt(prompt("Introduzca su edad"));
  if (edad >= 18) {
    alert("Usted ya tiene edad para conducir");
  } else if (edad < 18) {
    alert("Usted no tiene edad para conducir");
  } else {
    alert("Por favor, introduza su edad utilizando números");
  }
} while (confirm("¿Desea realizar otra consulta?"));
