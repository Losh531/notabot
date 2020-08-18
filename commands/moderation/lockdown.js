const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const ms = require("ms");
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login('NzMzODM1NjQxNjg2ODUxNjU1.XxI8JQ.Tez5kXABW4UvSLrMyElCwp9qlqQ');
module.exports = class KickCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'lockdown',
      aliases: ['lock', 'lock-channel'],
      memberName: 'lockdown',
      group: 'music',
      description: 'Kicks a tagged member',
      guildOnly: true,
      userPermissions: ['MANAGE_MESSAGES', 'KICK_MEMBERS', 'BAN_MEMBERS'],
      clientPermissions: ['MANAGE_MESSAGES', 'KICK_MEMBERS', 'BAN_MEMBERS'],
      args: [
        {
          key: 'time',
          prompt: 'How long?',
          type: 'string'
        },
        {
          key: 'reason',
          prompt: 'Why do you want to start this lockdown?',
          type: 'string'
        }
      ]
    });
  }

  run(message, { userToKick, reason, time }) {
 if (!client.lockit) { client.lockit = []; }
  let validUnlocks = ["release", "unlock", "u"];
  if (!time) { return message.reply("Please enter a valid period in s; m; h; d"); }

  const Lockembed = new Discord.MessageEmbed()
    .setColor("#23CF17")
    .setTimestamp()
    .setTitle("🔒 MOD LOCK [LOCKDOWN] 🔒")
    .setDescription(`This Channel has been lock by ${message.author.tag} for ${time}`);
    if (reason != null) { Lockembed.addField("Reason : ", reason); }

  const Unlockembed = new Discord.MessageEmbed()
    .setColor(0xDD2E44)
    .setTimestamp()
    .setTitle("🔓 MOD LOCK [UNLOCK] 🔓")
    .setDescription("This channel is now unlocked");

  if (message.channel.permissionsFor(message.author.id).has("MUTE_MEMBERS") === false) { 
    const embed = new new Discord.MessageEmbed()
      .setColor(0xDD2E44)
      .setTimestamp()
      .setTitle("❌ ERROR ❌")
      .setDescription("You can't do that");
    return message.channel.send({embed});  
  }  

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, { SEND_MESSAGES: null }).then(() => {
      message.channel.send({embed: Unlockembed});
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => { console.log(error); });
  } else {
    message.channel.overwritePermissions([
  {
     deny: ['SEND_MESSAGES'],
     id: message.guild.id,
  },], 'lockdown').then(() => {
      message.channel.send({embed: Lockembed}).then(() => {
        client.lockit[message.channel.id] = setTimeout(() => {
    message.channel.overwritePermissions([
  {
     accept: ['SEND_MESSAGES'],
     id: message.guild.id,
  },], 'lockdown').then(message.channel.send({embed: Unlockembed})).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));
      }).catch(error => { console.log(error); });
    });
  }
};


  }
;