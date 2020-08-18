const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login('NzMzODM1NjQxNjg2ODUxNjU1.XxI8JQ.Tez5kXABW4UvSLrMyElCwp9qlqQ');
module.exports = class KickCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'mute',
      aliases: ['m'],
      memberName: 'mute',
      group: 'music',
      description: 'Kicks a tagged member',
      guildOnly: true,
      userPermissions: ['MANAGE_MESSAGES', 'KICK_MEMBERS', 'BAN_MEMBERS'],
      clientPermissions: ['MANAGE_MESSAGES', 'KICK_MEMBERS', 'BAN_MEMBERS'],
      args: [
        {
          key: 'userToKick',
          prompt: 'Who do you want to kick?',
          type: 'string'
        },
        {
          key: 'reason',
          prompt: 'Why do you want to kick this user',
          type: 'string'
        }
      ]
    });
  }

  run(message, { userToKick, reason }) {
       const error = new Discord.MessageEmbed()
    error.setFooter("Made By Canary Studio")
    error.setTitle("Error")
    error.setDescription(":x: Invalid user!");
 
   const user =
      message.mentions.members.first() ||
      message.guild.members.fetch(userToKick);
    if (user == undefined)
      
      return message.channel.send(error);

const role = message.guild.roles.cache.find(role => role.name === 'Muted');

user.roles.add(role);
  let dmsEmbed = new Discord.MessageEmbed()
  .setTitle("Muted Member")
   .setColor("#00ff00")
  .setDescription(`You have been muted on \`${message.guild.name}\``)
  .addField("Muted: ", user)
  .addField("Muted by: ", message.author.tag)
  .addField("Reason: ", reason);

  user.send(dmsEmbed);

  message.delete();
  
  message.channel.send(dmsEmbed)
  }
};