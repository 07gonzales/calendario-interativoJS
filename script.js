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
            let td = calendar.getElementsByTagName('td');
            td.style.backgroundColor = color;
        }else{
            alert("Favor informar uma data cosntante no calendário");
        }  
    }

    var elementos = document.querySelectorAll('td');
}