const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
module.exports = class LeaveCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'help',
      aliases: ['commands'],
      group: 'utility',
      memberName: 'help',
      guildOnly: false,
      description: 'See who contributed to the making of Houseannor Beats!'
    });
  }

run(message) {

  message.channel.stopTyping()
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#23CF17')
	.setTitle('Canary Mod -- Your moderation bot.')
	.setDescription('Bot prefix: `mod! { command }`')
	//ages-ext-2.discordapp.net/external/rxVgTdCYTx2OJyTDvaXyr_5leJSXxW-DE-JcUdEQ9zs/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/718154909194911817/764b2b2014b96228c91f88d9997c422a.png?width=480&height=480')
	.addFields(
		{ name: 'help', value: 'See what the bot can do' },
    { name: 'invite', value: 'Invite the bot!', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: "prune", value: 'Delete messages', inline: true },
    		{ name: 'say', value: 'Make the bot talk!', inline: true },
		{ name: 'ban', value: 'Ban a user.', inline: true },
    		{ name: 'unban', value: 'UnBan a user.', inline: true },
		{ name: 'kick', value: 'Kick a user.', inline: true },
    { name: 'mute', value: 'Mute a user.', inline: true },
    		{ name: 'unmute', value: 'UnMute a user.', inline: true },
		{ name: 'lockdown', value: 'Prevent anybody in a channel from talking.', inline: true },
    		{ name: 'lift', value: 'Lift the lockdown', inline: true },
		{ name: 'credits', value: 'See who made the bot!', inline: true },
	)
		.setTimestamp()
	.setFooter('Made By Canary Studio');

message.channel.send(exampleEmbed);

  }
           
};
 // https://discord.com/oauth2/authorize?client_id=733835641686851655&permissions=2147483639&scope=bot
//also change the help command, this was for one of my other bots ok
//I can If you want tho