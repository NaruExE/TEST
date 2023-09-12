const { MessageEmbed, Permissions, PermissionsBitField,EmbedBuilder  } = require("discord.js");
const fs = require("fs")
module.exports = {
  name: "missions",
  aliases: ["mi", "m"],
  cooldown: 5000,
  run: async (client, message) => {
    const ganyu = JSON.parse(fs.readFileSync("./points.json", "utf8"));
    const ganyu2 = JSON.parse(fs.readFileSync("./miss.json", "utf8"))
    if (!ganyu[message.author.id]) return message.reply("**Please type ``a!dice`` first to sign up for the system <3**");
    const embed = new EmbedBuilder()
    .setColor(1752220)
    .setTitle("Dice Missions")
    .setThumbnail(message.guild.iconURL({dynamic: true}))
    .setFooter({text: message.author.username , iconURL: message.author.avatarURL({dynamic: true})})
    .setImage("https://images5.alphacoders.com/129/1291240.jpg")
    //.setImage("https://upload-os-bbs.hoyolab.com/upload/2022/11/27/94523225/ed84b11f7a62a37894de911b7a776712_8319540283783478139.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fquality%2Cq_80%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp")
    .setTimestamp()
    const rawr = Object.keys(ganyu2)
    rawr.forEach(async element => { 
     if (ganyu2[element].members === "all") {
      embed.addFields({name: `${element}`, value: `You have done it : **(0/${ganyu2[element].timesofit})** times \n Prize : **(${ganyu2[element].prize})** Dices`},)
     } else if (ganyu2[element].members === `${message.author.id}`) {
      embed.addFields({name: `${element}`, value: `You have done it : **(0/${ganyu2[element].timesofit})** times \n Prize : **(${ganyu2[element].prize})** Dices`},)
     }
    })
    message.reply({embeds: [embed]})
    }
 };