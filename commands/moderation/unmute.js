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
      name: 'unmute',
      aliases: ['unm'],
      memberName: 'unmute',
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
          prompt: 'Why do you want to unmute this user',
          type: 'string'
        }
      ]
    });
  }

  async run(message, { userToKick, reason }) {
       const error = new Discord.MessageEmbed()
    error.setFooter("Made By Canary Bots")
    error.setTitle("Error")
    error.setDescription(":x: Invalid user!");
 
   const user =
      message.mentions.members.first() ||
      message.guild.members.fetch(userToKick);
    if (user == undefined)
      
      return message.channel.send(error);

const role = message.guild.roles.cache.find(role => role.name === 'Muted');

 user.roles.remove(role.id);
  let dmsEmbed = new Discord.MessageEmbed()
  .setTitle("Unmute")
  
  .setColor("#00ff00")
  .setDescription(`You have been unmuted on \`${message.guild.name}\``)
  .addField("Unmuted: ", user)
  .addField("Muted by", message.author.tag)
  .addField("Reason", reason);

  user.send(dmsEmbed);

  message.delete();
  
  message.channel.send(dmsEmbed)
  }
};