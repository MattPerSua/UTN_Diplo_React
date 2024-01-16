var pool = require('./bd'); //llamando datos BD
var md5 = require('md5');

// En usuariosModel.js
async function getUserByUsernameAndPassword(user, password) {
    try {
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
        var rows = pool.query(query, [user, md5(password)]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
}


module.exports = { getUserByUsernameAndPassword }