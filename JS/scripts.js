function validacaoPedido(){
    const n1 = "design de sobrancelha"
    const n2 = "design com henna"
    const n3 = "depilação de buço"
    const n4 = "depilação meia perna"
    const n5 = "depilação perna completa"
    const n6 = "depilação axila"
    const n7 = "depilação virilha"
    const n8 = "depilação virilha completa"
    const n9 = "depilação íntima completa"
        let nServico = document.getElementById("servico").value
        if (nServico == 1){
            window.location.href = "https://wa.me/5581986487802/?text=Olá,+gostaria+de+agendar+"+n1;
        }
        else if(nServico == 2){
            window.location.href = "https://wa.me/5581986487802/?text=Olá,+gostaria+de+agendar+"+n2;
        }
        else if(nServico == 3){
            window.location.href = "https://wa.me/5581986487802/?text=Olá,+gostaria+de+agendar+"+n3;
    
        }
        else if(nServico == 4){
            window.location.href = "https://wa.me/5581986487802/?text=Olá,+gostaria+de+agendar+"+n4;
            
        }
        else if(nServico == 5){
            window.location.href = "https://wa.me/5581986487802/?text=Olá,+gostaria+de+agendar+"+n5;
            
        }
        else if(nServico == 6){
            window.location.href = "https://wa.me/5581986487802/?text=Olá,+gostaria+de+agendar+"+n6;
            
        }
        else if(nServico == 7){
            window.location.href = "https://wa.me/5581986487802/?text=Olá,+gostaria+de+agendar+"+n7;
            
        }
        else if(nServico == 8){
            window.location.href = "https://wa.me/5581986487802/?text=Olá,+gostaria+de+agendar+"+n8;
            
        }
        else if(nServico == 9){
            window.location.href = "https://wa.me/5581986487802/?text=Olá,+gostaria+de+agendar+"+n9;        
        }
        else{
            alert ("Serviço invalido, verifique o serviço desejado na tabela e tente novamente")
        }
}

function enviarDuvida() {
    let nome = document.getElementById("nomeUsuario").value  // Puxando o valor do input nome do usuario 
    let pergunta = document.getElementById("perguntaUsuario").value // puxando o valor da pergunta do usuario

    let nomeFormatado = nome.replace(/ /g, "+") /* Formatando o nome do usuario para se o mesmo informe o seu nome completo ou insira algum espaço */
    let perguntaFormadata = pergunta.replace(/ /g, "+")  /* Formatando a pergunta do usuario para remover todos os espaços colocar o "+" no lugar */

    window.location.href = "https://wa.me/5581986487802/?text=Olá,+meu+nome+é+" + nomeFormatado + ", Duvida: (" + perguntaFormadata + ")"; // Direcionamento para o chat para tirar a duvida 

}