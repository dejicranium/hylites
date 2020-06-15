const request = require('../utils/request');

async function authenticate(API_KEY='bpztest-04a97efd0238ed1dc241dbeb309fbc66') {
    const test = API_KEY.indexOf('bpztest-') > - 1;
    window.localStorage.setItem('bgpzapisecret',API_KEY);
    const response = {test, };
    let auth; 
    try {
        auth = await request({
            url: '/auth/sdk/signin',
            method: 'post',
            headers: {Authorization: `Bearer ${API_KEY}`}
        });
        if (auth && auth.data) {
            response.account = auth.data.data;
        }
        else {
            //response.account = false
            throw new Error("Could not authenticated")
        }
        return response;
    }
    catch(e) {
        throw new Error("Could not authenticate");
    }    
}


module.exports = authenticate;