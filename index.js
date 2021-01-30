const dotenv = require('dotenv').config();
const token = process.env.DC_TOKEN;
const Discord = require('discord.js');
const client = new Discord.Client()

client.login(token)