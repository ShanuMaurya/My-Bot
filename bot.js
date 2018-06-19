const Discord = require("discord.js");

const token = "NDU1MjQzMzI4NzM3Mzc4MzE0.DgeTKw.dTwzb9rTcJZCIUKsUrUpyvf3JjI";
const prefix = "!";

var fortunes = [
             "idk",
             "maybe",
             "wtf",
             "what are u asking?"
             ];
             
var bot = new Discord.Client();

bot.on("Ready", function() {
	        console.log("Ready");
	});

bot.on("message", function(message) {
	if (message.author.equals(bot.user)) return; 
	
	if (!message.content.startsWith(prefix)) return; 
	
	var args = message.content.substring(prefix.length).split("  ");
   
   switch (args[0].toLowerCase()) {
   	case "ping":
                  message.channel.sendMessage("pong!");
                  break; 
       case "info":
                  message. channel.sendMessage("I'm a special bot made by WolfBoy(melo)");
                  break;
       case "8ball":
                  if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random()  *  fortunes.length)]);
                  else message.channel.sendMessage("I can't read that question sorry");
                  break; 
               
       default:
                 message.channel.sendMessage("Please read the commands and info to use me");
                 
                 }
                 
            });
            
            
         bot.login(token);
           
