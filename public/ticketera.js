const socket = io()

let contador = parseInt(localStorage.getItem('ticketCounter')) || 0;
const text = document.getElementById("numero")

document.getElementById('generarTickets').addEventListener("click", function(){
        contador++;
        text.textContent =+ contador
        socket.emit("Ticket",text)
        console.log(text);
    })
