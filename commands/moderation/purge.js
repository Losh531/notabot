const { Command } = require('discord.js-commando');

module.exports = class PruneCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'prune',
      aliases: ['delete-messages', 'clear'],
      description: 'Delete up to 99 recent messages',
      group: 'music',
      memberName: 'prune',
      guildOnly: true,
      throttling: {
        usages: 1,
        duration: 5,
      },
      userPermissions: ['MANAGE_CHANNELS', 'MANAGE_MESSAGES'],
      args: [
        {
          key: 'deleteCount',
          prompt: 'How many messages do you want to delete?',
          type: 'integer',
          validate: deleteCount => deleteCount < 100 && deleteCount > 0
        }
      ]
    });
  }

  run(message, { deleteCount }) {
    message.channel
      .bulkDelete(deleteCount)
      .then(messages => message.say(`Deleted ${messages.size} messages`))
      .catch(e => {
        console.error(e);
        return message.say(
          'Something went wrong when trying to delete messages :('
        );
      });
  }
};