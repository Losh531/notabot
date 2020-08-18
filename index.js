//UPTIME CALLBACK
// gtg
const http = require("http");
const express = require("express");
const app = express();
var server = http.createServer(app);

app.get("/", (request, response) => {
  console.log(`Thanks for pinging me lol!`);
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Canary Mod");
});

const listener = server.listen(process.env.PORT, function() {
  console.log(`Your app is listening on port ` + listener.address().port);
});
setInterval(() => {
  http.get(`http://sleet-good-potassium.glitch.me/`); //Do for good hosting
}, 280000);

const { command } = require("discord.js");
const { CommandoClient } = require("discord.js-commando");
const { Structures } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const path = require("path");
const { prefix } = require("./config.json");


Structures.extend("Guild", Guild => {
  class MusicGuild extends Guild {
    constructor(client, data) {
      super(client, data);
      this.musicData = {
        queue: [],
        isPlaying: false,
        nowPlaying: null,
        songDispatcher: null,
        volume: 1
      };
      this.triviaData = {
        isTriviaRunning: false,
        wasTriviaEndCalled: false,
        triviaQueue: [],
        triviaScore: new Map()
      };
    }
  }
  return MusicGuild;
});

const client = new CommandoClient({
  commandPrefix: prefix,
  owner: ["708042832237297665", "689602903660298257"] // change this to your Discord user ID
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ["music", "Music Command Group"],
  ["utility", "Utility Command Group"]
    //oh wait Losh here is the error what is it though NOOOOO YOU BROKE THE BOTTTTT
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
    eval: true,//test last time
    prefix: true, //so can you help? Lets try. .. one sec let me get home np
    commandState: false,
  help: true
   
    
  })


const Discord = require('discord.js');
const client2 = new Discord.Client();
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
    warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
    kickThreshold: 7, // Amount of messages sent in a row that will cause a kick.
    banThreshold: 7, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, You have been warned for spamming, Please stop.', // Message that will be sent in chat upon warning a user.
    kickMessage: '**{user_tag}** has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
    banMessage: '**{user_tag}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
    exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
    ignoreBots: false, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: [], // Array of User IDs that get ignored.
    // And many more options... See the documentation.
});
 
client2.on('ready', () => console.log(`Logged in as ${client.user.tag}.`));
 
client2.on('message', (message) => antiSpam.message(message)); 
 
client.login('NzMzODM1NjQxNjg2ODUxNjU1.XxI8JQ.Tez5kXABW4UvSLrMyElCwp9qlqQ');
const activities_list = [
  "commands!",
  "help",
  "invite",
  
  
   // losh did you make the project public?
  `Currently in ${client.guilds.cache.size} Servers!`//WOW! COOL IDEA there
]; // creates an arraylist containing phrases you want your bot to switch through.
const type = ["LISTENING", "WATCHING", "PLAYING", "STREAMING"]; // creates an arraylist containing phrases you want your bot to switch through.
client.on("ready", () => {
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
    const type2 = Math.floor(Math.random() * (type.length - 1) + 1);
    
    client.user.setActivity(activities_list[index], { type: "LISTENING" }); // sets bot's activities to one of the phrases in the arraylist.
  }, 10000); // Runs this every 10 seconds.
  //
  //Sorry Everyone! I hit my limit of 10,000 songs a day! I will be back tommorow
});

client.login(process.env.TOKEN);
//I got it now :) hmm nvm