const dotenv = require('dotenv').config();
const tokenCatchorro = process.env.API_CATCHORRO;
const axios = require('axios');
const Discord = require('discord.js');


function getCatchorroImg() {
    return axios.get(tokenCatchorro);
}

module.exports = async function(message) {
    const response = await getCatchorroImg();
    console.log(response.data.message);
    const channel = message.channel;
    const embed = new Discord.MessageEmbed()
        .setColor('#90ee90') // altera a cor da embed
        .setAuthor(message.member.user.tag, message.member.user.displayAvatarURL()) // pega a tag e o display
        .setTitle(`${message.member.user.tag} aqui está seu catioro!`) //titulo da embed
        .setImage(`${response.data.message}`) //imagem da embed
        .setThumbnail(message.member.user.displayAvatarURL( { dynamic: true, format: "png", size: 1024}))
        .setFooter('ID do usuário ' + message.member.user.id)
        .setTimestamp();
        await channel.send(embed);
}