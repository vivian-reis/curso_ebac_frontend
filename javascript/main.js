const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;
/*Variável criada para confirmar se o formulário está válido ou não. */

function validaNome(nomeCompleto){
    const nomeComArray = nomeCompleto.split(' ');
    return nomeComArray.length >=2;
    /*Função criada para verificar a quantidade de espaços entre as palavras digitadas no campo nome completo do formulário.
    O retorno será verdadeiro se constarem 2 ou mais espaços. */
} 

form.addEventListener('submit', function(e){
    /**
    O evento foi criado para mudar o comportamento do botão 'submit'.
    Isso porque ao clicar no botão, o todos os dados do formulário são apagados.
    Este evento foi criado para incluir um alerta e somente recarregar a pagina quando for informado o nome completo do cliente.
     */
    e.preventDefault(); //Essa função cancela o padrão do submit.

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    //Quando incluir o document estava com o D maiúsculo e o sprit só funcionou após a correção do código.
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `O montante de <strong>R$ ${valorDeposito.value}</strong> foi depositado para o(a) cliente <strong>${nomeBeneficiario.value}</strong>, na conta <strong>${numeroContaBeneficiario.value}</strong> com sucesso!`

    formEValido = validaNome(nomeBeneficiario.value)
    if(formEValido){
        const containerMenssagemSucesso = document.querySelector('.sucess-message');
        containerMenssagemSucesso.innerHTML = mensagemSucesso;

        containerMenssagemSucesso.style.display =  'block';


        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else{
        nomeBeneficiario.style.border = '1px solid red';

        document.querySelector('.error-message').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if(!formEValido){
        nomeBeneficiario.classList.add('error');
        //nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});

