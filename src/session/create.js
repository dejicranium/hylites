const updateSessionStamp = require('./update');
const generateSessionId = require('../utils/helpers/').generateSessionId;

function createNewSession() {
    console.log('creating')
    localStorage.setItem('bgpzsessionid', generateSessionId()['id']);
    updateSessionStamp();
}


module.exports = createNewSession;