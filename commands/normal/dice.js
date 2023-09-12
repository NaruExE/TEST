const { MessageEmbed, Permissions } = require("discord.js");
const fs = require("fs")
const msgs = require("./msgs");
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
  name: "roll",
  aliases: ["r"],
  cooldown: 5000,
  run: async (client, message) => {
    let args = message.content.split(" ").slice(1).join(" ")
    console.log(args)
    if (!args) return message.reply(`**No value has been specified to add**`)
    if (isNaN(args)) return message.reply(`** ${rem} | Error code: __isNaN(${args})__, that's not a number! **`)
    const ganyutits = JSON.parse(fs.readFileSync("./msgs.json", "utf8"));
    const ganyu = JSON.parse(fs.readFileSync("./points.json", "utf8"));
    let rem = Emojis[Math.floor(Math.random() * Emojis.length)];

      let number = args
      let mn = number * 160
      console.log(number)
      console.log(mn)
      console.log(ganyutits[message.author.id].msgs)
      if (mn > ganyutits[message.author.id].msgs) return message.reply(`${rem}** | You don't have enough __Funds__ to do this**`)
      if (!ganyu[message.author.id]) {
        ganyu[message.author.id] = {
            points: 0
        }
      } else {
        ganyu[message.author.id] = {
            points: Number(ganyu[message.author.id].points) + Number(number)
        }
      }
      ganyutits[message.author.id] = {
        msgs: Number(ganyutits[message.author.id].msgs) - mn 
      }
      message.reply(`**${rem} | Done, the value of ${number}  Dice/s was added to your account!**`)
      const ganyuwrite = fs.createWriteStream("./points.json")
      ganyuwrite.write(JSON.stringify(ganyu), function(err) {
          if (err) throw err;
      })
      const ganyuwrite2 = fs.createWriteStream("./msgs.json")
      ganyuwrite2.write(JSON.stringify(ganyutits), function(err) {
          if (err) throw err;
      })
    }
 };