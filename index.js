const { Client, Collection, GatewayIntentBits, ComponentType, DiscordAPIError, Guild, discord, Discord, MessageMentions, StringSelectMenuBuilder, roles, EmbedBuilder } = require("discord.js")
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
],
}); 
const prefix = require("./config.json")
const { ButtonBuilder, ButtonStyle, ActionRowBuilder  } = require('discord.js');    
const { REST } = require("@discordjs/rest")
const fs = require("fs")
const moment = require("moment");
const { Routes } = require("discord-api-types/v9");


client.on("ready", () => {
    console.log(`im ${client.user.username}`)
    client.user.setStatus("idle")
    client.user.setActivity('With Eyad Sameh', { type: "PLAYING" });
});



client.commands = new Collection()
client.slashcommands = new Collection()
client.commandaliases = new Collection(
    
)
const dotenv = require('dotenv');
dotenv.config();
const rest = new REST({ version: '9' }).setToken(process.env.token);
const log = x => { console.log(`[${moment().format("DD-MM-YYYY HH:mm:ss")}] ${x}`) };

//command handler
let { readdirSync } = require("fs")
const commands = []
readdirSync('./commands/normal').forEach(async file => {
	const command = await require(`./commands/normal/${file}`);
	if (command) {
		client.commands.set(command.name, command)
		commands.push(command.name, command);
		if (command.aliases && Array.isArray(command.aliases)) {
			command.aliases.forEach(alias => {
				client.commandaliases.set(alias, command.name)
			})
		}
	}
})

const slashcommands = [];
readdirSync('./commands/slash').forEach(async file => {
	const command = await require(`./commands/slash/${file}`);
	slashcommands.push(command.data.toJSON());
	client.slashcommands.set(command.data.name, command);
})

client.on("ready", async () => {
	try {
		await rest.put(
			Routes.applicationCommands(client.user.id),
			{ body: slashcommands },
		);
	} catch (error) {
		console.error(error);
	}
	log(`${client.user.username}`);
})

//event-handler
readdirSync('./events').forEach(async file => {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
})

//nodejs-listeners
process.on("unhandledRejection", e => {
	console.log(e)
})
process.on("uncaughtException", e => {
	console.log(e)
})
process.on("uncaughtExceptionMonitor", e => {
	console.log(e)
})




client.on("messageCreate", async message => {
    if (message.content.startsWith(prefix + "warn")) {
        const ganyu = message.mentions.members.first()
        const ganyu123 = message.mentions.users.first()
        const ganyulove12 = message.content.split(' ').slice(2).join(' ');
        if (message.member.roles.cache.some(role => role.name === `Ganyu's Prems`)) {
            if (!ganyu123) { message.channel.send("KILL YOUR SELF") } else {
                if (ganyu123.id === naru) {
                    message.channel.send("- ..really? wanna die that bad?")
                } else {
                    if (!ganyulove12[0]) {
                        message.channel.send(`
          **Please specify the reason for the warning.. example:** 
    
           > a!warn <@${message.author.id}> because he did something bad!
          `)
                    } else {

                        message.channel.send(`** <:8998ganyuconfusedsd1:1094340469091213323> | Done .. __${ganyu123.username}__ Got A Warn!**`)



                        if (ganyu.roles.cache.some(role => role.name === 'Warning 1')) {
                            await message.guild.roles.fetch()
                            let w2 = message.guild.roles.cache.find(role => role.name === 'Warning 2')
                            ganyu.roles.add(w2);



                        } else {

                            await message.guild.roles.fetch()
                            let w1 = message.guild.roles.cache.find(role => role.name === 'Warning 1')
                            ganyu.roles.add(w1);
                        }

                        if (ganyu.roles.cache.some(role => role.name === 'Warning 2')) {
                            await message.guild.roles.fetch()
                            let w3 = message.guild.roles.cache.find(role => role.name === 'Warning 3')
                            ganyu.roles.add(w3);


                        } else {

                            await message.guild.roles.fetch()
                            let w1 = message.guild.roles.cache.find(role => role.name === 'Warning 1')
                            ganyu.roles.add(w1);

                        }

                        if (ganyu.roles.cache.some(role => role.name === 'Warning 3')) {
                            message.channel.send(`**__<@${ganyu123.id}>__ Got 3 Warns..**`).then((sentMessage) => {
                                const channel = client.channels.cache.find(channel => channel.name === "🛠・〢warns")
                                const ganyusass = new EmbedBuilder()
                                    .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL(), url: 'http://naru.great-site.net' })
                                    .setTitle(`${ganyu123.username} Got 3 Warns~`)
                                    .setThumbnail(ganyu123.avatarURL({ dynamic: true }))
                                    .setDescription("its up to mods to deal with him.")

                                channel.send({ embeds: [ganyusass] })
                                channel.send("<@&950807493368496228>")
                            });
                        }

                    }
                }

                const channel2 = client.channels.cache.find(channel => channel.name === "🛠・〢warns")
                const ganyutity = new EmbedBuilder()
                    .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL(), url: 'http://naru.great-site.net' })
                    .setTitle(`${ganyu123.username} Got a Warn~`)
                    .setThumbnail(ganyu123.avatarURL({ dynamic: true }))
                    .addFields(
                        { name: `name`, value: ganyu123.username },
                        { name: `id`, value: ganyu123.id },
                        { name: `reason`, value: ganyulove12 },

                    )
                    .setFooter({ text: "Warn giver : " + " " + message.author.username, iconURL: message.author.avatarURL({ dynamic: true }) })
                channel2.send({ embeds: [ganyutity] })
                const ganyutities = new EmbedBuilder()
                    .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL(), url: 'http://naru.great-site.net' })
                    .setTitle(`You Got a Warn~`)
                    .setThumbnail(ganyu123.avatarURL({ dynamic: true }))
                    .addFields(
                        { name: `name`, value: ganyu123.username },
                        { name: `reason`, value: ganyulove12 }
                    )
                    .setFooter({ text: "if you think that there is a mistake please contact the mods, thank you~" })
                ganyu123.send({ embeds: [ganyutities] })
            }
        } else {
            message.channel.send("**You dont have __Ganyu's Prems__ role to be able to use this command!**")
        }
    }

}

)
//

client.on("messageCreate", async message => {
    const ganyu = JSON.parse(fs.readFileSync("./ganyu.json", "utf8"));
    if (message.content.startsWith(prefix + "invite")) {
        let reg = "Mondstadt"
        if (message.member.roles.cache.some(role => role.name === `${reg} Leader`)) {
            const ganyu123 = message.mentions.users.first()
            const ganyu1235 = message.mentions.members.first()
            if (!ganyu123) return message.channel.send("invite who?")
            await message.guild.roles.fetch()
            let thiscoderole2 = message.guild.roles.cache.find(role => role.name === reg)
            console.log(ganyu["M"].points + " " + thiscoderole2.members.size)
            if (ganyu["M"].points < 10 && ((thiscoderole2.members.size > 10))) {
                message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 11 members till you reach LVL.2 (10 points You got ${ganyu["M"].points} points)**`)
            } else if (ganyu["M"].points < 5 && ((thiscoderole2.members.size > 5))) {
                message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 6 members till you reach LVL.1 (5 points You got ${ganyu["M"].points} points)**`)
            } else {
                let filter2 = m => m.author.id === ganyu123.id
                const confirmation = await message.channel.send(`**__${ganyu123.username}__, You have been invited to join __${reg}__ Wanna join? (Y/N)**`)
                const collector = confirmation.channel.createMessageCollector({ filter: filter2, time: 10000, max: 1 });
                collector.on('collect', async (m) => {
                    if (m.content === 'YES' || m.content === 'Y') {
                        m.channel.send(`**Congrats! You are now a member of ${reg} clan!**`)
                        await message.guild.roles.fetch()
                        let role = message.guild.roles.cache.find(role => role.name === reg)
                        m.member.roles.add(role)
                    } else if (m.content.toUpperCase() == 'NO' || m.content.toUpperCase() == 'N') {
                        m.channel.send(`**Dang, maybe next time <@${message.author.id}>?**`)
                    }
                });

                collector.on('end', (collected, reason) => {
                    if (reason === 'time') {
                        message.channel.send(
                            `${message.author}, it's been a minute without confirmation. The action has been cancelled.`
                        );
                    }
                })
            };
        } else {
            let reg = "Liyue"
            if (message.member.roles.cache.some(role => role.name === `${reg} Leader`)) {
                const ganyu123 = message.mentions.users.first()
                const ganyu1235 = message.mentions.members.first()
                if (!ganyu123) return message.channel.send("invite who?")
                await message.guild.roles.fetch()
                let thiscoderole2 = message.guild.roles.cache.find(role => role.name === reg)
                if (ganyu["L"].points < 10 && ((thiscoderole2.members.size > 10))) {
                    message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 11 members till you reach LVL.2 (10 points You got ${ganyu["L"].points} points)**`)
                } else if (ganyu["L"].points < 5 && ((thiscoderole2.members.size > 5))) {
                    message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 6 members till you reach LVL.1 (5 points You got ${ganyu["L"].points} points)**`)
                } else {
                    let filter2 = m => m.author.id === ganyu123.id
                    const confirmation = await message.channel.send(`**__${ganyu123.username}__, You have been invited to join __${reg}__ Wanna join? (Y/N)**`)
                    const collector = confirmation.channel.createMessageCollector({ filter: filter2, time: 10000, max: 1 });
                    collector.on('collect', async (m) => {
                        if (m.content === 'YES' || m.content === 'Y') {
                            m.channel.send(`**Congrats! You are now a member of ${reg} clan!**`)
                            await message.guild.roles.fetch()
                            let role = message.guild.roles.cache.find(role => role.name === reg)
                            m.member.roles.add(role)
                        } else if (m.content.toUpperCase() == 'NO' || m.content.toUpperCase() == 'N') {
                            m.channel.send(`**Dang, maybe next time <@${message.author.id}>?**`)
                        }
                    });

                    collector.on('end', (collected, reason) => {
                        if (reason === 'time') {
                            message.channel.send(
                                `${message.author}, it's been a minute without confirmation. The action has been cancelled.`
                            )
                        }
                    })
                }
            } else {
                let reg = "Inazuma"
                if (message.member.roles.cache.some(role => role.name === `${reg} Leader`)) {
                    const ganyu123 = message.mentions.users.first()
                    const ganyu1235 = message.mentions.members.first()
                    if (!ganyu123) return message.channel.send("invite who?")
                    await message.guild.roles.fetch()
                    let thiscoderole2 = message.guild.roles.cache.find(role => role.name === reg)
                    if (ganyu["i"].points < 10 && ((thiscoderole2.members.size > 10))) {
                        message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 11 members till you reach LVL.2 (10 points You got ${ganyu["i"].points} points)**`)
                    } else if (ganyu["i"].points < 5 && ((thiscoderole2.members.size > 5))) {
                        message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 6 members till you reach LVL.1 (5 points You got ${ganyu["i"].points}) points**`)
                    } else {
                        let filter2 = m => m.author.id === ganyu123.id
                        const confirmation = await message.channel.send(`**__${ganyu123.username}__, You have been invited to join __${reg}__ Wanna join? (Y/N)**`)
                        const collector = confirmation.channel.createMessageCollector({ filter: filter2, time: 10000, max: 1 });
                        collector.on('collect', async (m) => {
                            if (m.content === 'YES' || m.content === 'Y') {
                                m.channel.send(`**Congrats! You are now a member of ${reg} clan!**`)
                                await message.guild.roles.fetch()
                                let role = message.guild.roles.cache.find(role => role.name === reg)
                                m.member.roles.add(role)
                            } else if (m.content.toUpperCase() == 'NO' || m.content.toUpperCase() == 'N') {
                                m.channel.send(`**Dang, maybe next time <@${message.author.id}>?**`)
                            }
                        });

                        collector.on('end', (collected, reason) => {
                            if (reason === 'time') {
                                message.channel.send(
                                    `${message.author}, it's been a minute without confirmation. The action has been cancelled.`
                                )
                            }
                        })
                    }
                } else {
                    let reg = "Sumeru"
                    if (message.member.roles.cache.some(role => role.name === `${reg} Leader`)) {
                        const ganyu123 = message.mentions.users.first()
                        const ganyu1235 = message.mentions.members.first()
                        if (!ganyu123) return message.channel.send("invite who?")
                        await message.guild.roles.fetch()
                        let thiscoderole2 = message.guild.roles.cache.find(role => role.name === reg)
                        if (ganyu["S"].points < 10 && ((thiscoderole2.members.size > 10))) {
                            message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 11 members till you reach LVL.2 (10 points You got ${ganyu["S"].points} points)**`)
                        } else if (ganyu["S"].points < 5 && ((thiscoderole2.members.size > 5))) {
                            message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 6 members till you reach LVL.1 (5 points You got ${ganyu["S"].points} points)**`)
                        } else {
                            let filter2 = m => m.author.id === ganyu123.id
                            const confirmation = await message.channel.send(`**__${ganyu123.username}__, You have been invited to join __${reg}__ Wanna join? (Y/N)**`)
                            const collector = confirmation.channel.createMessageCollector({ filter: filter2, time: 10000, max: 1 });
                            collector.on('collect', async (m) => {
                                if (m.content === 'YES' || m.content === 'Y') {
                                    m.channel.send(`**Congrats! You are now a member of ${reg} clan!**`)
                                    await message.guild.roles.fetch()
                                    let role = message.guild.roles.cache.find(role => role.name === reg)
                                    m.member.roles.add(role)
                                } else if (m.content.toUpperCase() == 'NO' || m.content.toUpperCase() == 'N') {
                                    m.channel.send(`**Dang, maybe next time <@${message.author.id}>?**`)
                                }
                            });

                            collector.on('end', (collected, reason) => {
                                if (reason === 'time') {
                                    message.channel.send(
                                        `${message.author}, it's been a minute without confirmation. The action has been cancelled.`
                                    )
                                }
                            })
                        }
                    } else {
                        let reg = "Fontaine"
                        if (message.member.roles.cache.some(role => role.name === `${reg} Leader`)) {
                            const ganyu123 = message.mentions.users.first()
                            const ganyu1235 = message.mentions.members.first()
                            if (!ganyu123) return message.channel.send("invite who?")
                            await message.guild.roles.fetch()
                            let thiscoderole2 = message.guild.roles.cache.find(role => role.name === reg)
                            if (ganyu["F"].points < 10 && ((thiscoderole2.members.size > 10))) {
                                message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 11 members till you reach LVL.2 (10 points You got ${ganyu["F"].points} points)**`)
                            } else if (ganyu["F"].points < 5 && ((thiscoderole2.members.size > 5))) {
                                message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 6 members till you reach LVL.1 (5 points You got ${ganyu["F"].points} points)**`)
                            } else {
                                let filter2 = m => m.author.id === ganyu123.id
                                const confirmation = await message.channel.send(`**__${ganyu123.username}__, You have been invited to join __${reg}__ Wanna join? (Y/N)**`)
                                const collector = confirmation.channel.createMessageCollector({ filter: filter2, time: 10000, max: 1 });
                                collector.on('collect', async (m) => {
                                    if (m.content === 'YES' || m.content === 'Y') {
                                        m.channel.send(`**Congrats! You are now a member of ${reg} clan!**`)
                                        await message.guild.roles.fetch()
                                        let role = message.guild.roles.cache.find(role => role.name === reg)
                                        m.member.roles.add(role)
                                    } else if (m.content.toUpperCase() == 'NO' || m.content.toUpperCase() == 'N') {
                                        m.channel.send(`**Dang, maybe next time <@${message.author.id}>?**`)
                                    }
                                });

                                collector.on('end', (collected, reason) => {
                                    if (reason === 'time') {
                                        message.channel.send(
                                            `${message.author}, it's been a minute without confirmation. The action has been cancelled.`
                                        )
                                    }
                                })
                            }
                        } else {
                            let reg = "Natlan"
                            if (message.member.roles.cache.some(role => role.name === `${reg} Leader`)) {
                                const ganyu123 = message.mentions.users.first()
                                const ganyu1235 = message.mentions.members.first()
                                if (!ganyu123) return message.channel.send("invite who?")
                                await message.guild.roles.fetch()
                                let thiscoderole2 = message.guild.roles.cache.find(role => role.name === reg)
                                if (ganyu["N"].points < 10 && ((thiscoderole2.members.size > 10))) {
                                    message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 11 members till you reach LVL.2 (10 points You got ${ganyu["N"].points} points)**`)
                                } else if (ganyu["N"].points < 5 && ((thiscoderole2.members.size > 5))) {
                                    message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 6 members till you reach LVL.1 (5 points You got ${ganyu["N"].points} points)**`)
                                } else {
                                    let filter2 = m => m.author.id === ganyu123.id
                                    const confirmation = await message.channel.send(`**__${ganyu123.username}__, You have been invited to join __${reg}__ Wanna join? (Y/N)**`)
                                    const collector = confirmation.channel.createMessageCollector({ filter: filter2, time: 10000, max: 1 });
                                    collector.on('collect', async (m) => {
                                        if (m.content === 'YES' || m.content === 'Y') {
                                            m.channel.send(`**Congrats! You are now a member of ${reg} clan!**`)
                                            await message.guild.roles.fetch()
                                            let role = message.guild.roles.cache.find(role => role.name === reg)
                                            m.member.roles.add(role)
                                        } else if (m.content.toUpperCase() == 'NO' || m.content.toUpperCase() == 'N') {
                                            m.channel.send(`**Dang, maybe next time <@${message.author.id}>?**`)
                                        }
                                    });

                                    collector.on('end', (collected, reason) => {
                                        if (reason === 'time') {
                                            message.channel.send(
                                                `${message.author}, it's been a minute without confirmation. The action has been cancelled.`
                                            )
                                        }
                                    })
                                }
                            } else {
                                let reg = "Snezhnaya"
                                if (message.member.roles.cache.some(role => role.name === `${reg} Leader`)) {
                                    const ganyu123 = message.mentions.users.first()
                                    const ganyu1235 = message.mentions.members.first()
                                    if (!ganyu123) return message.channel.send("invite who?")
                                    await message.guild.roles.fetch()
                                    let thiscoderole2 = message.guild.roles.cache.find(role => role.name === reg)
                                    if (ganyu["BSN"].points < 10 && ((thiscoderole2.members.size > 10))) {
                                        message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 11 members till you reach LVL.2 (10 points You got ${ganyu["NSN"].points} points)**`)
                                    } else if (ganyu["NSN"].points < 5 && ((thiscoderole2.members.size > 5))) {
                                        message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 6 members till you reach LVL.1 (5 points You got ${ganyu["NSN"].points} points)**`)
                                    } else {
                                        let filter2 = m => m.author.id === ganyu123.id
                                        const confirmation = await message.channel.send(`**__${ganyu123.username}__, You have been invited to join __${reg}__ Wanna join? (Y/N)**`)
                                        const collector = confirmation.channel.createMessageCollector({ filter: filter2, time: 10000, max: 1 });
                                        collector.on('collect', async (m) => {
                                            if (m.content === 'YES' || m.content === 'Y') {
                                                m.channel.send(`**Congrats! You are now a member of ${reg} clan!**`)
                                                await message.guild.roles.fetch()
                                                let role = message.guild.roles.cache.find(role => role.name === reg)
                                                m.member.roles.add(role)
                                            } else if (m.content.toUpperCase() == 'NO' || m.content.toUpperCase() == 'N') {
                                                m.channel.send(`**Dang, maybe next time <@${message.author.id}>?**`)
                                            }
                                        });

                                        collector.on('end', (collected, reason) => {
                                            if (reason === 'time') {
                                                message.channel.send(
                                                    `${message.author}, it's been a minute without confirmation. The action has been cancelled.`
                                                )
                                            }
                                        })
                                    }
                                } else {
                                    message.channel.send("**You are the leader of BULLSHIT you have nothing to invite someone to**")
                                }
                            }
                        };

                    }
                }
            }
        }
    }
})



client.on("messageCreate", message => {
    if (message.content.startsWith(".")) {
        let messages = ["**Welcome <:H_baalteehee:1030577883732779049>**",
            "**I'm here, Need any help <:B2_8588nahidathinking:1084035906605944873>? **",
            "**احلي نقطه فالشات <:M1_1878yortouched1:1084035805330280518>**",
            "**who?**",
            "**How can i help? <:B2_8588nahidathinking:1084035906605944873> **"]
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        if (message.author.bot) {
            return;
        } else {
            if (message.author.id === "919329186093604915") {
                {
                    message.channel.send("**how can i help you Dana-sama? OwO**")
                }
            } else {
                message.channel.send(randomMessage)
            }
        }
    }
});




client.on("messageCreate", message => {
    if (message.content.startsWith(prefix + "gay")) {
        let mention = message.mentions.users.first();
        let mala = "780723646607917067"
        if (mention.id === "780723646607917067") {
            message.channel.send(`<@${mala}> **Isn't Gay!!**`)
        } else {
            if (!mention) {
                let pere = [Math.floor(Math.random() * 100) + 1]
                message.channel.send(`<@${message.author.id}> **is ${pere}% Gay!**`)
            } else if (mention.id === "919329186093604915") {
                message.channel.send("**My husband isn't gay!**")
            } else {
                let pere = [Math.floor(Math.random() * 100) + 1]
                message.channel.send(`<@${mention.id}> **is ${pere}% Gay!**`)
            }
        }

    }
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("messageCreate", async message => {
    if (message.content === prefix + "black") {
        if (message.member.roles.cache.some(role => role.name === `Celestian`)) {
            await message.guild.roles.fetch()
            let black = message.guild.roles.cache.find(role => role.name === '0')
            if (!message.member.roles.cache.some(role => role.name === `0`)) {
                message.member.roles.add(black)
                message.channel.send("**Done.. welcome to the elite buddy!**")
            } else {
                message.member.roles.remove(black)
                message.channel.send("**Done.. Your color is no longer __black__**")
            }
        } else {
            message.channel.send("**You didn't reach LVL.40 in the chat yet!**")
        }
    }
})

client.on("messageCreate", async message => {
    if (message.content.includes("discord.gg/")) {
        message.delete();
    }
})


client.on("messageCreate", async message => {
    if (message.content.startsWith(prefix + "afk")) {
        const args = message.content.split(' ').slice(1).join(' ');
        const member = message.author
        if (!args) return;
        if (message.author.bot) return;
        if (args.includes("https://")) return message.delete();
        if (args.includes("discord.gg")) return;
        const afk = JSON.parse(fs.readFileSync("./afk.json", "utf8"));
        if (!afk[member.id]) {
            afk[member.id] = {
                afk: args
            }
        }
        const afkwrite = fs.createWriteStream("./afk.json")
        afkwrite.write(JSON.stringify(afk), function(err) {
            if (err) throw err;
        })
        message.channel.send(`**Done.. You are now afk.. \n reason: ${args}**`)
    }
})
////
client.on("messageCreate", async message => {
    const member = message.mentions.users.first();
    if (!member) return;
    const a2k = JSON.parse(fs.readFileSync("./afk.json", "utf8"));
    if (!a2k[member.id]) return;
    message.channel.send(`__${member.tag}__ **Is AFK right now!** \n > **reason : ${a2k[member.id].afk}**`)
})

client.on("messageCreate", async message => {
    const member = message.author
    const afk = JSON.parse(fs.readFileSync("./afk.json", "utf8"));
    if (!afk[member.id]) return;
    delete afk[member.id];
    const afkwrite = fs.createWriteStream("./afk.json")
    afkwrite.write(JSON.stringify(afk), function(err) {
        if (err) throw err;
    })
    message.channel.send(`__${member.tag}__, **You are no longer afk**`)
})



client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (message.content.startsWith("a!")) return;
    const ganyu = JSON.parse(fs.readFileSync("./points.json", "utf8"));
    const ganyulove12 = JSON.parse(fs.readFileSync("./msgs.json", "utf8"));

        if (!ganyulove12[message.author.id]) {
            ganyulove12[message.author.id] = {
                msgs: 1
            }
        } else {
            ganyulove12[message.author.id] = {
                msgs: Number(ganyulove12[message.author.id].msgs) + 1 
            }
        }
    const ganyuwrite = fs.createWriteStream("./points.json")
    ganyuwrite.write(JSON.stringify(ganyu), function(err) {
        if (err) throw err;
    })
    const ganyuwrite2 = fs.createWriteStream("./msgs.json")
    ganyuwrite2.write(JSON.stringify(ganyulove12), function(err) {
        if (err) throw err;
    })
}
    
)


client.on("interactionCreate", async i => {
    const ganyu = JSON.parse(fs.readFileSync("./shop.json", "utf8"));
    const ganyu1 = JSON.parse(fs.readFileSync("./points.json", "utf8"));
if (ganyu[i.customId]) {
    console.log(i.user.id)
  if (ganyu1[i.user.id].points < ganyu[i.customId].price) return i.reply(`**<:H7_m34smug:1030577920177098844> | You don't have enough funds to buy ${ganyu[i.customId].pri}**`)
  if (ganyu[i.customId].stock === 0) return;
    i.message.delete()
    let embed = new EmbedBuilder()
    .setColor(1752220)
    const row = new ActionRowBuilder()
    let confirm = new ButtonBuilder()
    .setCustomId(`yessurewhynot`)
    .setLabel(`Yes!`)
    .setStyle(ButtonStyle.Success);
    let ref = new ButtonBuilder()
    .setCustomId(`fucknowhywouldi`)
    .setLabel(`No!`)
    .setStyle(ButtonStyle.Danger);
    row.addComponents(confirm, ref)
    
  const msg = await i.channel.send({content: `** <@${i.user.id}><:H7_m34smug:1030577920177098844> | Ready to acquire the __${ganyu[i.customId].pri}__ For __${ganyu[i.customId].price}__ Dice?**`, components: [row]})
  let filter2 = e => i.user.id === e.user.id
  const collector = msg.createMessageComponentCollector({filter: filter2, componentType: ComponentType.Button, time: 30000 });
    collector.on('collect', async t => { 
        if (t.customId === "yessurewhynot") {
           t.reply(`**<:H7_m34smug:1030577920177098844> Congratulations, You have bought ${ganyu[i.customId].pri} For ${ganyu[i.customId].price} Dices!**`)
           console.log()
            ganyu1[i.user.id] = {
            points: ganyu1[i.user.id].points - ganyu[i.customId].price
            }
            ganyu[i.customId] = {
             price: ganyu[i.customId].price,
             stock:  ganyu[i.customId].stock - 1, 
             pri:  ganyu[i.customId].pri
            }  
            const ganyuwrite1 = fs.createWriteStream("./shop.json")
           ganyuwrite1.write(JSON.stringify(ganyu), function(err) {
               if (err) throw err;
           })
           const ganyuwrite = fs.createWriteStream("./points.json")
           ganyuwrite.write(JSON.stringify(ganyu1), function(err) {
               if (err) throw err;
           })
           t.message.delete()
        } else if (t.customId === "fucknowhywouldi") {
            t.reply(`**<:H7_m34smug:1030577920177098844> Cancled**`)
            t.message.delete()
         
        }
    })
}
})




