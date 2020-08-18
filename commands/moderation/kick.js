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
      name: 'kick',
      aliases: ['kick-member', 'throw'],
      memberName: 'kick',
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
    function sendEmbed(){
      message.channel.send(kickEmbed);
    }
       const error = new Discord.MessageEmbed()
    error.setFooter("Made By Canary Bots")
    error.setTitle("Error")
    error.setDescription(":x: Invalid user!");
        const kickEmbed = new Discord.MessageEmbed()
         kickEmbed.setFooter('Kicked by:', message.author.tag)
          kickEmbed.addField('Kicked:', userToKick)
          kickEmbed.addField('Reason:', reason)
          kickEmbed.setColor('#420626');
    const user =
      message.mentions.members.first() ||
      message.guild.members.fetch(userToKick);
    if (user == undefined)
      
      return message.channel.send(error);
    user
      .kick(reason)
   
      .then(() => {
       message.say(`Kicked ${userToKick} reason: ${reason}`)
    
        //message.channel.send(kickEmbed);
      })
      .catch(e => {
        message.say(
          'Something went wrong when trying to kick this user, I probably do not have the permission to kick him'
        );
        return console.error(e);
      });
  }
};