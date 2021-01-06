function converter() {
    var metros = document.getElementById("metros").value
    var centimetros = metros *100;
    var resultado = document.getElementById("res")

    resultado.innerHTML = `${metros} metros é igual a ${centimetros} centimetros`

    
    
    
}