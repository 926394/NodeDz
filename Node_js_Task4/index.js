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

/**
 * Метод внесения изменении в данные о пользователе, по id
 */
app.put('/users/:id', (req, res) => {
    const user = users.find((user) => user.id === Number(req.params.id));
  
    // проверка наличия данных
    if (user) {
      const { firstName, secondName, age, city } = req.body;
      user.firstName = firstName;
      user.secondName = secondName;
      user.age = age;
      user.city = city;
  
      res.send({user});
    } else {
      res.status(404);
      res.send({user: null})
    }
});



app.listen(3000);
