const Vendas = require('../models/vendas');
const status = require('http-status');


const mysql = require('mysql');


// -----First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
/*const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
});

con.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

con.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
});
*/



exports.vendasHoje = (req, res, next) => {
    const author = { name: 'Craig Buckler', city: 'Exmouth' };
    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'losespetinhos'
    });
    

    con.query(' select sum(qtd_vendida) from vendas where data_vendida like "2020%05%"', (erro, vendas) =>{
        
        console.log(erro, "erro");

        console.log(vendas, "antes do if");
        // console.log('Data received from Db:');
        // console.log(rows, "aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii  ");
        if (vendas) {
            res.status(status.OK).send(vendas);
            console.log(vendas);
        } else {
            res.status(status.NOT_FOUND).send();
            console.log(vendas, "else");
        }
    });

        
}

exports.searchAll = (req, res, next) => {
    Vendas.findAll()
        .then(vendas => {
            if (vendas) {
                res.status(status.OK).send(vendas)
            }
        })
        .catch(error => next(error));
}
exports.Insert = (req, res, next) => {
    const qtd_vendida = req.body.vendas;
    const id_valores = req.body.id_valores;


    Vendas.create({
        qtd_vendida: qtd_vendida,
        id_valores: id_valores
    })
        .then(vendas => {
            if (vendas) {
                res.status(status.OK).send(vendas);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));



}




exports.searchOne = (req, res, next) => {
    const id_vendas = req.params.id;

    Vendas.findByPk(id_vendas)
        .then(vendas => {
            if (vendas) {
                res.status(status.OK).send(vendas)
            }
        })
        .catch(error => next(error));

}


exports.atualizar = (req, res, next) => {
    const id = req.params.id;
    const titulo = req.body.titulo;
    const fase = req.body.fase;


    Dados_mdk.findByPk(id)
        .then(dados_mdk => {
            if (dados_mdk) {
                dados_mdk.update({
                    titulo: titulo,
                    fase: fase
                },
                    {
                        where: { id: id }
                    })
                    .then(() => {
                        res.status(status.OK).send();

                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();

            }
        })
        .catch(error => next(error));

}


exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Dados_mdk.findByPk(id)
        .then(dados_mdk => {
            if (dados_mdk) {
                dados_mdk.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();

                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
}