// Código para tornar o calendário interativo com função declarativa

function colorirDia(){
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');

    if(!days) {
        alert("Favor, informar um dia existente do calendário!");
    }
    else{
        if((days>0) && (days<=30)){
            let td = calendar.getElementsByTagName('td')[parseInt(days)+1];
            td.style.backgroundColor = color;
        }else{
            alert("Favor informar uma data cosntante no calendário");
        }  
    }

    var elementos = document.querySelectorAll('td');

    var contadorAzul=0, contadorVerde=0, contadorRosa=0, contadorRoxo=0;
    
    for(let i=0; i < elementos.length; i++){
        var estilo = window.getComputedStyle(elementos[i]);
        var corEstilo = estilo.backgroundColor;

        if(corEstilo === "rgb(173, 216, 230)" || corEstilo === "lightblue") {
            contadorAzul++;
        } else if(corEstilo === "rgb(152, 251, 152)" || corEstilo === "palegreen"){
            contadorVerde++;
        } else if (corEstilo === "rgb(255, 182, 193)" || corEstilo === "lightpink") {
            contadorRosa++;
        } else if (corEstilo === "rgb(106, 90, 205)" || corEstilo === "slateblue") {
            contadorRoxo++;
        }
    }
    document.getElementById("contadorAzul").innerText = contadorAzul;
document.getElementById("contadorVerde").innerText = contadorVerde;
document.getElementById("contadorRosa").innerText = contadorRosa;
document.getElementById("contadorRoxo").innerText = contadorRoxo;
}


