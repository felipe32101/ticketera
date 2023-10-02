const socket = io();

socket.on('connect', () => {
    console.log("Conectado a Socket.IO en aceptar.js");
});
socket.on('nuevo-ticket', (data) => {
    console.log("Nuevo ticket recibido en aceptar.js:", data.numero);

    const lblTicket = document.querySelector('small');
    lblTicket.innerText = "Ticket " + data.numero;
});
