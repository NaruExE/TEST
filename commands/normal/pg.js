const { EmbedBuilder } = require("@discordjs/builders");
const { MessageEmbed, Permissions } = require("discord.js");
const { PermissionsBitField } = require('discord.js');

const fs = require("fs")
module.exports = {
  name: "addpoints",
  aliases: ["add"],
  cooldown: 5000,
  run: async (client, message) => {
    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply("**<:H7_m34smug:1030577920177098844> Error code: K2y8s | Missing permissions: ADMINISTRATOR**");
    let mentions = message.mentions.users.first()
    let args = message.content.split(" ").slice(2).join(" ")
    if (!mentions) return message.reply("**<:H7_m34smug:1030577920177098844> Error code: K5y2s | Missing: Ping someone**");
    if (!args) return message.reply("**<:H7_m34smug:1030577920177098844> Error code: K4y5s | Missing: No value has been specified to add**");
    if (isNaN(args)) message.reply("**<:H7_m34smug:1030577920177098844> Error code: K?y2s | Missing: this is not a number..**");
    const ganyu = JSON.parse(fs.readFileSync("./points.json", "utf8"));
    if (!ganyu[mentions.id]) {
        ganyu[mentions.id] = {
            points: args
        }
    } else {
        ganyu[mentions.id] = {
            points:   Number(ganyu[mentions.id].points) + Number(args)
        }
    }
    message.reply(`**<:B2_8588nahidathinking:1084035906605944873> Done, the value of __${args}__ was added to __<@${mentions.id}>__ **`)
    const ganyuwrite = fs.createWriteStream("./points.json")
    ganyuwrite.write(JSON.stringify(ganyu), function(err) {
        if (err) throw err;
    })
}
 };