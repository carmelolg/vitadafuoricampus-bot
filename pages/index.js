const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const WPAPI = require('wpapi')
const Parameters = require('./../credentials.js')
const Constants = require('./../constants.js')

class PagesController extends TelegramBaseController {

    /**
     * @param {Scope} $
     */
    handle($) {

        const apiPromise = WPAPI.discover(Parameters.blogsite).then(function (site) {
            return site.auth({
                username: Parameters.wpUsername,
                password: Parameters.wpPassword
            });
        });

        apiPromise.then(function (site) {
            site.pages().get(function (err, data) {
                if (data){

                    data.forEach(function(page){
                        var message = '';
                        message = message.concat('Pagina: ', page.title.rendered + '\n')
                        message = message.concat('Link: ', page.link + '\n')
                        $.sendMessage(message)
                    });

                }

                if (err)
                    $.sendMessage(Constants.ERROR_MESSAGE_DEFAULT)
            })
        })
    }
}


// module.export{
module.exports.PagesController = PagesController;



