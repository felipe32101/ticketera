document.getElementById("generarTicket").addEventListener('click', function(){
    let nuevaPest = window.open("ticketera.html")
    nuevaPest.addEventListener("load", function (){
        let contador = 0
        nuevaPest.document.getElementById('generarTickets').addEventListener("click", function(){
            contador++;
            let text = nuevaPest.document.getElementById("numero")
            text.textContent = +contador
        })
    })
})

document.getElementById("pantalla").addEventListener('click', function(){
    let nuevaPest = window.open("pantallaPublico.html")
})