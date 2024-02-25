let porcentagemDesconto = 0;
let quantidadeMilhas = prompt('diigite as milhas');
if(quantidadeMilhas > 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
    alert('voce ganhou  '+ porcentagemDesconto+' de descontos');
} else {
    if(quantidadeMilhas > 5000){
    porcentagemDesconto = porcentagemDesconto + 10;
    alert('voce ganhou  '+ porcentagemDesconto+' de descontos');
    }

    alert('voce tem'+porcentagemDesconto+ 'de descontos');

}