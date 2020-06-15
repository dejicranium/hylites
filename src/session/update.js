
function updateSessionStamp() {
    const name = 'bpzlastsessionresolve';
    console.log('updating')
    let s = Date.now();
    localStorage.setItem(name, s)
}


module.exports = updateSessionStamp;