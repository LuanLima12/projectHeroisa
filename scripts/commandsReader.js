const fs = require("fs");
const dir = "./commands/"

module.exports = (prefix) =>{
    var commands = {};

    const scripts = fs.readdirSync(dir);
    scripts.forEach(script=>{
        //INFO o split vai separar os elementos com base no ponto e escolher apenas o 0, ou seja, o primeiro elemento
        commands[prefix+script.split(".")[0]] = require("../"+dir+script); 
    });

    return commands;
}