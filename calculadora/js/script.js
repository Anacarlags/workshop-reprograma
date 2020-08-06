var q_ganho = document.querySelector("#ganho-mes");

var q_horas = document.querySelector("#horas-dia");

var valor = document.querySelector("#resposta");

function calcularValorHora(){
    var horas_mes = q_horas.valueAsNumber * 22;
    var valor_hora = (q_ganho.valueAsNumber/horas_mes).toFixed(2);
    valor.textContent = 'R$' + valor_hora;
}
 