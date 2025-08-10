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
input.value="";

mostrarListaAmigos();
}

function mostrarListaAmigos(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(let i=0; i<amigos.length; i++){
        const li = document.createElement("li");
        li.textContent=amigos[i];
        lista.appendChild(li);

    }
}