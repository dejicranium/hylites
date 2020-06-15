module.exports = () => {
    const sessionIdentifer = 'bgpzsessionid';
    return localStorage.getItem(sessionIdentifer)
}