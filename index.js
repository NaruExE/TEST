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


const users = ("919329186093604915" && "850790169372393492" && "577152491095851019")
client.on("messageCreate", async message => {
    if (message.content === prefix + "DE") {
        if (message.author.id === "919329186093604915") {
            const boobies = new EmbedBuilder()
                 .setColor(1752220)
                .setTitle('Online Games Night!! <a:paimonemergencyf:1030577837754818701>')
                .setURL('http://naru.great-site.net')
                .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL(), url: 'http://naru.great-site.net' })
                .setDescription(
                    `
                **
                  Vote for a Game by Pressing the Emojis! 

               <:Minecraft:1092946306328186952> ・〢Minecraft

               <:Roblox:1092947349246066738>・〢Roblox

               <:Brawlhalla:1092947534114197594>・〢Brawlhalla 

               <:fallguys:1092948004148879380>・〢FallGuys

               <:Codenames:1092948064488149032>・〢Codenames

               <:Garticphone:1092948386270941204>・〢Garticphone

               <a:makeitmemes:1092948518852894841>・〢Makeitmemes

               <:stumpleguys:1092949282614677586>・〢stumpleguys

               <:Osu:1092949604389105794>・〢Osu
               
               <:Amongus:1093241183494488074>・〢Among us
               **
                `
                )
                .setThumbnail('https://images-ext-2.discordapp.net/external/3LQDGYTjKngOC23eHSrulam1ZHtC2WvsTighP53M28Q/%3Fsize%3D1024/https/cdn.discordapp.com/icons/869286386476384276/a_ef310917c07dacefeb57042e3f7f0803.gif?width=435&height=435')
            const MESA = await message.channel.send({ embeds: [boobies] })
            MESA.react('<:Minecraft:1092946306328186952>');
            MESA.react('<:Roblox:1092947349246066738>');
            MESA.react('<:Brawlhalla:1092947534114197594>');
            MESA.react('<:fallguys:1092948004148879380>');
            MESA.react('<:Codenames:1092948064488149032>');
            MESA.react('<:Garticphone:1092948386270941204>');
            MESA.react('<a:makeitmemes:1092948518852894841>');
            MESA.react('<:Osu:1092949604389105794>');
            MESA.react("<:stumpleguys:1092949282614677586>")
            MESA.react("<:Amongus:1093241183494488074>")
        }
    }
})

client.on("messageCreate", async message => {
    if (message.content === prefix + "DE") {
        if (message.author.id === "850790169372393492") {
            const boobies = new EmbedBuilder()
            .setColor(1752220)
                .setTitle('Online Games Night!! <a:paimonemergencyf:1030577837754818701>')
                .setURL('http://naru.great-site.net')
                .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL(), url: 'http://naru.great-site.net' })
                .setDescription(
                    `
              **
                Vote for a Game by Pressing the Emojis! 

             <:Minecraft:1092946306328186952> ・〢Minecraft

             <:Roblox:1092947349246066738>・〢Roblox

             <:Brawlhalla:1092947534114197594>・〢Brawlhalla 

             <:fallguys:1092948004148879380>・〢FallGuys

             <:Codenames:1092948064488149032>・〢Codenames

             <:Garticphone:1092948386270941204>・〢Garticphone

             <a:makeitmemes:1092948518852894841>・〢Makeitmemes

             <:stumpleguys:1092949282614677586>・〢stumpleguys

             <:Osu:1092949604389105794>・〢Osu

             <:Amongus:1093241183494488074>・〢Among us
             **
              `
                )
                .setThumbnail('https://images-ext-2.discordapp.net/external/3LQDGYTjKngOC23eHSrulam1ZHtC2WvsTighP53M28Q/%3Fsize%3D1024/https/cdn.discordapp.com/icons/869286386476384276/a_ef310917c07dacefeb57042e3f7f0803.gif?width=435&height=435')
            const MESA = await message.channel.send({ embeds: [boobies] })
            MESA.react('<:Minecraft:1092946306328186952>');
            MESA.react('<:Roblox:1092947349246066738>');
            MESA.react('<:Brawlhalla:1092947534114197594>');
            MESA.react('<:fallguys:1092948004148879380>');
            MESA.react('<:Codenames:1092948064488149032>');
            MESA.react('<:Garticphone:1092948386270941204>');
            MESA.react('<a:makeitmemes:1092948518852894841>');
            MESA.react('<:Osu:1092949604389105794>');
            MESA.react("<:stumpleguys:1092949282614677586>")
            MESA.react("<:Amongus:1093241183494488074>")
        }
    }
})

client.on("messageCreate", async message => {
    if (message.content === prefix + "DE") {
        if (message.author.id === "577152491095851019") {
            const boobies = new EmbedBuilder()
            .setColor(1752220)
                .setTitle('Online Games Night!! <a:paimonemergencyf:1030577837754818701>')
                .setURL('http://naru.great-site.net')
                .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL(), url: 'http://naru.great-site.net' })
                .setDescription(
                    `
              **
                Vote for a Game by Pressing the Emojis! 

             <:Minecraft:1092946306328186952> ・〢Minecraft

             <:Roblox:1092947349246066738>・〢Roblox

             <:Brawlhalla:1092947534114197594>・〢Brawlhalla 

             <:fallguys:1092948004148879380>・〢FallGuys

             <:Codenames:1092948064488149032>・〢Codenames

             <:Garticphone:1092948386270941204>・〢Garticphone

             <a:makeitmemes:1092948518852894841>・〢Makeitmemes

             <:stumpleguys:1092949282614677586>・〢stumpleguys

             <:Osu:1092949604389105794>・〢Osu

             <:Amongus:1093241183494488074>・〢Among us
             **
              `
                )
                .setThumbnail('https://images-ext-2.discordapp.net/external/3LQDGYTjKngOC23eHSrulam1ZHtC2WvsTighP53M28Q/%3Fsize%3D1024/https/cdn.discordapp.com/icons/869286386476384276/a_ef310917c07dacefeb57042e3f7f0803.gif?width=435&height=435')
            const MESA = await message.channel.send({ embeds: [boobies] })
            MESA.react('<:Minecraft:1092946306328186952>');
            MESA.react('<:Roblox:1092947349246066738>');
            MESA.react('<:Brawlhalla:1092947534114197594>');
            MESA.react('<:fallguys:1092948004148879380>');
            MESA.react('<:Codenames:1092948064488149032>');
            MESA.react('<:Garticphone:1092948386270941204>');
            MESA.react('<a:makeitmemes:1092948518852894841>');
            MESA.react('<:Osu:1092949604389105794>');
            MESA.react("<:stumpleguys:1092949282614677586>")
            MESA.react("<:Amongus:1093241183494488074>")
        }
    }
})


client.on("messageCreate", async message => {
    if (message.content.startsWith(prefix + "warn")) {
        const ganyu = message.mentions.members.first()
        const ganyuboobs = message.mentions.users.first()
        const ganyutits = message.content.split(' ').slice(2).join(' ');
        if (message.member.roles.cache.some(role => role.name === `Ganyu's Prems`)) {
            if (!ganyuboobs) { message.channel.send("KILL YOUR SELF") } else {
                if (ganyuboobs.id === naru) {
                    message.channel.send("- ..really? wanna die that bad?")
                } else {
                    if (!ganyutits[0]) {
                        message.channel.send(`
          **Please specify the reason for the warning.. example:** 
    
           > a!warn <@${message.author.id}> because he did something bad!
          `)
                    } else {

                        message.channel.send(`** <:8998ganyuconfusedsd1:1094340469091213323> | Done .. __${ganyuboobs.username}__ Got A Warn!**`)



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
                            message.channel.send(`**__<@${ganyuboobs.id}>__ Got 3 Warns..**`).then((sentMessage) => {
                                const channel = client.channels.cache.find(channel => channel.name === "🛠・〢warns")
                                const ganyusass = new EmbedBuilder()
                                    .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL(), url: 'http://naru.great-site.net' })
                                    .setTitle(`${ganyuboobs.username} Got 3 Warns~`)
                                    .setThumbnail(ganyuboobs.avatarURL({ dynamic: true }))
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
                    .setTitle(`${ganyuboobs.username} Got a Warn~`)
                    .setThumbnail(ganyuboobs.avatarURL({ dynamic: true }))
                    .addFields(
                        { name: `name`, value: ganyuboobs.username },
                        { name: `id`, value: ganyuboobs.id },
                        { name: `reason`, value: ganyutits },

                    )
                    .setFooter({ text: "Warn giver : " + " " + message.author.username, iconURL: message.author.avatarURL({ dynamic: true }) })
                channel2.send({ embeds: [ganyutity] })
                const ganyutities = new EmbedBuilder()
                    .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL(), url: 'http://naru.great-site.net' })
                    .setTitle(`You Got a Warn~`)
                    .setThumbnail(ganyuboobs.avatarURL({ dynamic: true }))
                    .addFields(
                        { name: `name`, value: ganyuboobs.username },
                        { name: `reason`, value: ganyutits }
                    )
                    .setFooter({ text: "if you think that there is a mistake please contact the mods, thank you~" })
                ganyuboobs.send({ embeds: [ganyutities] })
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
            const ganyuboobs = message.mentions.users.first()
            const ganyuboobies = message.mentions.members.first()
            if (!ganyuboobs) return message.channel.send("invite who?")
            await message.guild.roles.fetch()
            let thiscoderole2 = message.guild.roles.cache.find(role => role.name === reg)
            console.log(ganyu["M"].points + " " + thiscoderole2.members.size)
            if (ganyu["M"].points < 10 && ((thiscoderole2.members.size > 10))) {
                message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 11 members till you reach LVL.2 (10 points You got ${ganyu["M"].points} points)**`)
            } else if (ganyu["M"].points < 5 && ((thiscoderole2.members.size > 5))) {
                message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 6 members till you reach LVL.1 (5 points You got ${ganyu["M"].points} points)**`)
            } else {
                let filter2 = m => m.author.id === ganyuboobs.id
                const confirmation = await message.channel.send(`**__${ganyuboobs.username}__, You have been invited to join __${reg}__ Wanna join? (Y/N)**`)
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
                const ganyuboobs = message.mentions.users.first()
                const ganyuboobies = message.mentions.members.first()
                if (!ganyuboobs) return message.channel.send("invite who?")
                await message.guild.roles.fetch()
                let thiscoderole2 = message.guild.roles.cache.find(role => role.name === reg)
                if (ganyu["L"].points < 10 && ((thiscoderole2.members.size > 10))) {
                    message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 11 members till you reach LVL.2 (10 points You got ${ganyu["L"].points} points)**`)
                } else if (ganyu["L"].points < 5 && ((thiscoderole2.members.size > 5))) {
                    message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 6 members till you reach LVL.1 (5 points You got ${ganyu["L"].points} points)**`)
                } else {
                    let filter2 = m => m.author.id === ganyuboobs.id
                    const confirmation = await message.channel.send(`**__${ganyuboobs.username}__, You have been invited to join __${reg}__ Wanna join? (Y/N)**`)
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
                    const ganyuboobs = message.mentions.users.first()
                    const ganyuboobies = message.mentions.members.first()
                    if (!ganyuboobs) return message.channel.send("invite who?")
                    await message.guild.roles.fetch()
                    let thiscoderole2 = message.guild.roles.cache.find(role => role.name === reg)
                    if (ganyu["i"].points < 10 && ((thiscoderole2.members.size > 10))) {
                        message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 11 members till you reach LVL.2 (10 points You got ${ganyu["i"].points} points)**`)
                    } else if (ganyu["i"].points < 5 && ((thiscoderole2.members.size > 5))) {
                        message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 6 members till you reach LVL.1 (5 points You got ${ganyu["i"].points}) points**`)
                    } else {
                        let filter2 = m => m.author.id === ganyuboobs.id
                        const confirmation = await message.channel.send(`**__${ganyuboobs.username}__, You have been invited to join __${reg}__ Wanna join? (Y/N)**`)
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
                        const ganyuboobs = message.mentions.users.first()
                        const ganyuboobies = message.mentions.members.first()
                        if (!ganyuboobs) return message.channel.send("invite who?")
                        await message.guild.roles.fetch()
                        let thiscoderole2 = message.guild.roles.cache.find(role => role.name === reg)
                        if (ganyu["S"].points < 10 && ((thiscoderole2.members.size > 10))) {
                            message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 11 members till you reach LVL.2 (10 points You got ${ganyu["S"].points} points)**`)
                        } else if (ganyu["S"].points < 5 && ((thiscoderole2.members.size > 5))) {
                            message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 6 members till you reach LVL.1 (5 points You got ${ganyu["S"].points} points)**`)
                        } else {
                            let filter2 = m => m.author.id === ganyuboobs.id
                            const confirmation = await message.channel.send(`**__${ganyuboobs.username}__, You have been invited to join __${reg}__ Wanna join? (Y/N)**`)
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
                            const ganyuboobs = message.mentions.users.first()
                            const ganyuboobies = message.mentions.members.first()
                            if (!ganyuboobs) return message.channel.send("invite who?")
                            await message.guild.roles.fetch()
                            let thiscoderole2 = message.guild.roles.cache.find(role => role.name === reg)
                            if (ganyu["F"].points < 10 && ((thiscoderole2.members.size > 10))) {
                                message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 11 members till you reach LVL.2 (10 points You got ${ganyu["F"].points} points)**`)
                            } else if (ganyu["F"].points < 5 && ((thiscoderole2.members.size > 5))) {
                                message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 6 members till you reach LVL.1 (5 points You got ${ganyu["F"].points} points)**`)
                            } else {
                                let filter2 = m => m.author.id === ganyuboobs.id
                                const confirmation = await message.channel.send(`**__${ganyuboobs.username}__, You have been invited to join __${reg}__ Wanna join? (Y/N)**`)
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
                                const ganyuboobs = message.mentions.users.first()
                                const ganyuboobies = message.mentions.members.first()
                                if (!ganyuboobs) return message.channel.send("invite who?")
                                await message.guild.roles.fetch()
                                let thiscoderole2 = message.guild.roles.cache.find(role => role.name === reg)
                                if (ganyu["N"].points < 10 && ((thiscoderole2.members.size > 10))) {
                                    message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 11 members till you reach LVL.2 (10 points You got ${ganyu["N"].points} points)**`)
                                } else if (ganyu["N"].points < 5 && ((thiscoderole2.members.size > 5))) {
                                    message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 6 members till you reach LVL.1 (5 points You got ${ganyu["N"].points} points)**`)
                                } else {
                                    let filter2 = m => m.author.id === ganyuboobs.id
                                    const confirmation = await message.channel.send(`**__${ganyuboobs.username}__, You have been invited to join __${reg}__ Wanna join? (Y/N)**`)
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
                                    const ganyuboobs = message.mentions.users.first()
                                    const ganyuboobies = message.mentions.members.first()
                                    if (!ganyuboobs) return message.channel.send("invite who?")
                                    await message.guild.roles.fetch()
                                    let thiscoderole2 = message.guild.roles.cache.find(role => role.name === reg)
                                    if (ganyu["BSN"].points < 10 && ((thiscoderole2.members.size > 10))) {
                                        message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 11 members till you reach LVL.2 (10 points You got ${ganyu["NSN"].points} points)**`)
                                    } else if (ganyu["NSN"].points < 5 && ((thiscoderole2.members.size > 5))) {
                                        message.channel.send(`**Your clan is full.. You have ${thiscoderole2.members.size} members, while you can't add more than 6 members till you reach LVL.1 (5 points You got ${ganyu["NSN"].points} points)**`)
                                    } else {
                                        let filter2 = m => m.author.id === ganyuboobs.id
                                        const confirmation = await message.channel.send(`**__${ganyuboobs.username}__, You have been invited to join __${reg}__ Wanna join? (Y/N)**`)
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
    if (message.content.startsWith(prefix + "Gavatar")) {
        if (message.author.id === naru) {
            const link = message.content.split(' ').slice(1).join(' ');
            client.user.setAvatar(link).catch(err => console.log(err));
            const ganyus = new EmbedBuilder()
            .setColor(1752220)
                .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL() })
                .setTitle("Done")
                .setImage(link);
            message.channel.send({ embeds: [ganyus] })
        } else {
            message.channel.send(`**You are not naru.?**`)
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
    if (message.content.startsWith(prefix + "slap")) {
        let mention = message.mentions.users.first();
        if (!mention) return message.channel.send("**Who do you want me to slap for you?**");
        let slaped = ["https://gifdb.com/images/high/girl-s-last-tour-anime-slap-51dqai0u072jrc21.gif",
            "https://media.tenor.com/OuYAPinRFYgAAAAC/anime-slap.gif",
            "https://gifdb.com/images/high/mukai-naoya-angry-anime-slap-kn9tjua2wimu0rn9.gif",
            "https://media.tenor.com/iQ6cTO57hWMAAAAC/slap-anime.gif"
        ]
        const randomslaped = slaped[Math.floor(Math.random() * slaped.length)];
        if (message.author.id === mention.id) { message.channel.send("**really? wanna slap yourself?**") } else {
            let slap = new EmbedBuilder()
            .setColor(1752220)
                .setTitle(message.author.username + " " + "slapped" + " " + mention.username)
                .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL() })
                .setImage(randomslaped)
                .setFooter({ text: 'made by : ナル#9291', iconURL: 'https://media.discordapp.net/attachments/869286387206225933/1093680971041218610/106796503_p0_master1200.jpg?width=468&height=468' });
            message.channel.send({ embeds: [slap] })
        }
    }
})


client.on("messageCreate", message => {
    if (message.content.startsWith(prefix + "kill")) {
        let mention2 = message.mentions.users.first();
        if (!mention2) return message.channel.send("**Who do you want me to kill for you?**");
        let killed = ["https://media.tenor.com/muad6BkGQDMAAAAC/anime-death.gif",
            "https://i.pinimg.com/originals/42/dd/88/42dd884acd74ab8c3755e17cebc5c1d2.gif",
            "https://64.media.tumblr.com/60b71fe554cedf6d1aac052da99f91c7/tumblr_p9bey2Oa4V1wn2b96o1_500.gif",
            "http://media.giphy.com/media/11Bcs0WCLQDxZe/giphy.gif",

        ]
        const randomkilled = killed[Math.floor(Math.random() * killed.length)];
        if (message.author.id === mention2.id) { message.channel.send("**really? wanna kill yourself?**") } else {
            let kill = new EmbedBuilder()
            .setColor(1752220)
                .setTitle(message.author.username + " " + "trying to kill" + " " + mention2.username)
                .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL() })
                .setImage(randomkilled)
                .setFooter({ text: 'made by : ナル#9291', iconURL: 'https://media.discordapp.net/attachments/869286387206225933/1093680971041218610/106796503_p0_master1200.jpg?width=468&height=468' });
            message.channel.send({ embeds: [kill] })
            let killperc = [`${mention2} **Was killed successfully!**`, `${mention2} **survived this time!**`];
            const randomperc = killperc[Math.floor(Math.random() * killperc.length)];
            message.channel.send(randomperc)
        }
    }
})


client.on("messageCreate", message => {
    if (message.content.startsWith(prefix + "bonk")) {
        let mention2 = message.mentions.users.first();
        if (!mention2) return message.channel.send("**Who do you want me to bonk for you?**");
        let bonked = [
            "https://media.tenor.com/CrmEU2LKix8AAAAC/anime-bonk.gif",
            "https://gifdb.com/images/high/pepe-the-frog-anime-bonk-s28asrzgmm1lynv3.gif",
            "https://64.media.tumblr.com/09cd8d36a573a91ac22dd7521a12dfc8/tumblr_pq8976Yawh1y0nwq1o1_540.gif",
            "https://media.tenor.com/31WOy2yRK3QAAAAC/chuunibyou-hit.gif",

        ]
        const randombonked = bonked[Math.floor(Math.random() * bonked.length)];
        if (message.author.id === mention2.id) { message.channel.send("**really? wanna bonk yourself?**") } else {
            let bonk = new EmbedBuilder()
            .setColor(1752220)
                .setTitle(message.author.username + " " + "bonk'ed" + " " + mention2.username)
                .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL() })
                .setImage(randombonked)
                .setFooter({ text: 'made by : ナル#9291', iconURL: 'https://media.discordapp.net/attachments/869286387206225933/1093680971041218610/106796503_p0_master1200.jpg?width=468&height=468' });
            message.channel.send({ embeds: [bonk] })

        }
    }
})


client.on("messageCreate", message => {
    if (message.content.startsWith(prefix + "kiss")) {
        let mention = message.mentions.users.first();
        if (!mention) return message.channel.send("**Who do you want to kiss?**");
        let kissed = [
            "https://media.tenor.com/OEPq5qCDF24AAAAM/anime-kiss.gif",
            "https://i.pinimg.com/originals/13/9d/ab/139dab5977df4f51acde60af9e5a1f69.gif",
            "https://thumbs.gfycat.com/FatalHarmfulCormorant-size_restricted.gif",
            "https://i.pinimg.com/originals/32/d4/f0/32d4f0642ebb373e3eb072b2b91e6064.gif",
            "https://media.tenor.com/8JdJyDd1higAAAAC/kiss-cheek.gif",
            "https://media4.giphy.com/media/aZSMD7CpgU4Za/200w.gif?cid=82a1493bpmlbdaoox07xkjazkd95bnc1xdzqtm1qavk7ljyy&rid=200w.gif&ct=g",

        ]
        const randomkissed = kissed[Math.floor(Math.random() * kissed.length)];
        if (message.author.id === mention.id) { message.channel.send("**really? wanna kiss yourself?**") } else if (mention.id === "1082656396874633326") {


            if (authorized.includes(mention.id) && (message.author.id === "919329186093604915")) {


                let kiss = new EmbedBuilder()
                .setColor(1752220)
                    .setTitle(message.author.username + " " + "kissed" + " " + mention.username)
                    .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL() })
                    .setImage(randomkissed)
                    .setFooter({ text: 'made by : ナル#9291', iconURL: 'https://media.discordapp.net/attachments/869286387206225933/1093680971041218610/106796503_p0_master1200.jpg?width=468&height=468' });
                message.channel.send({ embeds: [kiss] })
                console.log(mention.username)
            } else {
                message.channel.send("**Your are not my husband!**")
            }
        } else {
            let kiss = new EmbedBuilder()
                .setColor("BLUE")
                .setTitle(message.author.username + " " + "kissed" + " " + mention.username)
                .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL() })
                .setImage(randomkissed)
                .setFooter({ text: 'made by : ナル#9291', iconURL: 'https://media.discordapp.net/attachments/869286387206225933/1093680971041218610/106796503_p0_master1200.jpg?width=468&height=468' });
            message.channel.send({ embeds: [kiss] })
            console.log(mention.username)
        }
    }
})

client.on("messageCreate", message => {
    if (message.content.startsWith(prefix + "love")) {
        let mention = message.mentions.users.first();
        if (!mention) {
            message.channel.send("mention someone")
        } else {


            if ((mention.id === "1082656396874633326") && (message.author.id === naru)) {
                message.channel.send(`**The love between the two of us is __100%__ its really strong, i love you babe **`)
            } else {
                const ganyuuuu = "1082656396874633326"
                if (mention.id === ganyuuuu) {
                    if (message.author.id != naru) {
                        message.channel.send("you are not my husband fuck off bitch")
                    }
                } else {

                    if (!mention) return;
                    if (message.author.id === mention.id) {
                        let prec1 = [Math.floor(Math.random() * 100) + 1]
                        if (prec1 > 50) {
                            message.channel.send(`**disgusting ~ a f$cking narcissist? you are  __${prec1}%__ narcissist!**`)
                        } else if (prec1 < 50) {
                            message.channel.send(`**Love yourself more... you are __${prec1}__% narcissist**`)
                        } else {
                            message.channel.send("FUCK OFF")
                        }

                    } else {

                        let prec = [Math.floor(Math.random() * 100) + 1]
                        if (prec > 50) {
                            message.channel.send(`**The love between you two is __${prec}%__ its really strong~~ **`)
                        } else if (prec < 50) {
                            message.channel.send(`**the love between you two is rated as __${prec}__% seems like they don't like each other.. **`)
                        }
                    }
                }
            }
        }
    }
}
)
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


client.on("messageCreate", message => {
    const cuttwet = ["كت", "كتتويت", "cut", "cuttweet"]
    if (message.content.startsWith(prefix + "cut")) {
        if (message.author.bot) return;
        const tweet = [
            "**لو اتحولت لـ اخر شخصيه لعبت بيها.. مين هتكون؟**",
            "**اخر لعبه لعبتها؟**",
            "**فلمك المفضل؟**",
            "**انميك المفضل؟**",
            "**نوع الاغاني المفضل؟**",
            "**اخر مره اتضربت/اتعاقبت؟ والسبب؟**",
            "**اللون المفضل؟**",
            "**الماين بتاعك في قنشن؟**",
            "**لعبتك المفضله؟**",
            "**مرتبط/ـه؟**",
            "**منشن ناس مش هتنساهم في السرفر؟**",
            "**منشن شخص عاوز تقوله (اقتل نفسك!)**",
            "**شخص نفسك تقابله هنا؟**",
            "**منشن اول واحد علي بالك لما قريت الكت تويت دي**",
            "**منشن اكثر شخص شايف انه محتاج مهارات اجتماعيه.. (تقدر تشمل نفسك)**",
            "**انوب شخص لعبت معاه؟**",
            "**اغنيه معلقه ف راسك الفتره دي؟**",
            "**تفضل ترجمه ولا دبلجه؟**",
            "**اكثر لغه تفضلها؟**",
            "**شخصيتك المفضله؟**",
            "**اول شخصيه فايف ستار جاتلك؟**",
            "**اخر شخصيه فايف ستار وسحبتلها ليه؟**",
            "**شخصيه فايف ستار ناوي تجيبها؟**",
            "**غانيو عمتك؟**",
            "غانيو عمتك.",
            "فطرتوا ايه؟",

        ]
        const randomtweet = tweet[Math.floor(Math.random() * tweet.length)];
        let cut = new EmbedBuilder()
            .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL() })
            .setTitle("CutTweet")
            .setThumbnail("https://images-ext-2.discordapp.net/external/3LQDGYTjKngOC23eHSrulam1ZHtC2WvsTighP53M28Q/%3Fsize%3D1024/https/cdn.discordapp.com/icons/869286386476384276/a_ef310917c07dacefeb57042e3f7f0803.gif?width=435&height=435")
            .setDescription(randomtweet)
            .setColor(1752220)
            .setFooter({ text: 'made by : ナル#9291', iconURL: 'https://media.discordapp.net/attachments/869286387206225933/1093680971041218610/106796503_p0_master1200.jpg?width=468&height=468' });
        message.channel.send({ embeds: [cut] })
    }
})

client.on("messageCreate", message => {
    if (message.content.startsWith("ganyu")) {
        const args = message.content.split(' ').slice(1).join(' ');
        if (args === "am i gay" && (message.author.id != naru)) {
            message.channel.send("yes, yes you are")
        } else {
            if (message.author.id != naru) {
                message.channel.send("My husband told me to not talk to strangers.")
            } else {
                if (!args[0]) {
                    message.channel.send("how can i help you?.")
                } else {
                    if (args.startsWith("do you love me?")) {
                        message.channel.send("**OfC i do baby!!**")
                    }
                    if (args.startsWith("should i study?")) {
                        message.channel.send("yeah you really should sweetheart, go and make me broud!")
                    }
                }
            }
        }
    }
})

client.on("messageCreate", async message => {
    if (message.content.startsWith("test")) {
        if (message.author.id === naru) {
            await message.guild.roles.fetch()
            const bots = message.guild.roles.cache.find(role => role.name == "Eyad's Ganyu");
            console.log(bots.members.size);
        }
    }
})

client.on("messageCreate", message => {
    if (message.content.startsWith(prefix + "help")) {
        if (message.author.bot) {
            console.log("igonred" + message.author.username)
        } else {
            if (message.author.id === naru) {
                message.channel.send("shhh~ darling i will help you when we go back home | <:H_baalteehee:1030577883732779049>")
            } else {
                let help = new EmbedBuilder()
                    .setTitle("Help")
                    .setColor(1752220)
                    .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL() })
                    .addFields(
                        { name: `a!kill`, value: 'kills the mentioned user! example :                         ``a!kill @ナル#9291 because he was a bad person today!`` ' },
                        { name: `a!kiss`, value: 'kiss the mentioned user! .. just a lil kiss on the cheeks..' },
                        { name: `a!bonk`, value: 'BONKS' },
                        { name: `a!love`, value: 'shows the love__%__ between you and the user you mentioned' },
                        { name: `a!gay`, value: 'how much is your friend gay?' },
                        { name: `a!slap`, value: 'slaps the mentioned user!' },
                        { name: `a!warn`, value: '(only for admins with my prems) warns a user', inline: true },
                        { name: `a!kick`, value: '(only for admins) for real now?', inline: true },

                    )
                    .setImage("https://media.discordapp.net/attachments/869286387206225933/1096413015634628618/ganyu-genshin-impact-4k-wallpaper-uhdpaper.png?width=833&height=468")
                message.channel.send({ embeds: [help] })
            }
        }
    }
})



client.on("messageCreate", async message => {
    const idk = JSON.parse(fs.readFileSync("./idk.json", "utf8"));
    const love = message.mentions.users.first()
    const au = message.author;
    const args = message.content.split(' ').slice(2).join(' ');
    if (message.content.startsWith(prefix + "rtext")) {
        if (!love) {
            message.channel.send("error 8212: mention someone")
        } else {
            const reg = idk[love.id]
            message.channel.send(data.content)
        }
    }
})
const deletedMessages = new Collection();

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    const args = message.content.trim().split(/\s+/g);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'a!snipe':
            const msg = deletedMessages.get(message.channel.id);
            if (!msg) return message.reply('could not find any deleted messages in this channel.');

            const embed = new EmbedBuilder()
                .setAuthor({ name: msg.author.tag, iconURL: msg.author.avatarURL({ dynamic: true }) })
                .setDescription(msg.content);

            message.channel.send({ embeds: [embed] }).catch(err => console.error(err));

            break;
    }
});

client.on('messageDelete', message => {
    deletedMessages.set(message.channel.id, message);
});
///
const ganyu = JSON.parse(fs.readFileSync("./ganyu.json", "utf8"));
client.on("messageCreate", async message => {
    if (message.content.startsWith(prefix + "point")) {

        if (message.member.roles.cache.some(role => role.name === `Ganyu's Prems`)) {
            const args = message.content.split(' ').slice(1).join(' ')
            const point1s = message.content.split(' ').slice(2).join(' ')
            let reg = [
                "M", "L", "I", "S", "F", "N", "Sn",
                "m", "l", "i", "s", "f", "n", "sn"]
            const savedreg = ["M", "L", "I", "S", "F", "N", "Sn"]
            let mond = ["M", "m"]
            let liy = ["l", "L"]
            const inz = ["I", "i"]
            const sum = ["s", "S"]
            const fot = ["F", "f"]
            const nat = ["n", "N"]
            const sn = ["Sn", "sn"]
            const liyue = ganyu["L"]
            const m = ganyu["M"]
            const s = ganyu["S"]
            const f = ganyu["F"]
            const n = ganyu["N"]
            const NSN = ganyu["NSN"]
            const i = ganyu["i"]
            const one = 1
            if (reg.some(word => args === word)) {
                if (mond.some(mond => args === mond)) {
                    message.channel.send("__<@&1097131951120457798> __ **Got a point!**");
                    ganyu["M"] = {
                        points: m.points + 1
                    }
                    console.log(m.points)
                } else if (liy.some(liy => args === liy)) {
                    message.channel.send("__<@&1097132598087651328> __ **Got a point!**")
                    ganyu["L"] = {
                        points: liyue.points + 1
                    }
                } else if (inz.some(inz => args === inz)) {
                    message.channel.send("__<@&1097132632170565682> __ **Got a point!**")
                    ganyu["i"] = {
                        points: i.points + 1
                    }
                } else if (sum.some(sum => args === sum)) {
                    message.channel.send("__<@&1097131973257986098> __ **Got a point!**")
                    ganyu["S"] = {
                        points: s.points + 1
                    }
                } else if (fot.some(fot => args === fot)) {
                    message.channel.send("__<@&1097131976353386576> __ **Got a point!**")
                    ganyu["F"] = {
                        points: f.points + 1
                    }
                } else if (nat.some(nat => args === nat)) {
                    message.channel.send("__<@&1097131979046142025> __ **Got a point!**")
                    ganyu["N"] = {
                        points: n.points + 1
                    }
                } else if (sn.some(sn => args === sn)) {
                    message.channel.send("__<@&1097131982250586132> __ **Got a point!**")
                    ganyu["NSN"] = {
                        points: NSN.points + 1
                    }
                }
                const ganyuwrite = fs.createWriteStream("./ganyu.json")
                ganyuwrite.write(JSON.stringify(ganyu), function(err) {
                    if (err) throw err;
                })
            }
        }
    }
})
client.on("messageCreate", async message => {
    if (message.content.startsWith(prefix + "clearLD")) {
        if (message.author.id != naru) {
            message.channel.send("**You are not my owner, you can't use this command.. My owner is: <@919329186093604915> | <a:paimonemergencyf:1030577837754818701>**")
        } else {
            ganyu["M"] = {
                points: 0
            }
            ganyu["NSN"] = {
                points: 0
            }
            ganyu["N"] = {
                points: 0
            }
            ganyu["F"] = {
                points: 0
            }
            ganyu["S"] = {
                points: 0
            }
            ganyu["i"] = {
                points: 0
            }
            ganyu["L"] = {
                points: 0
            }
            const ganyuwrite = fs.createWriteStream("./ganyu.json")
            ganyuwrite.write(JSON.stringify(ganyu), function(err) {
                if (err) throw err;
            })
            message.channel.send("**Done.. All points cleared!**")
        }
    }
})


client.on("messageCreate", async message => {
    if (message.content.startsWith(prefix + "kick")) {
        const member = message.mentions.users.first();
        const member2 = message.mentions.members.first();
        const args = message.content.split(" ").slice(2).join(' ')
        if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("You don't have permission to kick people");
        if (!args[0]) return message.channel.send("Specify a reason.");
        if (!member) return message.channel.send("mention someone.")
        if (member.id == client.user.id) {
            return message.channel.send("I can't kick myself.")
        }
        if (member.id === naru && (message.author.id === naru)) return message.channel.send("w- why do you want to kick yourself baby?")
        if (member.id === naru) return message.channel.send("Really Ni$$a?")
        if (message.member.roles.highest.comparePositionTo(message.mentions.members.first().roles.highest) < 1) {
            return message.channel.send("I have lower role.");
        }
        if (message.member.id === member.id) return message.channel.send("I can't kick you.");
        member2.kick({
            reason: `${args}`,
        })
        message.channel.send(`<:B2_8588nahidathinking:1084035906605944873> | **L + Ratio .. ${member.username} Was kicked successfully **`)
    }
})

client.on("messageCreate", async message => {
    if (message.content.startsWith(prefix + "LD") || message.content.startsWith(prefix + "ld") || message.content.startsWith(prefix + "leaderboard")) {
        const ganyu = JSON.parse(fs.readFileSync("./ganyu.json", "utf8"));
        const gg = [ganyu["M"].points, ganyu["L"].points, ganyu["F"].points, ganyu["N"].points, ganyu["NSN"].points, ganyu["i"].points, ganyu["S"].points]
        const sto = gg.sort(function(a, b) {
            return a.points - b.points;
        })
        const text = sto
        const ganyutits = new EmbedBuilder()
            .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL(), url: 'http://naru.great-site.net' })
            .setThumbnail("https://i.pinimg.com/originals/76/8a/ed/768aed296e39da25035281fa16e625a2.png")
            .setTitle("Server Leaderboard")
            .setDescription(`
    **
    <@&1097131951120457798> : ${ganyu["M"].points}
    <@&1097132598087651328> : ${ganyu["L"].points}
    <@&1097132632170565682> : ${ganyu["i"].points}
    <@&1097131973257986098> : ${ganyu["S"].points}
    <@&1097131976353386576> : ${ganyu["F"].points}
    <@&1097131979046142025> : ${ganyu["N"].points}
    <@&1097131982250586132> : ${ganyu["NSN"].points}
    **
    `)
        message.channel.send({ embeds: [ganyutits] })
        console.log(sto)
    }
})
//

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

let sug = ["1031216497168760973"];
client.on("messageCreate", function(message) {
    let args = message.content.split(",");
    if (message.author.id === naru) return;
    if (message.author.bot) return;
    if (sug.includes(message.channel.id)) {
        message.delete()
        const user = client.users.cache.get(naru)
        const embed = new EmbedBuilder()
            .setAuthor({ name: message.author.tag, iconURL: message.author.avatarURL({ dynamic: true }) })
            .setColor(1752220)
            .setTitle("New Suggestion")
            .setDescription("```" + args + "```")
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setFooter({ text: `Suggested by ${message.author.tag}`, iconURL: message.author.avatarURL({ dynamic: true }) })
            .setTimestamp()
        message.channel.send({ embeds: [embed] }).then(msg => {
            msg.react(`<:D5_4838hutaostonks:1021120633389715608>`).then(() => {
                msg.react('<:D6_6408qiqinotstonks:1021120606080606228>')
            })
        })
            .catch(console.error)
    }
});


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
    if (message.content.startsWith(prefix + "blacklist")) {
        let bl = message.guild.roles.cache.find(role => role.name === 'BlackList')
        let b2 = message.guild.roles.cache.find(role => role.name === 'Member')
        const mention = message.mentions.members.first()
        const black = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
        const args = message.content.split(" ").slice(1).join(" ")
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("**Excuse me, I don't mean to bother you, but it seems like you don't have the necessary administrator permissions to use this command... I'm sorry for the inconvenience, I hope you understand. **");
        try {
            const member = message.mentions.members.first() || (await message.guild.members.fetch(args) || !args);
            if (!args) { message.channel.send("Um, excuse me... I'm sorry to bother you, but could you please give me a Mention or ID for verification? It's just that if you don't, I might have to blacklist you or myself... I'm really sorry for the trouble.") }
            else {
                console.log(member.user.username)

                if (!black[member.id]) {
                    black[member.id] = {
                        joined: 1,
                        tag: member.user.tag
                    }
                    message.channel.send(`Action completed. The user ${member} has been blacklisted by ${message.author}.`)
                    member.roles.add(bl)
                    member.roles.remove(b2)
                    const warn = new EmbedBuilder()
                        .setTitle("Warning!")
                        .setThumbnail(member.user.avatarURL({ dynamic: true }))
                        .setDescription(`Hello ${member.user.tag}, this is Ganyu from Genshin Impact | EG. I regret to inform you that one of our moderators has requested your account to be blacklisted due to a violation of our server's rules. As a result, your account has been blacklisted and will require confirmation before it can be reinstated.`)
                    const warn2 = new EmbedBuilder()
                        .setDescription("To verify, click (<#1111281546876424253>) and type __a!verify__. This will create a ticket for you to talk with the mods and complete the verification process.");
                    member.send({ embeds: [warn] })
                    member.send({ embeds: [warn2] })

                } else {
                    if (black[member.id]) {
                        message.channel.send(`The user ${member} is already blacklisted!!`)
                    }
                }


            }
        } catch (err) {
            message.channel.send(`**${err}**`)
        }
        const blacklist = fs.createWriteStream("./blacklist.json")
        blacklist.write(JSON.stringify(black), function(err) {
            if (err) throw err;
        })
    }
})
client.on("messageCreate", async message => {
    if (message.content.startsWith(prefix + "list")) {
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("**Excuse me, I don't mean to bother you, but it seems like you don't have the necessary administrator permissions to use this command... I'm sorry for the inconvenience, I hope you understand. **");
        const mention = message.mentions.members.first()
        const black = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
        const arr = Object.keys(black);
        const member = message.author
        const embed = new EmbedBuilder()
            .setTitle("Blacklisted")
            .setThumbnail(member.avatarURL({ dynamic: true }))
        arr.forEach(element => {
            const uss = `${element}`
            embed.addFields(
                { name: `TAG:${black[element].tag} \nID : ${element}  `, value: `Joined ${black[element].joined} times!` },
            )
        })

        message.channel.send({ embeds: [embed] })
    }

})
client.on("messageCreate", async message => {
    if (message.content.startsWith(prefix + "whitelist")) {
        let bl = message.guild.roles.cache.find(role => role.name === 'BlackList')
        let b2 = message.guild.roles.cache.find(role => role.name === 'Member')
        const mention = message.mentions.members.first()
        const black = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
        const args = message.content.split(" ").slice(1).join(" ")
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("**Excuse me, I don't mean to bother you, but it seems like you don't have the necessary administrator permissions to use this command... I'm sorry for the inconvenience, I hope you understand. **");
        try {
            const member = message.mentions.members.first() || (await message.guild.members.fetch(args) || !args);
            if (!args) { message.channel.send("Please provide a Mention or ID for verification so I can add it to the whitelist. Thank you.") }
            else {
                console.log(member.user.username)

                if (black[member.user.id]) {
                    delete black[member.user.id];
                    message.channel.send(`Action completed. The user ${member} has been whitelisted by ${message.author}.`)
                    member.roles.remove(bl)
                    member.roles.add(b2)
                    const blacklist = fs.createWriteStream("./blacklist.json")
                    blacklist.write(JSON.stringify(black), function(err) {
                        if (err) throw err;
                    })
                } else {
                    message.channel.send(`**- this user isn't blacklisted!!**`)
                }

            }
        } catch (err) {
            message.channel.send(`**- ${err}**`)
        }
    }
})
client.on("guildMemberAdd", async member => {
    let bl = member.guild.roles.cache.find(role => role.name === 'BlackList')
    let user = member;
    const black = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
    const chan = client.channels.cache.find(channel => channel.name === "🛠・〢log")
    console.log("member joined" + ` ${member.user.tag}` + ` ${member.user.createdAt} and now is ${Date.now()}`)
    if (black[member.user.id]) {
        black[member.user.id].joined++
        chan.send(`member: ${member} tried to join again.. total of ${times.joined} times joined!`)

    }
    if (Date.now() - member.user.createdAt < 1000 * 60 * 60 * 24 * 1) {
        const timer = Date.now() - member.user.createdAt
        const huh = Math.round(timer / 3.6e+6)
        const times = black[member.user.id]
        if (!black[member.user.id]) {
            black[member.user.id] = {
                joined: 1,
                tag: member.user.tag
            }
        }
        const blacklist = fs.createWriteStream("./blacklist.json")
        blacklist.write(JSON.stringify(black), function(err) {
            if (err) throw err;
        })
        const warn = new EmbedBuilder()
            .setTitle("Warning!")
            .setThumbnail(member.user.avatarURL({ dynamic: true }))
            .setDescription(`Hi  __${member.user.tag}__, I'm Ganyu from Genshin Impact. You were Blacklisted from the server because your account was created less than a day ago, specifically ${huh} hours ago. As a result, your account has been blacklisted and needs confirmation...`)
        const warn2 = new EmbedBuilder()
            .setDescription("To verify, click (<#1111281546876424253>) and type __a!verify__. This will create a ticket for you to talk with the mods and complete the verification process.");
        member.send({ embeds: [warn] })
        member.send({ embeds: [warn2] })
        member.roles.add(bl)
    }

})
client.on("messageCreate", async message => {
    if (message.content.startsWith(prefix + "verify")) {
        if (message.member.roles.cache.some(role => role.name === `BlackList`)) {
            try {
                const chan = client.channels.cache.find(channel => channel.name === "confirmation")
                const ganyues = message.guild.channels.cache.find(channel => channel.name.startsWith(`v-${message.author.username.split(" ").slice(0)}`))
                if (ganyues) return message.channel.send(`**there is a ticket with your name already! ${ganyues}**`)
                if (chan.id != message.channel.id) return;
                if (!ganyues) {
                    let cate = message.guild.channels.cache.find(
                        (c) => c.name.toLowerCase() === "verify" && c.type === "GUILD_CATEGORY")
                    if (!cate) return console.log('category not found')
                    const embed = new EmbedBuilder()
                        .setTitle(`Welcome ${message.author.username}!`)
                        .setThumbnail(message.author.avatarURL({ dynamic: true }))
                        .setDescription(`Thank you for requesting verification. A moderator will guide you through the process. Please follow the instructions in the ticket to verify your identity. Once completed, the moderator will provide you the outcome. If you have any questions, please let us know. Thank you.`)

                    let channel = message.guild.channels.create(`v-${message.author.username}`, {
                        type: "text",
                        parent: cate,
                        permissionOverwrites: [{
                            id: message.guild.id,
                            deny: [
                                'VIEW_CHANNEL',
                            ],
                        }, {
                            id: message.author,
                            allow: [
                                'VIEW_CHANNEL',
                                'SEND_MESSAGES',
                            ],
                        }],
                    }).then(channeel => {
                        channeel.send({ embeds: [embed] })
                        channeel.send("@everyone")
                    })


                }
            } catch (err) {
                console.log(err)
            }
        }
    }
})


client.on("messageCreate", async message => {
    if (message.content.startsWith(prefix + "del") || message.content.startsWith(prefix + "delete")) {
        if (message.channel.name.startsWith("v")) {
            if (!message.member.permissions.has("ADMINISTRATOR")) return;
            message.author.send("Done.. you deleted " + message.channel.name)
            message.channel.delete();
        } else {
            console.log(message.author.username)
        }
    }
})




client.on("voiceStateUpdate", (oldVoiceState, newVoiceState) => { // Listeing to the voiceStateUpdate event
    const ganyu = JSON.parse(fs.readFileSync("./temp.json", "utf8"));
  if (newVoiceState.channel) { // The member connected to a channel.

    
   
      console.log(`${newVoiceState.member.user.tag} connected to ${newVoiceState.channel.id} .`);
      if (newVoiceState.channel.id ===  "1112533625561415810") {
        if (ganyu[newVoiceState.member.user.username]) return newVoiceState.member.voice.disconnect().then(member => {member.send("you already got a channel!")})
        let channel = newVoiceState.guild.channels.create(`${newVoiceState.member.user.username}`, {
          type: "GUILD_VOICE",
          parent: "1112533518682181642",
          permissionOverwrites: [{
              id: newVoiceState.guild.id,
              deny: [
                  'VIEW_CHANNEL',
              ],
          }, {
              id: "869291537220132884",
              allow: [
                  'VIEW_CHANNEL',
              ],
          }],
      }).then(chan => {
        newVoiceState.member.voice.setChannel(chan)
        if (!ganyu[chan.name]) {
            ganyu[chan.name] = {
                owner: chan.id,
            }
        }
        const ganyuwrite = fs.createWriteStream("./temp.json")
        ganyuwrite.write(JSON.stringify(ganyu), function(err) {
            if (err) throw err;
        })
      
      }
      
      )
  
     
    
    
    }

} else if (oldVoiceState.channel) { // The member disconnected from a channel.
    console.log(oldVoiceState.channel.name)
    console.log(oldVoiceState.member.user.username)
    const rawr = Object.keys(ganyu)
    rawr.forEach(async element => {
        console.log(element)
        var hentai = newVoiceState.member.guild.channels.cache.find(channel => channel.name === element);
        console.log(hentai.members.size)
        if (hentai.members.size = "0") {
             delete ganyu[element]
             hentai.delete()
             const ganyuwrite = fs.createWriteStream("./temp.json")
        ganyuwrite.write(JSON.stringify(ganyu), function(err) {
            if (err) throw err;
        })
             console.log("i love tits")
 
}

})
  };
});

client.on("messageCreate", async message => {
    if (message.content.startsWith(prefix + "accept")) {
        if (message.author.id === naru) {
            const member = message.mentions.users.first();
            const member1 = message.mentions.members.first();
            if (!member) return message.reply("**متمنشن حد يعم انت**")
            let embed = new EmbedBuilder()
            .setAuthor({name: member.username, iconURL: member.avatarURL({dynamic: true})})
            .setDescription(`
            Hey there!
            We're excited to let you know that your application for the staff position in ${message.guild.name} has been accepted!
            and we can't wait to have you as part of our team!
            you now have access to <#1119712122952224909>
            `)
            .setColor(1752220)
            .setThumbnail(message.guild.iconURL({dynamic: true}))
            .setTimestamp()
            member.send({embeds: [embed]})
                                 await message.guild.roles.fetch()
                                 let w2 = message.guild.roles.cache.find(role => role.name === 'staff')
                                 member1.roles.add(w2)
        }
    } 
})

client.on("messageCreate", async message => {
    const questions = JSON.parse(fs.readFileSync("./questions.json", "utf8")); 
        if (message.content.startsWith(prefix + "sq")) {
            if (message.member.permissions.has("ADMINISTRATOR")) {
            const ans = message.content.split(" ").slice(1)
            const num = message.content.split(" ").slice(2)
            const quu = message.content.split(" ").slice(3).join(" ")
            if (!questions[num[0]]) {
                questions[num[0]] = {
                    qn: num[0],
                    qs: quu,
                    answ: ans[0]
                }
                const ganyuwrite = fs.createWriteStream("questions.json");
                ganyuwrite.write(JSON.stringify(questions), function(err) {
                    if (err) throw err;
                })
                message.reply(`
                رقم السؤال ${questions[num[0]].qn}
                عنوان السؤال ${questions[num[0]].qs}
                اجابه السؤال ${questions[num[0]].answ}
                `)
            } else {
                message.reply("الرقم ده فيه سؤال")
            }
           
            
        }
    }
})


client.on("messageCreate", async message => {
    if (message.content.startsWith(prefix + "q")) {
        const args = message.content.split(" ").slice(1)
        const questions = JSON.parse(fs.readFileSync("./questions.json", "utf8"));
        const points = JSON.parse(fs.readFileSync("./points.json", "utf8"));
        console.log(args) 
       if (questions[args]) {
        let embed = new EmbedBuilder()
        .setAuthor({name: message.author.username, iconURL: message.author.avatarURL({dynamic: true})})
        .setThumbnail(message.guild.iconURL({dynamic: true})) 
        .setTitle(`السؤال رقم ${questions[args].qn}`)
        .setDescription(`**السؤال هو : ${questions[args].qs}**`)
        .setTimestamp();
        const channel1 = client.channels.cache.find(channel => channel.name === "event-chat")
        let hmm = await channel1.send({embeds: [embed], content: "@here"})
        const collector = hmm.channel.createMessageCollector({time: 60000, max: 1 });
        collector.on('collect', async (m) => {
            if (m.content === questions[args].answ) {
                message.reply(`**اجابه صحيحه.. الاجابه هي : __${m.content}__**`)
            }
        });
           collector.on('end', (collected, reason) => {
                    if (reason === 'time') {
                        message.channel.send(
                            `it's been a 60 seconds, no one answered`
                        );
                    }
                })
            };
       }
})

client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (message.content.startsWith("a!")) return;
    const ganyu = JSON.parse(fs.readFileSync("./points.json", "utf8"));
    const ganyutits = JSON.parse(fs.readFileSync("./msgs.json", "utf8"));

        if (!ganyutits[message.author.id]) {
            ganyutits[message.author.id] = {
                msgs: 1
            }
        } else {
            ganyutits[message.author.id] = {
                msgs: Number(ganyutits[message.author.id].msgs) + 1 
            }
        }
    const ganyuwrite = fs.createWriteStream("./points.json")
    ganyuwrite.write(JSON.stringify(ganyu), function(err) {
        if (err) throw err;
    })
    const ganyuwrite2 = fs.createWriteStream("./msgs.json")
    ganyuwrite2.write(JSON.stringify(ganyutits), function(err) {
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







































client.login("MTA4MjY1NjM5Njg3NDYzMzMyNg.GmULHe.bDpUtDpe0sCnHncKsn3GbrCMtzJMa7S-KRfPFA")