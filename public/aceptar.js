const socket = io()
const Ti = document.getElementById("Ti")
socket.on("Tick",(text)=>{
    Ti.textContent = "Ticket: " + text
    console.log(text);
})
