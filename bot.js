const Discord = require("discord.js");

const token = "NDU1MjQzMzI4NzM3Mzc4MzE0.DgeTKw.dTwzb9rTcJZCIUKsUrUpyvf3JjI";
const prefix = "!";
const fs = require("fs");
             
var bot = new Discord.Client();

fs readdir("./commands", (err, files) => {
	
	if(err) console.log(err); 
	
	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if(jsfile.length <= 0){
    console.log("couldn't find the commands.");
    return; 
 }
 
 
          jsfile.forEach((f, i) =>{
          let props = require(`./commands/${f}`);
          console.log(`${f} loaded!`);
          bot.commands.set(props.help.name, props); 
 
          });
          
 });
 
bot.commands new Discord.Collection();

bot.on("Ready", async  ()  =>  {
	        console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!` );
	bot.user.setActivity("Modification of petrol", {type: "WATCHING"});
	
	});

bot.on("message", function(message) {
	if (message.author.equals(bot.user)) return; 
	
	if (!message.content.startsWith(prefix)) return; 
	
	var args = message.content.substring(prefix.length).split("  ");
   
     let commandfile = bot.command.get(cmd.slice(prefix.length);
      
     if (commandfile) commandfile.run(bot, message, args);
          
  });
            
            
         bot.login(token);
           