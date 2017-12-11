const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

const wpapi = require('./../wpapi.js').wpapi;
class PostsController extends TelegramBaseController {

    /**
     * @param {Scope} $
     */
    handle($) {
        $.sendMessage('Work in progress')

        wpapi.then(function (site) {
            site.posts().get(function (err, data) {
                if (data)
                    console.log(data)

                if (err)
                    console.log(err)

            })
        })

    }
}


// module.export{
module.exports.PostsController = PostsController;



