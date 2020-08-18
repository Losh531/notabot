const discord = require("discord.js")
const client = new discord.Client()

client.on("message", message => {
  if (message.content === "mod!credits") {
    const embed = new discord.MessageEmbed()
    
    .setFooter("Made By Canary Studio")
    .setDescription("This bot has been made by Canary Studio. If you have any errors please contact Canary Studios.")
    .setFields(
      { name: "Creator:", value: "telantix#9042\nLosh531™#4996", inline: true },
      { name: "Version:", value: "0.3", inline: true }
    )
    .setTitle("Mod - Your Moderation Discord Bot");
    
    
    message.channel.send(embed)
  }
})