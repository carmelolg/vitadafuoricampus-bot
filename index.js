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

telegram.router
    .when(new RegexpCommand(/ciao|hey|we|ping/i), new StartController())
    .when(new TextCommand('/start'), new StartController())
    .when(new TextCommand('/last'), new PostsController())
    .otherwise(new OtherwiseController())

