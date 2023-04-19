const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "connect_db",
});

app.get('/', (req, res) => {
    let SQL = "INSERT INTO client_tb (NAME, EMAIL, TELL, PASSWORD) VALUES ('Daniel', 'dfscs.costa@gmail.com', '999999', '12345678') "

    db.query(SQL, (err, result)=> {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        console.log(result);
        return res.status(200).send("Data added successfully");
    })
});

app.listen(3001, () => {
    console.log("rodando servidor");
});
