const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});




var prefix = "11";

client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);


// -say

  if (command === "11say") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }

}); 


client.on('ready', async() => {
var server = "524611317798141976"; 
var channel = "526510126203535371";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('bomber is the one هههههههههههههههههbomber is the one هههههههههههههههههbomber is the one هههههههههههههههههbomber is the one هههههههههههههههههbomber is the one ههههههههههههههههه')
    },305);
})







// THIS  MUST  BE  THIS  WAY
client.login(NTI2NDM3NDY2MTQ0NTA1ODY3.DwGN_g.Q29lOmz7F2G72jINVX31Ewo2hQ4);
