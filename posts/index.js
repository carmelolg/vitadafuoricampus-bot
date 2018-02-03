const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const Constant = require('../constants')
const wpapi = require('./../wpapi.js').wpapi
const dateFormat = require('dateformat');

class PostsController extends TelegramBaseController {

    /**
     * @param {Scope} scope
     */
    handle(scope) {
        wpapi.then(function (site) {
            site.posts().get(function (err, data) {
                if (data && data.length) {
                    var posts = [];
                    data.slice(0, Constant.LAST_ITEM_NUMBER).forEach(function (post) {
                        posts.push({
                            title: post.title.rendered,
                            // abstract: post.excerpt.rendered,
                            date: post.date,
                            url: post.link
                        });
                    });

                    posts.sort(function (a, b) {
                        return a.date > b.date;
                    });

                    posts.forEach(function (post) {
                        var message = post.title + '\nData: ' + dateFormat(post.date, 'dddd, mmmm dS, yyyy') + '\n\nClicca qui: ' + post.url;
                        scope.sendMessage(message, {'parse_mode': 'Markdown'});
                    })

                }

                if (err)
                    console.log(err)

            })
        })

    }
}


// module.export{
module.exports.PostsController = PostsController;



