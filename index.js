'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const RegexpCommand = Telegram.RegexpCommand
const telegram = new Telegram.Telegram('450611611:AAEy22PkmyGgZP5sRzXWc4pAiWvnRC-e4WY', {
    workers: 1
})


var StartController = require("./start").StartController;

telegram.router
    .when(new RegexpCommand(/ciao|hey|we|ping/i), new StartController())
    .when(new TextCommand('/start'), new StartController())
