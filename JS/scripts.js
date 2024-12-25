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
    