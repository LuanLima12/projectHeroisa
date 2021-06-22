const mysql = require('mysql');

const con = mysql.createConnection({
    host:'127.0.0.1',
    user: 'root',
    password:'',
    database:'heroise',
});

    con.connect((err) => {
        if (err) {
            console.log('Erro ao tentar conectar ao banco: ', err)
            return
        }
        console.log('Conectado ao banco!')
    })

    // con.end((err) => {
    //     if(err) {
    //         console.log('Erro ao finalizar conexão com banco: ', err)
    //         return 
    //     }
    //     console.log('Conexão finalizada!')
    // })



