const {
    readdirSync
} = require('fs');

const login = (client) => {
    const Discord = require("discord.js")
    const logs = require('discord-logs');
    logs(client)
    const disbut = require('discord-buttons');
    disbut(client);
    const tempo = require("./gestion/tempo.js");
    tempo(client)

    client.config = require("../config.json")
    client.cooldown = new Array();
    client.interaction = {}
    client.guildInvites = new Map();
    client.queue = new Map();
    client.commands = new Discord.Collection()
    client.aliases = new Discord.Collection()
    client.snipes = new Map()
    client.inter = new Array()

    client.login("MTM0MTkyNDI4NjQzNjIxNjg3Mg.GS2gWf.zKlA8kOHY8VD3fmis_-O8sOSJr_1r-MCN_0pS8");
}

module.exports = {
    login
}
