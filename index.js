'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const RegexpCommand = Telegram.RegexpCommand
const telegram = new Telegram.Telegram('450611611:AAEy22PkmyGgZP5sRzXWc4pAiWvnRC-e4WY', {
    workers: 1
})


const StartController = require("./start").StartController;
const OtherwiseController = require("./otherwise").OtherwiseController;

telegram.router
    .when(new RegexpCommand(/ciao|hey|we|ping/i), new StartController())
    .when(new TextCommand('/start'), new StartController())
    .otherwise(new OtherwiseController())
