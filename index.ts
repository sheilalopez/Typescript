import http from 'http';
import Server from './server';
const port = 3000;
Server.set('port', port);

const server = http.createServer(Server);
server.listen(port);
server.on('listening', onListening);

function onListening() {
    const addr = server.address();
}