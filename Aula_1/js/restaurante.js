let nomeCliente = prompt("Digite o nome do Cliente");
let numeroDaMesa = prompt("Digite o N° da mesa");
let creditoCliente = 0;
let debitoCliente = 0;
let conta =
  "-------------------------------- + Comanda + --------------------------";

conta = conta + "<br> Cliente : " + nomeCliente;
conta = conta + "<br> N° da mesa : " + numeroDaMesa;
document.write("<br>" + conta);

function creditoClienteConta() {
    let deseja = prompt("S para sim e N para Nao : ");
  
    if (deseja == "S" || deseja == "s") 
    {
      creditoCliente = parseFloat(prompt("Quanto de Credito"));
    } 
    else 
        creditoCliente = 0;
}
  
function somaValoresPedido() {
  let valorDoPedido = parseFloat(prompt("Digite o valor do pedido"));
  debitoCliente = valorDoPedido + debitoCliente;
  
  let deseja = prompt("Deseja tirar o valor do credito: ");
  if (deseja == "S" || deseja == "s") {
    debitoCliente = debitoCliente - creditoCliente
    if(debitoCliente <= 0){
        creditoCliente = debitoCliente
        debitoCliente = 0
        creditoCliente *= -1
        conta = conta + "<br> Sobrou tal : " + creditoCliente;
        document.getElementById("conta").innerHTML = conta;
    }
  }
  else 
    debitoCliente = total
  
  conta = conta + "<br> Valor a pagar : " + debitoCliente;
  document.getElementById("conta").innerHTML = conta;
}

