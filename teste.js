const axios = require('axios');

async function haha() {
    const request =axios.get('https://economia.awesomeapi.com.br/json/USD-BRL')
.then((response) => {
     return response.data.USD.high;
})
.catch((err) => {
    return err;
})

 return request.data.USD;
}


console.log(haha())