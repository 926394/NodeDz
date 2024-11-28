const express = require("express");

const app = express();

let uniqueID = 0;
const users = [];

app.use(express.json());

/**
 * Получение списка пользователей
 */
app.get("/users", (reg, res) => {
  res.send({ users });
});

/**
 * Создание пользователя
 */
app.post("/users", (req, res) => {
  uniqueID += 1;
  users.push({
    id: uniqueID,
    ...req.body, // сюда запишется объект, который пропишем в POSTMAN
  });

  res.send({
    id: uniqueID,
  });
});

app.listen(3000);
