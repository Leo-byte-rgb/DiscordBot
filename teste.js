const axios = require('axios');

axios.get('https://economia.awesomeapi.com.br/all/USD-BRL')
.then((response) => {
    console.log(response.data.USD.high.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }));
    
})
.catch((err) => {
    console.log(err);
})



