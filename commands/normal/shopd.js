const { MessageEmbed, Permissions, PermissionsBitField,EmbedBuilder  } = require("discord.js");
const fs = require("fs")
module.exports = {
  name: "dshop",
  aliases: ["delete-s", "ds"],
  cooldown: 5000,
  run: async (client, message) => {
    const ganyu = JSON.parse(fs.readFileSync("./shop.json", "utf8"));
    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply("**<:H7_m34smug:1030577920177098844> Error code: K2y8s | Missing permissions: ADMINISTRATOR**");
     let args = message.content.split(" ").slice(1).join(" ")
     
     if (ganyu[args]) {
      try {
        delete ganyu[args] 
      } catch(err) {
     console.log(err)
      }
        message.reply("**<:H7_m34smug:1030577920177098844> | this element was successfully deleted **")
     } else {
        message.reply("**<:H7_m34smug:1030577920177098844> Error code: K6y3s | This element does not exist in the shop**")
     }

     const ganyuwrite = fs.createWriteStream("./shop.json")
     ganyuwrite.write(JSON.stringify(ganyu), function(err) {
         if (err) throw err;
     })
    }
 };