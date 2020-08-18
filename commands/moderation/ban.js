const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class BanCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'ban',
      aliases: ['ban-member', 'ban-hammer', 'hammer'],
      memberName: 'ban',
      group: 'music',
      description: 'Bans a tagged member',
      guildOnly: true,
      userPermissions: ['MANAGE_MESSAGES', 'KICK_MEMBERS', 'BAN_MEMBERS'],
      clientPermissions: ['MANAGE_MESSAGES', 'KICK_MEMBERS', 'BAN_MEMBERS'],
      args: [
        {
          key: 'userToBan',
          prompt:
            'Please mention the user you want to ban with @ or provide his ID',
          type: 'string'
        },
        {
          key: 'reason',
          prompt: 'Why do you want to ban this user',
          type: 'string'
        }
      ]
    });
  }

  run(message, { userToBan, reason }) {
    //here
    const error = new Discord.MessageEmbed()
    .setFooter("Made By Canary Studio")
    .setTitle("Error!")
    .setColor("#BA210D")
    .setTimestamp()
    .setDescription(":x: An error occured while executing the command.");
    const user =
      message.mentions.members.first() ||
      message.guild.members.fetch(userToBan);
    if (user === undefined)
      
    
      return message.channel.send(error);
    user
      .ban(reason)
      .then(() => {
        const banEmbed = new Discord.MessageEmbed()
          .addField('Banned:', userToBan)
          .addField('Reason', reason)
          .setFooter("Made By Canary Studio")
          .setTimestamp()
          .setColor('#23CF17');
        message.channel.send(banEmbed);
      })
      .catch(e => {
        message.say(
          'Something went wrong when trying to ban this user, I probably do not have the permission to ban him'
        );
        return console.error(e);
      });
  }
};