var v_horas = document.querySelector("#valor-hora");
var h_projeto = document.querySelector("#horas-projeto");
var valor_projeto = document.querySelector("#resposta");

function calcular(){

  var valor_p = (v_horas.valueAsNumber * h_projeto.valueAsNumber).toFixed(2);
   valor_projeto.textContent = 'R$' + valor_p;
}