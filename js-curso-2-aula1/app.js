    let listaDenumerosSorteados = [];
    let numeroSecreto = gerarNumeroAleatorio();
    let tentativas = 1;

function ExibirTextonatela (tag, Texto)  {
    let campo = document.querySelector(tag);
    campo.innerHTML = Texto;

    }

    function exibirMensagemInicial(){
        ExibirTextonatela('h1','Jogo do numero secreto' );
        ExibirTextonatela('p','Escolha um numero entre 1 e 10');
    }
          exibirMensagemInicial();

        function verificarChute ()  {
            let chute = document.querySelector('input').value;
            console.log(chute == numeroSecreto);

                if (chute == numeroSecreto){
                    ExibirTextonatela('h1','acertou');
                    let palavratentativas = tentativas > 1? 'tentativas': 'tentativa';
                    let mensagemTentaivas = ` voce descobriu numero secreto com ${tentativas} ${palavratentativas}!`;
                    ExibirTextonatela('p',mensagemTentaivas);
                    document.getElementById('reiniciar'). removeAttribute('disabled');
            } else {
                if(chute > numeroSecreto) {
                    ExibirTextonatela('p', 'o numero secreto e menor ');
                } else {
                    ExibirTextonatela('p', ' numero secreto e maior ');
                }
                tentativas++;
                limparCampo ();
            }
        }
    function gerarNumeroAleatorio(){
            let nuumeroEscolhido = (Math.random() * 10 + 1);
            if (listaDenumerosSorteados.includes(nuumeroEscolhido)){
                return gerarNumeroAleatorio();
            } else{
                listaDenumerosSorteados.push(nuumeroEscolhido);
                console.log(listaDenumerosSorteados);
                return nuumeroEscolhido;
            }
        }

function limparCampo(){
    chute = document.querySelector('input'); 
    chute.value = '';
}
    function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    }