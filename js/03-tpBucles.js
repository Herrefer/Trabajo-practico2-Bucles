while (true) {
  let texto = prompt("Introduzca un texto")
  if (texto === null){
      break
  }else{
      document.write(texto + "-")
  }
}