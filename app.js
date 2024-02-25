
console.log('Boas vindas ao jogo do mundo secreto');
let numeroMaximo = 101;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1 );
let chute 
let tentativas = 1;
//enquanto o chute for diferente
while(chute != numeroSecreto){
    chute   = prompt(`Digite um numero de 1 a ${numeroMaximo}`);
    console.log('Boas vindas');


    // Se o chute for igual ao numero secreto
    if(chute == numeroSecreto ){
        break;
    }else{
        if(chute > numeroSecreto){
             alert(`Este ${chute} é maior que o codigo secreto`);
        }else{
           if(chute < numeroSecreto){
                 alert(`Este ${chute} é menor que o codigo secreto`);
        }
 
    }
    // tentativas = tentativas + 1
    tentativas++;
}
}
//if(tentativas > 1){
  //  alert(`Voce realizou ${tentativas} tentativas`);
//}else{
  //  alert(`Voce realizou ${tentativas} tentativa`);
//}

// Operador ternário
let palavraTentativa = tentativas > 1? 'tentativas': 'tentativa';
      alert(`isso aí! Vc descobriu o codigo secreto ${numeroSecreto} e fez ${tentativas} ${palavraTentativa}`); 
    