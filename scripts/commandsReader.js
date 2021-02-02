const WhichPokemon = require('../commands/UarePokemon');
const dolarValue = require('../commands//dolarValue');
module.exports = function(message) {
    if (message.content === '!comandos') message.channel.send('Comandos vão aqui:');
    if (message.content === '!pokemon')  message.channel.send(`${message.author}, TU ÉS UM ${WhichPokemon()}`);  
    if (message.content === '!dolar')  dolarValue(message)  

}