const cowsay = require('cowsay');

const myInfo = require('./information');

const message = `Hi, I'm ${myInfo.nom} from ${myInfo.campus}!`;
console.log(cowsay.say({ text: message }));