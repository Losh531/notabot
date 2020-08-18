const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class BanCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'unban',
      aliases: ['unban-member'],
      memberName: 'unban',
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
            const banEmbed = new Discord.MessageEmbed()
          .addField('UnBanned:', userToBan)
          .addField('Reason', reason)
          .setFooter("Made By Canary Studio")
          .setTimestamp()
          .setColor('#23CF17');
    const error = new Discord.MessageEmbed()
    .setFooter("Made By Canary Studio")
    .setTitle("Error!")
    .setColor("#BA210D")
    .setTimestamp()
    .setDescription(":x: An error occured while executing the command.");
    const user =
      message.mentions.members.first() ||
      message.guild.members.fetch(userToBan);

    if (user === undefined) {
      
    
      return message.channel.send(error);
    }
      message.guild.fetchBans()
.then(bans => {
if (bans.some(u => user.includes(u.username))) {


        message.channel.send(banEmbed);
message.guild.unban(user.id, reason);
}
else if (bans.some(u => user.includes(u.id))) {
message.channel.send(banEmbed);
message.guild.unban(user, reason);
}
else {
return message.reply(`This person is not banned`);
}
});


     


  }
};