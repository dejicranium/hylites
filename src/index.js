const authenticate = require('./auth');
const attempSessionRefresh = require('./session/refresh');
const identifyUser = require('./session/identify');

(function() {
    bgpazz = (function() {

        let instance = {};
        let reqparams = {};
        let client = {};

    
        async function setup(APIKEY, options) {
            try {
                auth = await authenticate(APIKEY);
                instance.test_mode = auth.test;
                instance.account = auth.account;
                instance.options = options;
            }
            catch(e) {
                console.log(e);
                
            }
    
            return instance;
        }

        async function init(APIKEY, options) {
            if (!instance.account) {
                instance =  await setup(APIKEY, options);
            }
            attempSessionRefresh();
            return instance;
        }

        async function identify(data) {
            return await identifyUser(data)
        }
        
    
        return { init, identify }
    })();

    try {
        module.exports = exports = bgpazz;
     } catch (e) {

     }
})();
   


