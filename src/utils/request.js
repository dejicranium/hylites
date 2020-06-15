const axios = require('axios');
const baseurl = process.env.BASE_URL ? process.env.BASE_URL : 'http://localhost:1220/api/v1';

function serialize(object) {
    let result = [];
    Object.keys(object).forEach(key => {
        if (object[key])  
            result.push(`${key.toString()}=${object[key].toString()}`);

    })
    return `?${result.join('&')}`
}

module.exports = async (data) => {
    const bgpzapisecret = window.localStorage['bgpzapisecret'];
    if (bgpzapisecret) {
        data.headers = {
            Authorization: `Bearer ${bgpzapisecret}`
        }
    }
    data.url = baseurl + data.url;
    if (data.query) 
        data.url = data.url + serialize(data.query);
    return await axios({...data});
}
