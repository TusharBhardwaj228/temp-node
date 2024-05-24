const EventEmitter = require('events');

const customEvent = new EventEmitter();

customEvent.on('response', (name, number)=>{
  console.log(` Hi ${name} ${number}, first event here`);
});

customEvent.on('response', ()=>{
  console.log('Hi, second event here');
});

customEvent.emit('response' ,'john', 34);