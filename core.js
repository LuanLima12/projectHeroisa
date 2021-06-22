const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "Heroisa,"
//INFO recebendo a função dentro do commandsReader
const commands = require("./scripts/commandsReader")(prefix); 

const db = require('./db2');

client.on("ready",()=>{
    console.log(`Logado com o bot ${client.user.tag}`);
});

client.on("message",(msg)=>{
    if(!msg.author.bot){
        console.log(`${msg.author.username}: ${msg.content}`);
        if(msg.content == "Oi") msg.reply("Ola");

        //INFO Args será uma lista com o conteudo de msg separado por espaço (" ")
        const args = msg.content.split(" "); 
        
        //if (commands[args[0].replace(prefix,"")]); //vai olhar se no commands existe o inicio da msg [0], e apaga o prefixo
        //INFO verifica se existe o comando e chama a função, mesmo jeito da const commands
        if(commands[args[0]])  commands[args[0]](client,msg);

    }
});

client.login("ODU1NjA0OTUyNjYzODUxMDM4.YM06NQ.LLu8poQ6TMCjtbL-KmVWTKmVOpk");