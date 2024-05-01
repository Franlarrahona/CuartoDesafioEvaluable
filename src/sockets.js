import { Server } from 'socket.io';

const initSocket = (httpServer) => {
    
    const socketServer = new Server(httpServer);
    
    socketServer.on('connection', socket => {

        socket.on('addProducts', productData =>{
            console.log('nuevo producto agregado',productData);
            socketServer.emit('addProduct', productData);
        })    
    });

    return socketServer;
}

export default initSocket;