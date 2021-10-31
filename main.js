require('dotenv').config();

const Discord = require('discord.js');

const client = new Discord.Client({
  allowedMentions: {
    parse: ['users', 'roles'],
    repliedUser: true,

  },
  intents: [
    'GUILDS',
    'GUILD_MESSAGES',
    'GUILD_PRESENCES',
    'GUILD_MEMBERS',
    'GUILD_MESSAGE_REACTIONS'
  ],

});



client.on('ready', () => {
  console.log('TheHunter is Online!!');
});

client.on('message', async message => {
  if (message.content === '!pew') {
    message.channel.send('Hello! Hunter is working and is being worked on for commands ;) ');
  }
});



client.login(process.env.DISCORD_TOKEN);
