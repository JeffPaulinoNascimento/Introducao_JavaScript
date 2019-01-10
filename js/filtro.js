AULA 09 01 AJAX

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
      var expressao = new RegExp(this.value, "i"); // o "i" se a busca é caseSensitive ou Insensitive(aceita maiuscula ou minusculo na busca)
      if (!expressao.test(nome)) { //estou testando se no nome tem um pedacinho do this.value da expressão regular
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    }
  }else{
      for(var i = 0; i < pacientes.length; i++){
          var paciente = pacientes[i];
          paciente.classList.remove("invisivel");
      }
  }
});


