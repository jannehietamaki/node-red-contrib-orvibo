const Orvibo = require('./Orvibo');
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

let connection;

const orvibo = new Orvibo({
  ORVIBO_KEY: 'khggd54865SNJHGF',
});

const handleAction = (ws) => (message) => {
  const msg = JSON.parse(message);
  console.log('action', msg);
  orvibo.sendOrder(msg.uid, msg.order, msg);
};

wss.on('connection', (ws) => {
  connection = ws;
  ws.on('message', handleAction(ws));
});

const send = (data) => {
  if (connection) {
    connection.send(JSON.stringify(data));
  }
}

orvibo.on('plugConnected', (data) => {
  send({ type: 'connected', data});
  console.log('connected', data);
});

orvibo.on('plugStateUpdated', (data) => {
  send({ type: 'state', data});
  console.log('state', data);
});

orvibo.on('gotHeartbeat', (data) => {
  send({ type: 'seen', data});
  console.log('seen', data);
});

orvibo.on('plugDisconnected', (data) => {
  send({ type: 'disconnect', data});
  console.log('disconnect', data);
});

orvibo.on('plugDisconnectedWithError', (error) => {
  send({ type: 'error', data});
  console.log('error', data);
});

orvibo.startServer();
