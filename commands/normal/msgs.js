const { EmbedBuilder } = require("@discordjs/builders");
const { Permissions } = require("discord.js");
const { PermissionsBitField } = require('discord.js');
const fs = require("fs")
let Emojis = [
    "<:A9_2327monadisappointed:1084035894828343296>",
    "<:A8_5529sucrosevictory:1084035888448819220>",
    "<:A7_5078heizousigh:1084035882073473145>",
    "<:B2_8588nahidathinking:1084035906605944873>",
    "<:B2_8588nahidathinking:1084035906605944873>",
    "<:_C1ganyuhead_:1031220805327130695>",
    "<:kokomistonks:1099674197451603978>",
    "<:G92_B3_1920yoimiyaoops:1084035910271782983>",
    "<:H7_m34smug:1030577920177098844>"
]

module.exports = {
  name: "messages",
  aliases: ["msgs", "msg", "points"],
  cooldown: 5000,
  run: async (client, message, args) => {
    const ganyutits = JSON.parse(fs.readFileSync("./msgs.json", "utf8"));
    let rem = Emojis[Math.floor(Math.random() * Emojis.length)];    
    let funds = Math.floor(ganyutits[message.author.id].msgs / 160)
    let left = 160 - ganyutits[message.author.id].msgs
    let embed = new EmbedBuilder()
    .setAuthor({name: message.author.username, iconURL: message.author.avatarURL({dynamic: true})})
    .setColor(1752220)
    .addFields(
        { name: `Messages ${rem}`, value: `You have ${ganyutits[message.author.id].msgs} Points so far.` },
        { name: `Dices`, value: "for every ``160`` Point you can get 1 Dice, you get 1 Point for every message you send" },
        { name: `Funds`, value: funds < 1 ? `You still need to __${left}__ Points to get 1 Dice ${rem}`:`You can get **${funds}** Dices! <:D1_1696paimonthink:1021122909734977566>` }
    )
    message.reply({embeds: [embed]})
    const ganyuwrite2 = fs.createWriteStream("./msgs.json")
    ganyuwrite2.write(JSON.stringify(ganyutits), function(err) {
        if (err) throw err;
    })
}
    };