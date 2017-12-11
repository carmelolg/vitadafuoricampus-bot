'use strict'
const Parameters = require('./credentials.js')

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const RegexpCommand = Telegram.RegexpCommand
const telegram = new Telegram.Telegram(Parameters.token, {
    workers: 1
})

const StartController = require("./start").StartController;
const OtherwiseController = require("./otherwise").OtherwiseController;
const PostsController = require("./posts").PostsController;
const PagesController = require("./pages").PagesController;

telegram.router
    .when(new RegexpCommand(/ciao|hey|we|ping/i), new StartController())
    .when(new TextCommand('/start'), new StartController())
    .when(new TextCommand('/last'), new PostsController())
    .when(new TextCommand('/pages'), new PagesController())
    .otherwise(new OtherwiseController())

