const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('plantWaterTime', () => {
  console.log('Its time to water the plants!');
  setTimeout(()=>{
    console.log('Watering the plants...');
  },5000)
});
console.log("Event is running");
myEmitter.emit('plantWaterTime');
console.log("Event is still running");