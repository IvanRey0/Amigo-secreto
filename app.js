let amigos=[];

function agregarAmigo(){
    const input= document.getElementById("amigo");
    const nombre = input.value.trim()


if (nombre === ""){
    alert("por favor ingresa un nombre");
    return;
}

//Agregar nombre a array
amigos.push(nombre);

//mostar en lista virtuañ
const lista= document.getElementById("listaAmigos");
const nuevoElemento=document.createElement("li");
nuevoElemento.textContent=nombre;
lista.appendChild(nuevoElemento);

input.value="";
}