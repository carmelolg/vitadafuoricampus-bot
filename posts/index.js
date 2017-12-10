const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const WPAPI = require( 'wpapi' )
const Parameters = require('./../credentials.js')

class PostsController extends TelegramBaseController {

    /**
     * @param {Scope} $
     */
    handle($) {
        $.sendMessage('Ecco l\'ultimo post')
        const apiPromise = WPAPI.discover( Parameters.blogsite ).then(function( site ) {
            return site.auth({
                username: Parameters.wpUsername,
                password: Parameters.wpPassword
            });
        });

        apiPromise.then(function( site ) {
            site.posts().then(function( posts ) {
                console.log(posts)
            });
         })
    }
}


// module.export{
module.exports.PostsController = PostsController;



