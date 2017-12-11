const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

const Constants = require('./../constants.js')
const wpapi = require('./../wpapi.js').wpapi;

class PagesController extends TelegramBaseController {

    /**
     * @param {Scope} $
     */
    handle($) {

        wpapi.then(function (site) {
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



