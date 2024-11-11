import { logEvents } from './logEvents.js';
import eventEmitter from 'events';

// const eventEmitter = require("events");

class MyEmitter extends eventEmitter {}

//      Initialize Object
const myEmitter = new MyEmitter();

//     Event Listener
myEmitter.on('log', (msg) => {
	logEvents(msg);
});

setTimeout(() => {
	myEmitter.emit('log', 'Log Event Emitted!');
}, 1000);
