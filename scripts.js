function converter() {
  var metros = document.getElementById("metros").value;
  var centimetros = metros * 100;
  var resultado = document.getElementById("res");

  if (metros == "") {
    resultado.innerHTML = `Digite um numero`;
  } else {
    resultado.innerHTML = `${metros} metros é igual a ${centimetros} centimetros`;
  }
}
