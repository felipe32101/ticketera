const numerosSeleccionados = [];

document.getElementById("generarTicket").addEventListener('click', function(){
    let nuevaPest = window.open("ticketera.html")
    nuevaPest.addEventListener("load", function (){
        let contador = 0    
        nuevaPest.document.getElementById('generarTickets').addEventListener("click", function(){
            contador++;
            let text = nuevaPest.document.getElementById("numero")
            text.textContent =+ contador
        })
    })
})

document.getElementById("pantalla").addEventListener('click', function(){
    let nuevaPest = window.open("pantallaPublico.html")
})

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