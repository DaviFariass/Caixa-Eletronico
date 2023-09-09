var nome_usuario = prompt("Olá qual é o seu nome?")

alert("Olá " + nome_usuario + " é um prazer ter você por aqui!")

var saldo = 100.5;

//function inicio() { var escolha = parseInt(prompt('Selecione uma opção 1.) Saldo 2.) Depósito 3.) Saque 4.) Sair')); if (escolha === 1) { ver_saldo(); } else if (escolha === 2) { fazer_deposito(); } else if (escolha === 3) { fazer_saque(); } else if (escolha === 4) { sair(); } else { erro(); } }
    

function inicio()
{ var escolha = parseFloat(prompt("Selecione uma opção 1.) Saldo 2.) Extrato 3.) Saque 4.) Depósito 5.) Transfêrencia 6.) Sair "));
switch (escolha) {

        case 1:
            ver_saldo();
            break;
        case 2:
            extrato();
            break;
        case 3:
            fazer_saque();
            break;
        case 4:
            fazer_deposito();
            break;
        case 5:
            transferencia();
            break;
        case 6:
            sair();
            break;
        default:
            erro();
    }
}





function ver_saldo() {
    const senhacorreta = 3589;
    const senhainserida = parseFloat(prompt("Digite a senha para acessar"))

    if (senhainserida === senhacorreta) {
        alert("Senha correta.");
        alert('Seu saldo atual é: ' + saldo);
        inicio();
    }
    
    else{
    alert("senha incorreta");
    inicio();
    }

}


function ver_saldo2() {
        
        alert('Seu saldo atual é: ' + saldo);
        inicio();
    }


function fazer_deposito() {
    
    var deposito = parseFloat(prompt('Qual o valor para depósito?'));
    
    // Not a Number --> Isso é um não-número?
        if (isNaN(deposito) || deposito === '') {
            alert('Por favor, informe um número.');
            fazer_deposito();

        }	else if (deposito <= 0){
        alert("Operação não realizada");
        fazer_deposito();

        }

        else {
        saldo += deposito;
        //saldo = saldo + deposito;
        ver_saldo();
    }
}



    function fazer_saque() {	
    
    const senhacorreta2 = "3589";
    const senhainserida2 = (prompt("Insira a senha"))
    
    if (senhainserida2 != senhacorreta2){
        alert("Senha incorreta");
        inicio();
    }

    else if (senhainserida2 === senhacorreta2){
            alert("Senha correta");
            fazer_saque2();
            
    }		
}


    function fazer_saque2()	{ 
        var saque = parseFloat(prompt('Qual o valor para saque?'))


    if (isNaN(saque) || saque === '') {
        alert("Por favor, informe um número.");
        fazer_saque2();
    } 

    else if (saque <= 0) {
    alert("Operação não realizada");
    inicio();
    }

    else if (saque > saldo) {
        alert("Operação não realizada");
        inicio();
    }
    
    else {
        saldo -= saque;
        //saldo = saldo - saque;
        ver_saldo2();
    }

    
    }


function erro() {
    alert('Por favor, informe um número entre 1 e 6.');
    inicio();
}


function transferencia()	{

    const senhacorreta4 = "3589";
    const senhainserida4 = prompt("Insira uma senha para fazer tranferências");

    if (senhainserida4 === senhacorreta4)	{
        alert("Senha correta");
        transferencia2();
    }

    else {
        alert("Senha incorreta");
        inicio();
    }
}


function transferencia2() {
    var numeroconta = parseFloat(prompt("Digite o numero da conta para transferência (somente numeros)"));
    var valorpix = parseFloat(prompt("Informe o valor que quer tranferir"));
    
    if (isNaN(numeroconta) || numeroconta === " "){
    alert("Informe um numero");
    transferencia();

} 	else if (valorpix > saldo){
        alert("Operação não realizada");
        transferencia();

}	else if (valorpix <= 0){
        alert("Operação não realizada");
        transferencia();

}	else {
    saldo -= valorpix;
    ver_saldo2();
}
}



function extrato() {
    const senhacorreta3 = 3589;
    const senhainserida3 = parseFloat(prompt("Informe a senha para acessar o extrato"));
    
    if (senhainserida3 === senhacorreta3) {
    alert("Senha correta")
    alert("-R$10,00 padarias seu zé    +R$25,00 Deposito    -R$5,00 Lojinha    -R$1.199,99 Magalu    -R$10,99 Carrefour    -R$5,00 Casa da Aliança");
    inicio();
}

    else {
        alert("Senha incorreta");
        inicio();
    }

}


function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert("Agradecemos por utilizar os serviços do Daviações, " + nome_usuario + " foi um prazer ter você por aqui!")
        window.close();
    } 
    
    else {
        inicio();
    }

}

inicio();