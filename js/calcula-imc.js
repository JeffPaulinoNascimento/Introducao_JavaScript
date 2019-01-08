/*
Atalhos:
ctrl-alt-b = formatar o codigo;
ctrl-alt-c = Color-picker(mostra a cor no css);
*/

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var imcLinha = paciente.querySelector(".info-imc");

  var pesoEValido = true;
  var alturaEValida = true;

  if (peso <= 0 || peso >= 500) {
    pesoEValido = false;
    imcLinha.textContent = "Peso invalido!";
    paciente.classList.add("paciente-invalido");
  }
  if (altura <= 0 || altura >= 3.00) {
    alturaEValida = false;
    imcLinha.textContent = "Altura Invalida!";
    paciente.classList.add("paciente-invalido");
  }

  if (alturaEValida && pesoEValido) {
    var imc = calculaImc(peso, altura);
    imcLinha.textContent = imc;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  var imc = peso / (altura * altura);
  return imc.toFixed(2)
}
