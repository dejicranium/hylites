
module.exports = {
    getLocation() {
        return window.location;
    },
    
    getCurrentTimeStamp(){
        return new Date();
    },
    
    generateSessionId(){
        const id  =  '_' + Math.random().toString(36).substr(2, 9) + new Date().toISOString().split('-').join('').split(':').join('').split('.').join('')
        return {id}
    },

    getMinutesDifference(time2) {
        console.log('time 2 ' + time2 )
        let elapsed = new Date() - time2;
        console.log('elapsed ' + elapsed)
        return Math.round(elapsed/60000)  
    }
    
}