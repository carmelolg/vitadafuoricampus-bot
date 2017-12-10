const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
class OtherwiseController extends TelegramBaseController {

    /**
     * @param {Scope} $
     */
    handle($) {
        $.sendMessage('Comando non riconosciuto. Riprova!')
    }
}


// module.export{
module.exports.OtherwiseController = OtherwiseController;
