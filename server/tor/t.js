const axios = require('axios');

const googlePage = async () => {
    axios.get('http://localhost:3000').then(res => res.data);
    await new Promise(r => setTimeout(r, 2000));
    console.log(googlePage.data)
}