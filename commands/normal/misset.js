const { EmbedBuilder } = require("@discordjs/builders");
const { MessageEmbed, Permissions,PermissionsBitField } = require("discord.js");
const fs = require("fs")
const { ButtonBuilder, ButtonStyle, ActionRowBuilder  } = require('discord.js');

module.exports = {
  name: "misset",
  aliases: ["mset"],
  cooldown: 5000,
  run: async (client, message) => {
    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply("**<:H7_m34smug:1030577920177098844> Error code: K2y8s | Missing permissions: ADMINISTRATOR**");
    const args = message.content.split("$").slice(0)
    let numberoftimes = args[1]
    let prize = args[2]
    let mission = args[3]
    let mem = args[4]
    let member = message.mentions.users.first();

    if (!numberoftimes) return message.reply("**<:ganyu_lurk60:1147627260703146084> | How much time can they do the mission?\n``$number of times $prize $mission $members``**")
    if (!prize) return message.reply("**<:ganyu_lurk60:1147627260703146084> | What are they going to get?\n``$number of times $prize $mission $members``**")
    if (!mission) return message.reply("**<:ganyu_lurk60:1147627260703146084> | What is the mission\n``$number of times $prize $mission $members``**")
    if (!member && !mem) return message.reply("** <:ganyu_lurk60:1147627260703146084> Error code: R8H8 : all and mentions?**")
    if (mem === "all" && member) return message.reply("Error code: R8H8 : all and mention?")
    const ganyu2 = JSON.parse(fs.readFileSync("./miss.json", "utf8"))
    if (mem === "all") { 
    if (!ganyu2[mission]) {
      ganyu2[mission] = {
        members: `${mem}`,
        done: `1`,
        timesofit: numberoftimes,
        prize: prize
      }
    }
    const ganyuwrite = fs.createWriteStream("./miss.json")
    ganyuwrite.write(JSON.stringify(ganyu2), function(err) {
        if (err) throw err;
    })
    message.reply("<:ganyu_lurk60:1147627260703146084> | Done, The Mission has been sent to ``$all``")
    } else if (member) {
      if (!ganyu2[mission]) {
        ganyu2[mission] = {
          members: `${member.id}`,
          done: `1`,
          timesofit: numberoftimes,
          prize: prize
        }
      }
      const ganyuwrite = fs.createWriteStream("./miss.json")
      ganyuwrite.write(JSON.stringify(ganyu2), function(err) {
          if (err) throw err;
      })
      message.reply(`<:ganyu_lurk60:1147627260703146084> | Done, The Mission has been sent to <@${member.id}>`)
      member.send("You've got a special mission!")
      let embed = new EmbedBuilder()
      .setColor(1752220)
      .setTitle("Special mission!")
      .setThumbnail(message.guild.iconURL({dynamic: true}))
      .setImage("https://images-ext-1.discordapp.net/external/GyHaB89Ui6cerbGdZlBtJQFqYo0N3nyd5CfcHi-kxJw/%3Fx-oss-process%3Dimage%252Fresize%252Cs_1000%252Fquality%252Cq_80%252Fauto-orient%252C0%252Finterlace%252C1%252Fformat%252Cwebp/https/upload-os-bbs.hoyolab.com/upload/2022/11/27/94523225/ed84b11f7a62a37894de911b7a776712_8319540283783478139.jpg?width=832&height=468")
      .addFields(
        {name: "Mission", value: mission}, 
        {name: "Number of times", value: "0/" + numberoftimes},
        {name: "Prize", value: prize + " Dice/s"}
        )
        member.send({embeds: [embed]})
    }
    }
 };