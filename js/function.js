//

function CopyEmail(){
    let text=document.getElementById('TextEmail');
    let button=document.getElementById('CopyEmail');

    navigator.clipboard.writeText(text.textContent);
    document.getElementById("CopyEmail").style.color="black"
    document.getElementById("CopyEmail").style.fontSize="12px"
    document.getElementById("CopyEmail").innerHTML="¡Copiado!";
    setTimeout(() => {
        document.getElementById("CopyEmail").innerHTML="<i class='fa fa-clone'></i>";  
    },[1500] )
}

function CopyPhone(){
    let text=document.getElementById('TextPhone');
    let button=document.getElementById('CopyPhone');

    navigator.clipboard.writeText(text.textContent);
    document.getElementById("CopyPhone").style.color="black"
    document.getElementById("CopyPhone").style.fontSize="12px"
    document.getElementById("CopyPhone").innerHTML="¡Copiado!";
    setTimeout(() => {
        document.getElementById("CopyPhone").innerHTML="<i class='fa fa-clone'></i>";  
    },[1500] )

}

//
const datos = `{
    "nombre": "GUILLERMO RODRIGUEZ",
    "fecha":"05/09/1990",
    "nacionalidad":"Buenos Aires, Argentina",
    "email":"guillerod@example.com",
    "cel":"+54 9 1187427422"
}`
const obj = JSON.parse(datos); 

document.getElementById("fecha").innerHTML = obj.fecha;
document.getElementById("nacionalidad").innerHTML = obj.nacionalidad;
document.getElementById("TextEmail").innerHTML = obj.email;
document.getElementById("nombre").innerHTML = obj.nombre;
document.getElementById("TextPhone").innerHTML = obj.cel;

//

let esconderBTN = document.getElementById('HideBTN');
let esconderT = document.getElementById('HideText')

esconderBTN.addEventListener('click',ShowText);

function ShowText() {
    HideText.classList.toggle('showme');
    if(HideText.classList.contains('showme')){
        HideBTN.innerHTML = 'Leer Menos';
    }
    else{
        HideBTN.innerHTML = 'Leer Más';
    }
}

//

const audio = new Audio();
audio.src = "https://www.fesliyanstudios.com/play-mp3/387";

//

function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
    }
  }
  
  //