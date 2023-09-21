const numerosSeleccionados = [];

let contador = parseInt(localStorage.getItem('ticketCounter')) || 0;

document.getElementById("generarTicket").addEventListener('click', function(){
    let nuevaPest = window.open("ticketera.html");
})

document.getElementById("pantalla").addEventListener('click', function(){
    let nuevaPest = window.open("pb.html");
});

document.getElementById("aceptar").addEventListener('click', function(){
    const numeroEscritorio = document.getElementById("input").value;

    if (numeroEscritorio.trim() === "" || parseInt(numeroEscritorio) === 0) {
        alert("Por favor, ingrese un número de escritorio válido.");
    } else if (numerosSeleccionados.includes(numeroEscritorio)) {
        alert("Este número de escritorio ya ha sido seleccionado. Por favor, elija otro número.");
    } else {
        numerosSeleccionados.push(numeroEscritorio);
        let nuevaPest = window.open(`aceptar.html?numero=${numeroEscritorio}`);
    }
});
