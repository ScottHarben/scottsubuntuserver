const express = require("express");
const app = express();
const cors = require("cors");
const port = 9000;
const mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "",
//   port: "",
//   user: "",
//   password: "",
//   database: "",
// });

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
