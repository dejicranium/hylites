const minutesDifference = require('../utils/helpers').getMinutesDifference;
const createNewSession = require('./create');
const updateSession = require('./update');
const determineSessionRefresh = require('./determine');

module.exports = () => { 
    setInterval(() => {
        determineSessionRefresh();
    },5000)    
}
