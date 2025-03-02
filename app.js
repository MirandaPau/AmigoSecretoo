// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // creo el array

function agregarAmigo() {
    let input = document.getElementById("amigo");//obtengo el nombre ingresado por el usuario
    let nombre = input.value.trim();//elimina cualqier espacio en blnaco que s epueda colocra por accidente
    
    if (nombre === "") {// si no hay ningun nombre cargado
        alert("No ha cargado ningun nombre, por favor ingrese un nombre ");
        return;// devuelve 
    }
    
    amigos.push(nombre);// agrego el nombre
    input.value = "";//limpio el campo
    mostrarLista();//llamo a la funcion 
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");//obtine el id 'listaAmigos'
    lista.innerHTML = "";//limpiamos el contenido antes de mostrar 
    
    for (let i = 0; i < amigos.length; i++) {// recorremos el array
        let li = document.createElement("li");// se crea un nuev elemento de lista
        li.textContent = amigos[i];  //asigna el nombre actual del array al contenido del elemento <li>. 
        lista.appendChild(li);//agrega un elemento
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {//sino hay nombres en el array
        alert("Agrega nombres antes de sortear");
        return;//devuelve
    }
    
    let indice = Math.floor(Math.random() * amigos.length);//genera un nombre aletorio
    let resultado = document.getElementById("resultado");//obtengo el elemento
    resultado.innerHTML =  `<li>El amigo secreto es: <strong>${amigos[indice]}</strong></li>`;//muestra el nombre del amigo sorteado
}
