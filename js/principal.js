var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];

      var tdPeso = paciente.querySelector(".info-peso");
      var peso = tdPeso.textContent;

      var tdAltura = paciente.querySelector(".info-altura");
      var altura = tdAltura.textContent;

      var imcLinha = paciente.querySelector(".info-imc");

       var pesoEValido = true;
       var alturaEValida = true;

       if(peso <= 0 || peso >= 500){
         pesoEValido = false;
         imcLinha.textContent = "Peso invalido!";
       }
       if(altura <= 0 || altura >= 3.00){
         alturaEValida = false;
         imcLinha.textContent = "Altura Invalida!";
       }

      if(alturaEValida && pesoEValido){
        var imc = peso / (altura * altura);
        imcLinha.textContent = imc.toFixed(2);
      }
}
