const connection = require('../config/db');

module.exports.getTypeAbonne = function (req, res) {
    connection.query('SELECT * FROM type_abonne', (error, results) =>{
        if(error){
            res.json({
                status: false,
                message: "there are some error with query"
            })
        }
        else
        {
            res.send(results);
        }
    });
}

module.exports.getAbonne = function (req, res) {
    connection.query('SELECT * FROM abonne', (error, results) =>{
        if(error){
            res.json({
                status: false,
                message: "there are some error with query"
            })
        }
        else
        {
            res.send(results);
        }
    });
}

module.exports.getIDabonne = function (req, res) {
    const id = req.params.id;
    connection.query('SELECT * FROM type_abonne', [id], (error, results) =>{
        if(error){
            res.json({
                status: false,
                message: "there are some error with query"
            })
        }
        else
        {
            res.send(results);
        }
    });
}


