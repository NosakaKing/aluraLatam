let jugadores = [];

let btnAgregarJugador = document.getElementById("btnAgregar");
let btnSortearAmigo = document.getElementById("btnSortear");
let inputJugador = document.getElementById("nombre");
let listaJugadores = document.getElementById("listPLayer");
let resultadoSorteo = document.getElementById("resultado"); 
let contenedorBotones = document.getElementById("contenedorBotones"); 

let btnReiniciarJuego = document.createElement("button");
btnReiniciarJuego.textContent = "¡Volver a jugar?";
btnReiniciarJuego.style.display = "none"; 
btnReiniciarJuego.addEventListener("click", reiniciarJuego);
btnReiniciarJuego.id = "btnReiniciar";
contenedorBotones.appendChild(btnReiniciarJuego);

btnAgregarJugador.addEventListener("click", agregarJugador);
btnSortearAmigo.addEventListener("click", sortearAmigo);

// Bloquear teclas que no sean letras en el input
inputJugador.addEventListener("keypress", function(event) {
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
    if (!regex.test(event.key)) {
        event.preventDefault();
    }
});

function agregarJugador() {
    let jugador = inputJugador.value.trim();
    
    // Expresión regular para que no permita números ni caracteres raros
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
    
    if (jugador === "" || !regex.test(jugador)) {
        alert("Por favor, escribe un nombre de jugador válido, sin números ni símbolos.");
        inputJugador.value = "";
        return;
    }
    
    jugadores.push(jugador);
    actualizarListaJugadores(); 
    inputJugador.value = "";
}

function actualizarListaJugadores() {
    listaJugadores.innerHTML = "";
    listaJugadores.style.display = "block";
    resultadoSorteo.textContent = "";
    resultadoSorteo.style.display = "none"; 
    
    jugadores.forEach(jugador => {
        let li = document.createElement("li"); 
        li.textContent = jugador; 
        listaJugadores.appendChild(li);
    });
}

function sortearAmigo() {
    if (jugadores.length === 0) {
        alert("No hay jugadores en la lista para sortear. Agrega al menos un jugador.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * jugadores.length);
    
    listaJugadores.style.display = "none";
    
    resultadoSorteo.innerHTML = `<strong>El amigo secreto es: ${jugadores[indiceAleatorio]}</strong>`;
    resultadoSorteo.style.display = "block";
    
    btnAgregarJugador.style.display = "none";
    btnSortearAmigo.style.display = "none";
    
    btnReiniciarJuego.style.display = "block";
    btnReiniciarJuego.style.marginTop = "10px"; 
}

// Función para reiniciar el juego
function reiniciarJuego() {
    jugadores = [];
    actualizarListaJugadores();
    resultadoSorteo.textContent = "";
    resultadoSorteo.style.display = "none"; 
    listaJugadores.style.display = "block";
    btnAgregarJugador.style.display = "block";
    btnSortearAmigo.style.display = "block";
    btnReiniciarJuego.style.display = "none";
}