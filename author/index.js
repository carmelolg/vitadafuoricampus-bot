const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

const Constants = require('./../constants.js')
const wpapi = require('./../wpapi.js').wpapi;
class AuthorController extends TelegramBaseController {

    /**
     * @param {Scope} $
     */
    handle($) {

        wpapi.then(function (site) {
            site.users().get(function (err, data) {

                if (err)
                    $.sendMessage(Constants.ERROR_MESSAGE_DEFAULT)

                if (data){

                    const author = data.filter(function(a){
                        return a.id = 1
                    })[0]

                    const keysAvatarList = Object.keys(author.avatar_urls);
                    const keysAvatarListLenght = keysAvatarList.length;
                    const biggestAvatarKey = keysAvatarList[keysAvatarListLenght-1];
                    $.sendPhoto({ url: author.avatar_urls[biggestAvatarKey], filename: 'author.jpg'})

                    var message = '';
                    message = message.concat('Autore: \n', author.name + '\n\n')
                    message = message.concat('Biografia: \n', author.description + '\n\n')
                    message = message.concat('Sito web: \n', author.url + '\n\n')
                    $.sendMessage(message)
                }


            })
        })

    }
}


// module.export{
module.exports.AuthorController = AuthorController;



