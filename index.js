const dotenv = require('dotenv').config();
const token = process.env.DC_TOKEN;
const Discord = require('discord.js');
const client = new Discord.Client();
const addNewMember = require('./commands/guildMemberAdd')

client.login(token)

client.on("ready", () => {
    console.log('Estou online!!')
})

client.on("guildMemberAdd", addNewMember);