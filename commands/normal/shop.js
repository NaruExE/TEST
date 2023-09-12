const { EmbedBuilder } = require("@discordjs/builders");
const { MessageEmbed, Permissions } = require("discord.js");
const fs = require("fs")
const { ButtonBuilder, ButtonStyle, ActionRowBuilder  } = require('discord.js');

module.exports = {
  name: "shop",
  aliases: ["shopdice", "dshop"],
  cooldown: 5000,
  run: async (client, message, args) => {
    const ganyu = JSON.parse(fs.readFileSync("./shop.json", "utf8"));
    const embed = new EmbedBuilder()
    .setColor(1752220)
    .setTitle("Dice Shop")
    .setThumbnail(message.guild.iconURL({dynamic: true}))
    .setFooter({text: message.author.username , iconURL: message.author.avatarURL({dynamic: true})})
    .setImage("https://upload-os-bbs.hoyolab.com/upload/2022/11/27/94523225/ed84b11f7a62a37894de911b7a776712_8319540283783478139.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fquality%2Cq_80%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp")
    .setTimestamp()
    const row = new ActionRowBuilder()


    const rawr = Object.keys(ganyu)
    rawr.forEach(async element => { 
      if (ganyu[element].stock === 0) {
      embed.addFields({name:   ganyu[element].stock === 0 ||  ganyu[element].stock < 0 ? `~~${element}~~` : `${element}` , value: ganyu[element].stock === 0 ||  ganyu[element].stock < 0  ? `~~<:H7_m34smug:1030577920177098844> | **Price**: (${ganyu[element].price}) \n <:G92_B3_1920yoimiyaoops:1084035910271782983>| **Stock**: (${ganyu[element].stock})~~` : `<:H7_m34smug:1030577920177098844> | **Price**: (${ganyu[element].price}) \n <:G92_B3_1920yoimiyaoops:1084035910271782983>| **Stock**: (${ganyu[element].stock})` },)
      } else {
      let confirm = new ButtonBuilder()
			.setCustomId(`${element}`)
			.setLabel(`${element}`)
			.setStyle(ButtonStyle.Success);
      row.addComponents(confirm)
      embed.addFields({name:  ganyu[element].stock === 0 ||  ganyu[element].stock < 0 ? `~~${element}~~` : `${element}`, value: ganyu[element].stock === 0 ||  ganyu[element].stock < 0  ? `~~<:H7_m34smug:1030577920177098844> | **Price**: (${ganyu[element].price}) \n <:G92_B3_1920yoimiyaoops:1084035910271782983>| **Stock**: (${ganyu[element].stock})~~` : `<:H7_m34smug:1030577920177098844> | **Price**: (${ganyu[element].price}) \n <:G92_B3_1920yoimiyaoops:1084035910271782983>| **Stock**: (${ganyu[element].stock})` },)
      
  }})

//    embed.addFields(
//     { name: '\u200B', value: '\u200B' },
// )
      
    }
    


 };