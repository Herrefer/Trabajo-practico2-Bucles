let suma = 0

while (true) {
    let numero = prompt("Introduzca un numero")
    if (numero === null){
        document.write("El resultado de la suma es " + (suma += numero))
        break;
    }else if(isNaN(numero)){
        alert("Por favor, introduzca solo números")
    }
    else{
        let numeroEntero = parseInt(numero)
        suma += numeroEntero
    }
  }