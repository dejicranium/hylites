const minutesDifference = require('../utils/helpers').getMinutesDifference;
const createNewSession = require('./create');
const updateSession = require('./update');

module.exports = () => {
    const name = 'bpzlastsessionresolve';
        const lastresolve = localStorage.getItem(name); // timestamp of last time session id was updated
        if (lastresolve){
            console.log('last resolve is ' + lastresolve)
            const minutes_interval = minutesDifference(lastresolve);
            console.log(minutes_interval);
            if (minutes_interval > 5) {
               createNewSession();
            }
            else {
                updateSession()
            }
        }

        else {
            createNewSession();
        }
 
}