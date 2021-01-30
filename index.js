const dotenv = require('dotenv').config();
const token = process.env.DC_TOKEN;
const Discord = require('discord.js');
const client = new Discord.Client();

//COMMANDS REQUIRES//
const addNewMember = require('./commands/guildMemberAdd')
const commandReader = require('./scripts/commandsReader');
client.login(token)

client.on("ready", () => {
    console.log('Estou online!!')
})

// BOAS VINDAS AO SERVIDOR
client.on("guildMemberAdd", addNewMember);

client.on('message', commandReader);