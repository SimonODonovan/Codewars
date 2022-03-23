/*
    Password Hashes
    
    Create a function that return an MD5 hash, built-ins are permitted
 */
function passHash(str) {
    const crypto = require('crypto')
    return crypto.createHash('md5').update(str).digest("hex")
}

module.exports = passHash;