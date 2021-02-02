const dotenv = require('dotenv').config();
const axios = require('axios');
const TokenPokemon = process.env.POKE_API;


function getPokemon() {
    let random = Math.floor(Math.random() * 150 + 1);
    
    return axios.get(`${TokenPokemon}/${random}`)
}

async function write() {
    const response = await getPokemon();
    console.log(response.data.name);
}

write();