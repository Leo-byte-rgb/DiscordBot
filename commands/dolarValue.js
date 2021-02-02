const dotenv = require('dotenv').config();
const tokenDolar = process.env.API_DOLAR;
const axios = require('axios');

module.exports = function(message) {
    axios.get(tokenDolar)
    .then((response) => {
        message.channel.send(`${message.author}, querendo sofrer mais um dia, hein? Hoje o dólar está ${new Intl.NumberFormat('br-BR', { style: 'currency', currency: 'BRL' }).format(response.data.USD.high)}`)

    }).catch((err) => {
        message.channel.send(`${message.author}, desculpe mas não foi possível obter o valor da moeda ${err}`)
    })
}