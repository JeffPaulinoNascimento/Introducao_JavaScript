CONTINUAR AULA 08 03

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log("digitaram no campo");
    var pacientes = document.querySelectorAll(".paciente");
    pacientes.forEach(function(paciente) {
        var paciente = pacientes;
        var tdNome = paciente.querySelector(".info-nome");
        var nome = paciente.textContent;
    });
});