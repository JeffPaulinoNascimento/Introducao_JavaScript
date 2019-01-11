//Busca os pacientes via AJAX, requisição assincrona.

var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function() {
  console.log("buscando pacientes...");

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
  xhr.addEventListener("load", function() { //xhr ao carregar o request faça algo

    var erroAjax = document.querySelector("#erro-ajax");
    if (xhr.status == 200) {
        erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta); // o parse vai parsear o JSON e tranformar em um objeto de javascritp
      pacientes.forEach(function(paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    }else{
        console.log(xhr.status);
        console.log(xhr.responseText);

        erroAjax.classList.remove("invisivel");        
    }
    
  });
  xhr.send();
});
