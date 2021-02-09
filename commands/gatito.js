const dotenv = require('dotenv').config();
const tokenGatito = process.env.API_GATITO;
const axios = require('axios');
const Discord = require('discord.js');


function getGatoImg() {
    return axios.get(tokenGatito);
}

module.exports = async function(message) {
    const response = await getGatoImg();
    const channel = message.channel;
    const embed = new Discord.MessageEmbed()
        .setColor('#90ee90') // altera a cor da embed
        .setAuthor(message.member.user.tag, message.member.user.displayAvatarURL()) // pega a tag e o display
        .setTitle(`${message.member.user.tag} aqui está seu gatito!`) //titulo da embed
        .setImage(`${response.data[0].url}`) //imagem da embed
        .setThumbnail(message.member.user.displayAvatarURL( { dynamic: true, format: "png", size: 1024}))
        .setFooter('ID do usuário ' + message.member.user.id)
        .setTimestamp();
        await channel.send(embed);
}