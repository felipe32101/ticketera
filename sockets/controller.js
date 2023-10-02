const controllerSockets = (socket) => {
    console.log(socket.id);


    const Tickets = []

    socket.on('saludar', async (mensaje, callback) => {
        console.log(`hola ${mensaje.nombre}`);
        callback( "LLego el mensaje" );
        socket.broadcast.emit( 'saluden', `Todos aluden a ${mensaje.nombre}`);
    });
    socket.on('devuelvaFecha',async(callback)=>{
        callback(new Date())
        
    })
    socket.on("Ticket",(text)=>{
        Tickets.push(text)
        socket.broadcast.emit("Tick", Tickets)
    })
}

export default controllerSockets