const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
class OtherwiseController extends TelegramBaseController {

    /**
     * @param {Scope} sender
     */
    handle($) {
        $.sendMessage('Comando non riconosciuto. Riprova!')
    }
}


// module.export{
module.exports.OtherwiseController = OtherwiseController;
