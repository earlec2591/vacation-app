const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "rootpassword",
  database: "vacationdb"
});

db.connect();

app.get("/api/plans", (req, res) => {
  db.query("SELECT * FROM plans", (err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
