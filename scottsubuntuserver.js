const express = require("express");
const app = express();
const cors = require("cors");
const port = 9000;
const mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: 'localhost',
//     port: '3306',
//     user: 'superuser',
//     password: 'ff44Fourpm',
//     database: 'Golf'
// });

var connection = mysql.createConnection({
  host: "10.0.0.35",
  port: "3306",
  user: "remoteuser",
  password: "ff44Fourpm",
  database: "Golf",
});

connection.connect();

async function getPlayerRankings(req, res) {
  await connection.query(
    "call spGUIPlayerRankGet()",
    (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      } else {
        res.send(results[0]);
      }
    }
  );
}

async function getPlayerRankingDetails(req, res) {
  await connection.query(
    "call spGUIPlayerRankDetailGet()",
    (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      } else {
        res.send(results[0]);
      }
    }
  );
}

app.use(cors());

app.get("/GetPlayerRankings", (req, res) => {
  getPlayerRankings(req, res);
});

app.get("/GetPlayerRankingDetails", (req, res) => {
  getPlayerRankingDetails(req, res);
});

app.listen(port, () => {
  console.log("server listening at port:" + port);
});
