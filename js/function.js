function copiarE(){
    let text=document.getElementById('texE');
    let button=document.getElementById('copiarE');

    navigator.clipboard.writeText(text.textContent);
    document.getElementById("copiarE").innerHTML="¡Copiado!";
}

function copiarP(){
    let text=document.getElementById('texP');
    let button=document.getElementById('copiarP');

    navigator.clipboard.writeText(text.textContent);
    document.getElementById("copiarP").innerHTML="¡Copiado!";
}
