const WPAPI = require('wpapi')
const Parameters = require('./credentials.js')

const wp = WPAPI.discover(Parameters.blogsite).then(function (site) {
    return site.auth({
        username: Parameters.wpUsername,
        password: Parameters.wpPassword
    });
});

module.exports = {}
module.exports.wpapi = wp;