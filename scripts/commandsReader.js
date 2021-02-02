const Pokemon = require('../commands/UarePokemon');
const dolarValue = require('../commands//dolarValue');
module.exports = function(message) {
    if (message.content === '!comandos') message.channel.send('!pokemon - Você virará um pokemon');
    if (message.content === '!pokemon')  Pokemon(message);  
    if (message.content === '!dolar')  dolarValue(message);  

}