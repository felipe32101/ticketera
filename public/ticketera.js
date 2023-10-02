const socket = io()

let contador = parseInt(localStorage.getItem('ticketCounter')) || 0;

addEventListener("load", function (){
     const text = document.getElementById("numero");
    text.textContent = +contador; 
    document.getElementById('generarTickets').addEventListener("click", function(){
        contador++;
        let text = document.getElementById("numero")
        text.textContent =+ contador
        socket.emit("Ticket",text.textContent)
        console.log(text);
    })
})
