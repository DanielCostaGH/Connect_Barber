const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const secretKey = 'chave-secreta';


const db = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12345678",
  database: "connect_db",
});

app.use(express.json());
app.use(cors());


// Geração de token após a autenticação.
function generateToken(user) {
  const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
  return token;
}

function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("Token não fornecido.");
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).send("Token inválido.");
    }

    req.user = decoded;
    next();
  });
}


// Configuração dessa merda de cabeçalho Access-Control sei la oq pra permitir a origem específica da rota.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  next();
});

function rotasProtegidas() {
  const router = express.Router();

  // Rota 1 protegida
  router.post("/Schedules", verifyToken, (req, res) => {

  });

  // Rota 2 protegida
  router.post("/Account", verifyToken, (req, res) => {
    // Apenas usuários autenticados com token válido podem acessar esta rota.
  });

  return router;
}

// Uso das rotas protegidas
app.use("/api", rotasProtegidas());



app.post("/CriarConta", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const tell = req.body.tell;
  const password = req.body.password;

  db.query(
    "SELECT * FROM client_tb WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length == 0) {
        bcrypt.hash(password, saltRounds, (erro, hash) => {
          db.query(
            "INSERT INTO client_tb (NAME, EMAIL, TELL, PASSWORD) VALUES (?, ?, ?, ?)",
            [name, email, tell, hash], 
            (err, response) => {
              if (err) {
                res.send(err);
              }

              res.send({ msg: "Cadastrado com sucesso " });
            }
          );
        });
      } else {
        res.send({ msg: "Usuario ja cadastrado" });
      }
    }
  );
});

app.post("/LoginPage", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM client_tb WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        req.send(err);
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (erro, response) => {
          if (response) {
            const user = { id: result[0].id, email: result[0].email };
            const token = generateToken(user);
            res.send({ token: token });
          } else {
            res.send("Senha incorreta!");
          }
        });
      } else {
        res.send({ msg: "Conta não encontrada." });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("rodando servidor");
});
