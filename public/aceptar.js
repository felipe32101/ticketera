const socket = io()
const Ti = document.getElementById("Ti")
socket.on("Tick",(Tickets)=>{
    Ti.textContent = "Ticket: " + Tickets
    console.log(Tickets);
})
