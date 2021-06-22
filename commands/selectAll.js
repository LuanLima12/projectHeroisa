
module.exports = (client,msg) =>{
        const mysql = require('mysql');

        const con = mysql.createConnection({
            host:'127.0.0.1',
            user: 'root',
            password:'',
            database:'heroise',
        });

        con.query('SELECT * FROM jogadores', (err, rows) => {
            if (err) throw err
        
            msg.reply('Authors: ', rows, '\n\n');
            console.log(rows);
        })
}