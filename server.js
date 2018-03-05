const net = require('net');

const server = net.createServer((socket) => {
    // Identify this client
    socket.name = socket.remoteAddress + ":" + socket.remotePort 
    
    //console.log(socket);
    socket.write("Welcome");

    socket.on('connect', () => {
        console.log("Connected");
        socket.write("Welcome");
    })

    
    socket.on('data', (data) => {
        socket.write("Welcome");
        console.log(data.toString());
       // console.log(socket);
    });

    socket.on('error', function(err) {
        console.log(err)
     })
    


    
})
server.listen(3005, () => {
    console.log("Server Running...");
});