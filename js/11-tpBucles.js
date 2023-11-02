let nombreUno = prompt("Introduzca el primer nombre");
let edadUno = parseInt(prompt("Introduzca la edad del primer nombre"));
let nombreDos = prompt("Introduzca el segundo nombre");
let edadDos = parseInt(prompt("Introduzca la edad del segundo nombre"));
let nombreTres = prompt("Introduzca el tercer nombre");
let edadTres = parseInt(prompt("Introduzca la edad del tercer nombre"));

let edadMayor = Math.max(edadUno, edadDos, edadTres);
console.log("La edad mayor es de " + edadMayor);

if (Math.max(edadUno, edadDos, edadTres) == edadUno){
    document.write (nombreUno + " tiene la mayor edad")
}else if (Math.max(edadUno, edadDos, edadTres) == edadDos){
    document.write (nombreDos + " tiene la mayor edad")
}else{
    document.write (nombreTres + " tiene la mayor edad")
}
