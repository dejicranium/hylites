
module.exports = async (data) => {
    const request = require('../utils/request');
    const determineSession =  require('./determine');
    const getSession = require('./get');
    

    if (!data.identifier) throw new Error("Identifier not provided");


    // see if session should be refreshed;
    determineSession();

    const normalized_data = {unique_id: data.unique_id, identifier: data.identifier, meta: {}};
    
    Object.keys(data).forEach(key=> {
        if (!normalized_data[key]) {
            normalized_data['meta'][key] = data[key]
        }
    });

    normalized_data.session_id = getSession();
    normalized_data.meta = normalized_data.meta ? JSON.stringify(normalized_data.meta): null
    
    return await request({
        url: '/clients/identify',
        data: normalized_data,
        method: 'post',
    }) 
}