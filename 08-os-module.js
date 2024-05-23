const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);

//Method returns the system uptime in seconds.
console.log(`System's uptime time is ${os.uptime()} seconds.`)

const currentOS = {
  name : os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem()
}
console.log(currentOS);