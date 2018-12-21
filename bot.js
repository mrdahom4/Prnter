const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', async message => {
     let user = message.mentions.users.first() || message.author;
if(message.author.bot) return;
if (message.channel.guild) {
if (message.content === '-help') {
message.author.send(`**البوت تحت التجربه**`).catch(RebeL =>{console.log('`Error`: ' + RebeL);
message.channel.send(`${user} خاصك مقفول`);
});
}}});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Bot- Script By : DaHoM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DaHoM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`#help | Lorans`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});




 

 
const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "partner");
    logChannel.send(`${member} Invited by: <@${inviter.id}>`);
  });
});

client.login(process.env.BOT_TOKEN);
