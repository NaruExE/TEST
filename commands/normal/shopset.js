
const { MessageEmbed, Permissions, PermissionsBitField,EmbedBuilder  } = require("discord.js");
const fs = require("fs")
module.exports = {
  name: "sset",
  aliases: ["shopset"],
  cooldown: 5000,
  run: async (client, message) => {
    const ganyu = JSON.parse(fs.readFileSync("./shop.json", "utf8"));
    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply("**<:H7_m34smug:1030577920177098844> Error code: K2y8s | Missing permissions: ADMINISTRATOR**");
     let args = message.content.split(" ").slice(1)
     let funds = args[0]
     let stock2 = args[1]
     let prize = message.content.split(" ").slice(3).join(" ")


      if (!funds) return message.reply("**you have to define a price for this**")
      if (!stock2) return message.reply("**how much are you going to sell of this**")
      if (!prize) return message.reply("**what the fuck is this?**")
      if (!ganyu[prize]) {
      ganyu[prize] = {
       price: funds,
       stock: stock2,
       pri: prize 
      }
      } else {
        message.reply("**This product already exists**")
      }

      let embed = new EmbedBuilder()
      .setColor(1752220)
      .setAuthor({name: message.author.username , iconURL: message.author.avatarURL({dynamic: true})})
      .setDescription(`Done \n this item **${prize}** \n was added to the shop`)

      message.reply({embeds: [embed]})

    const ganyuwrite = fs.createWriteStream("./shop.json")
    ganyuwrite.write(JSON.stringify(ganyu), function(err) {
        if (err) throw err;
    })
    }
 };