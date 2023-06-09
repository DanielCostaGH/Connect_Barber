const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const secretKey = '123456';
const dayjs = require("dayjs");
const customParseFormat = require('dayjs/plugin/customParseFormat');

const db = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12345678",
  database: "connect_db",
});

app.use(express.json());
app.use(cors());

// Configuração dessa merda de cabeçalho Access-Control sei la oq pra permitir a origem específica da rota.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  next();
});

// Função para formatar a data no formato esperado pelo MySQL
const formatDate = (date) => {
  return dayjs(date, "DD/MM/YYYY").format("YYYY-MM-DD");
};

// Função para formatar a hora no formato esperado pelo MySQL
const formatTime = (time) => {
  return dayjs(time, "HH:mm").format("HH:mm");
};

// Geração de token após a autenticação.
function generateToken(user) {
  const token = jwt.sign(user, secretKey, { expiresIn: '2h' });
  return token;
}

function verifyToken(req, res, next, secretKey) {
  const token = req.headers.authorization;

  console.log("Received token:", token);

  if (!token) {
    return res.status(401).send("Token não fornecido.");
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.log("Token verification error:", err);
      return res.status(401).send("Token inválido.");
    }

    req.user = decoded;
    next();
  });
}


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
        res.send({ msg: "Usuário já cadastrado" });
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
            const user = { id: result[0].ID_USER, email: result[0].EMAIL };
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

app.post("/ModalAlter/:id", verifyToken, (req, res) => {
  const { name, tell, password } = req.body;
  const userId = req.params.id;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.error("Erro ao criptografar a senha:", err);
      res.status(500).send("Erro ao atualizar a senha.");
    } else {
      db.query(
        "UPDATE client_tb SET NAME = ?, TELL = ?, PASSWORD = ? WHERE ID_USER = ?",
        [name, tell, hash, userId],
        (err, result) => {
          if (err) {
            console.error("Erro ao atualizar os dados no banco de dados:", err);
            res.status(500).send("Erro ao atualizar os dados no banco de dados.");
          } else {
            console.log("Dados atualizados com sucesso.");
            res.send("Dados atualizados com sucesso.");
          }
        }
      );
    }
  });
});

app.delete("/ModalDelete/:id", verifyToken, (req, res) => {
  const userId = req.params.id;

  console.log("Deleting user with ID:", userId);

  db.query("DELETE FROM client_tb WHERE ID_USER = ?", [userId], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ msg: "Usuário excluído com sucesso" });
    }
  });
});

app.post("/Schedules/:id", verifyToken, (req, res) => {
  const { selectedService, selectedDay, selectedTime } = req.body;
  const userId = req.params.id;

  // Converter a data para o formato esperado pelo MySQL
  const formattedDay = formatDate(selectedDay);

  // Extrair a hora e os minutos da hora selecionada
  const [hour, minute] = selectedTime.split(":");

  // Criar a data no formato esperado pelo MySQL
  const formattedTime = new Date();
  formattedTime.setHours(hour, minute, 0); // Definir a hora e os minutos

  db.query(
    "INSERT INTO schedule_tb (FK_ID_USER, SERVICE_NAME, DATE, TIME) VALUES (?, ?, ?, ?)",
    [userId, selectedService, formattedDay, formattedTime],
    (err) => {
      if (err) {
        console.error("Erro ao agendar o serviço:", err);
        res.status(500).send("Erro ao agendar o serviço.");
      } else {
        console.log("Agendamento realizado com sucesso.");
        res.status(200).send("Agendamento realizado com sucesso.");
      }
    }
  );
});


app.get("/Agendamentos/:id", verifyToken, (req, res) => {
  
  const userId = req.params.id;

  db.query(
    "SELECT * FROM schedule_tb WHERE FK_ID_USER = ?",
    [userId],
    (err, result) => {
      if (err) {
        console.error("Erro ao buscar agendamentos:", err);
        res.status(500).send("Erro ao buscar agendamentos.");
      } else {
        console.log("Agendamentos encontrados:", result);
        res.status(200).json(result);
      }
    }
  );
});

app.get("/services", (req, res) => {
  db.query("SELECT id_service, SERVICE_NAME, SERVICE_VALUE FROM services_tb", (err, result) => {
    if (err) {
      console.error("Erro ao buscar serviços:", err);
      res.status(500).send("Erro ao buscar serviços.");
    } else {
      console.log("Serviços encontrados:", result);
      res.status(200).json(result);
    }
  });
});




app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
