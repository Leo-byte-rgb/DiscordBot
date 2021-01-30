const dotenv = require('dotenv').config();
const token = process.env.DC_TOKEN;
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(token)



module.exports = async function guildMemberAdd(member) {
    const svID = process.env.SV_ID;
        const chID = process.env.CH_ID;
        const guild = client.guilds.cache.get(svID) // id do servidor
        const channel = client.channels.cache.get(chID) // id do canal
        const embed = new Discord.MessageEmbed()
        .setColor('#FFFFFF') // altera a cor da embed
        .setAuthor(member.user.tag, member.user.displayAvatarURL()) // pega a tag e o display
        .setTitle(`Boas-vindas`) //titulo da embed
        .setImage('https://cdn.lowgif.com/full/c55c983bbdae6934-pt-meme-gif-find-share-on-giphy.gif') //imagem da embed
        .setDescription(`${member.user}, bem-vindo ao servidor ${guild.name}! Atualmente contamos com ${member.guild.memberCount} Nerds :)`)
        .setThumbnail(member.user.displayAvatarURL( { dynamic: true, format: "png", size: 1024}))
        .setFooter('ID do usuário' + member.user.id)
        .setTimestamp();
        await channel.send(embed);
        
};