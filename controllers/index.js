// This is connecting the models, which connect to the db, into the controllers
// require('../models')

module.exports = {
    login: require('./login_controller'),
    auth: require('./auth_controller')
}