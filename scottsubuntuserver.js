const express = require('express');
const app = express();
const cors = require('cors');
const port = 9000;
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'superuser',
    password: 'ff44Fourpm',
    database: 'Golf'
});

// var connection = mysql.createConnection({
//     host: '10.0.0.35',
//     port: '3306',
//     user: 'remoteuser',
//     password: 'ff44Fourpm',
//     database: 'Golf'
// });

app.use(cors());

app.get('/api', (req, res) => {
    connection.connect();
    connection.query('CALL spGetTopRankedPlayer()', (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        } else {
            res.send(results[0])
        }
    });
});

app.listen(port, () => {
    console.log('server listening at port:' + port);
});