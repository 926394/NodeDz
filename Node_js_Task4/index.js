const express = require("express");
const joi = require("joi");

const app = express();

const users = [];
let uniqueID = 0;

/**
 * Описание объекта пользователя, для проверки валидности
 */
const userSchema = joi.object({
    firstName: joi.string().min(2).required(),
    secondName: joi.string().min(2).required(),
    age: joi.number().min(0).max(150).required(),
    city: joi.string().min(1) 
});

app.use(express.json());

/**
 * Получение списка пользователей
 */
app.get("/users", (req, res) => {
  res.send({ users });
});

/**
 * Получение отдельного пользователя по id
 */
app.get('/users/:id', (req, res) => {
    const user = users.find((user) => user.id === Number(req.params.id));
    // проверка наличия пользователя
    if (user) {
      res.send({user});
    } else {
      res.status(404);
      res.send({user: null})
    }
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
    const result = userSchema.validate(req.body);
    if (result.error){
      return res.status(404).send({ error: result.error.details });
    }

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

/**
 * Метод удаления пользователя
 */
app.delete('/users/:id', (req, res) => {
    const user = users.find((user) => user.id === Number(req.params.id));
  
    // проверка наличия и удаление пользователя по id
    if (user) {
      const userIndex = users.indexOf(user);
      users.splice(userIndex, 1);
      res.send({user});
    } else {
      res.status(404);
      res.send({user: null})
    }
  });

app.listen(3000);
