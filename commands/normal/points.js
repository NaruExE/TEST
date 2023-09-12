const { EmbedBuilder } = require("@discordjs/builders");
const { MessageEmbed, Permissions } = require("discord.js");
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
  name: "dices",
  aliases: ["dice"],
  cooldown: 5000,
  run: async (client, message, args) => {
    let rem = Emojis[Math.floor(Math.random() * Emojis.length)];
    const ganyu = JSON.parse(fs.readFileSync("./points.json", "utf8"));
    let mentions = message.mentions.users.first()
    if (!mentions) {
    let user = message.author.id
    if (!ganyu[user]) {
        ganyu[user] = {
            points: 0
        }
    }
    const ganyuwrite = fs.createWriteStream("./points.json")
    ganyuwrite.write(JSON.stringify(ganyu), function(err) {
        if (err) throw err;
    })
    
      let embed = new EmbedBuilder()
      .setAuthor({name: message.author.username, iconURL: message.author.avatarURL({dynamic: true})})
      .setColor(1752220)
      .setDescription(`**${rem} | You have ${ganyu[user].points} Dices.**`)
      message.reply({embeds: [embed]})
    } else {
        if (!ganyu[mentions.id]) {
            ganyu[mentions.id] = {
                points: 0
            }
        }
        const ganyuwrite = fs.createWriteStream("./points.json")
        ganyuwrite.write(JSON.stringify(ganyu), function(err) {
            if (err) throw err;
        })
        let embed = new EmbedBuilder()
        .setAuthor({name: mentions.username, iconURL:mentions.avatarURL({dynamic: true})})
        .setColor(1752220)
        .setDescription(`**${rem} | ${mentions.username} got ${ganyu[mentions.id].points} Dices.**`) 
        message.reply({embeds: [embed]})
    }
    }
 };