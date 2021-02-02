const dotenv = require('dotenv').config();
const axios = require('axios');
const TokenPokemon = process.env.POKE_API;
const TokenImage = process.env.IMAGE_API;
const Discord = require('discord.js');


function getPokemon() {
    let random = Math.floor(Math.random() * 150 + 1);
    
    return axios.get(`${TokenPokemon}/${random}`)
}


module.exports = async function printEmbed(message) {
    const response = await getPokemon();
    const channel = message.channel;
    const embed = new Discord.MessageEmbed()
        .setColor('#90ee90') // altera a cor da embed
        .setAuthor(message.member.user.tag, message.member.user.displayAvatarURL()) // pega a tag e o display
        .setTitle(`TU ÉS UM ${response.data.name.toUpperCase()}`) //titulo da embed
        .setImage(`${TokenImage}/${response.data.id}.png`) //imagem da embed
        .setDescription(`
        ${message.author}, olhe os dados do seu pokemon!
        Número: ${response.data.id}
        Tipo: ${response.data.types.map(item => ' ' + item.type.name)}
        Peso: ${response.data.weight / 10}KG
        Altura: ${response.data.height / 10}M        
        `)
        .setThumbnail(message.member.user.displayAvatarURL( { dynamic: true, format: "png", size: 1024}))
        .setFooter('ID do usuário ' + message.member.user.id)
        .setTimestamp();
        await channel.send(embed);
}