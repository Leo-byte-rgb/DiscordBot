const Pokemon = require('../commands/UarePokemon');
const dolarValue = require('../commands/dolarValue');
const catchorro = require('../commands/catchorro')
const gatito = require('../commands/gatito')

module.exports = function(message) {
    if (message.author.bot) return;

    if (message.content === '!comandos') message.channel.send('');
    if (message.content === '!pokemon')  Pokemon(message);  
    if (message.content === '!dolar')  dolarValue(message);  
    if (message.content === '!catioro')  catchorro(message);  
    if (message.content === '!gatito')  gatito(message);  

  

}