const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class PostsController extends TelegramBaseController {

    /**
     * @param {Scope} $
     */
    handle($) {
        $.sendMessage('Work in progress')
    }
}


// module.export{
module.exports.PostsController = PostsController;



