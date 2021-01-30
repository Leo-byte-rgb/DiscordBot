const WhichPokemon = require('../commands/UarePokemon');

module.exports = function(message) {
    if (message.content === '!comandos') message.channel.send('Comandos vão aqui:');
    if (message.content === '!pokemon')  message.channel.send(`${message.author}, TU ÉS UM ${WhichPokemon()}`);  
}