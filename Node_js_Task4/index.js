const express = require("express");
const fs = require('fs');
const path = require('path');
const joi = require("joi");


/**
 * Описание объекта пользователя, для проверки валидности
*/
const userSchema = joi.object({
  firstName: joi.string().min(2).required(),
  secondName: joi.string().min(2).required(),
  age: joi.number().min(0).max(150).required(),
  city: joi.string().min(1) 
});

const app = express();

// const users = [];
let uniqueID = 0;

const usersListPath = path.join(__dirname, 'users.json');
//определение базы данных для хранения статей

app.use(express.json());

/**
 * Получение списка пользователей
 */
// app.get("/users", (req, res) => {
//   res.send({ users });
// });
app.get('/users', (req, res) => {
  const usersJson = fs.readFileSync(usersListPath, 'utf-8');
  const usersData = JSON.parse(usersJson);
  res.send({ users: usersData });
});


/**
 * Получение отдельного пользователя по id
 */
// app.get('/users/:id', (req, res) => {
//     const user = users.find((user) => user.id === Number(req.params.id));
//     // проверка наличия пользователя
//     if (user) {
//       res.send({user});
//     } else {
//       res.status(404);
//       res.send({user: null})
//     }
//   });
app.get('/users/:id', (req, res) => {
  const usersJson = fs.readFileSync(usersListPath, 'utf-8');
  const usersData = JSON.parse(usersJson);
  const user = usersData.find((user) => user.id === Number(req.params.id));

  if (user) {
      res.send({ user });
  } else {
      res.status(404);
      res.send({ user: null, message: 'Пользователь не найден' });
  }
});

/**
 * Создание пользователя
 */
// app.post("/users", (req, res) => {
//   uniqueID += 1;
//   users.push({
//     id: uniqueID,
//     ...req.body, // сюда запишется объект, который пропишем в POSTMAN
//   });

//   res.send({
//     id: uniqueID,
//   });
// });
app.post('/users', (req, res) => {
  const validateData = userSchema.validate(req.body);
  if (validateData.error) {
      return res.status(400).send({error: validateData.error.details})
  };
  const usersJson = fs.readFileSync(usersListPath, 'utf-8');
  const usersData = JSON.parse(usersJson);

  uniqueID += 1;

  usersData.push({
      id: uniqueID,
      ...req.body 
  });
  fs.writeFileSync(usersListPath, JSON.stringify(usersData));
  
  res.send({
      id: uniqueID,
  });
});

/**
 * Метод внесения изменении в данные о пользователе, по id
 */
// app.put('/users/:id', (req, res) => {
//     const result = userSchema.validate(req.body);
//     if (result.error){
//       return res.status(404).send({ error: result.error.details });
//     }

//     const user = users.find((user) => user.id === Number(req.params.id));
  
//     // проверка наличия данных
//     if (user) {
//       const { firstName, secondName, age, city } = req.body;
//       user.firstName = firstName;
//       user.secondName = secondName;
//       user.age = age;
//       user.city = city;
  
//       res.send({user});
//     } else {
//       res.status(404);
//       res.send({user: null})
//     }
// });
app.put('/users/:id', (req, res) => {
  const validateData = userSchema.validate(req.body);
if (validateData.error) {
  return res.status(400).send({error: validateData.error.details})
};
  const usersJson = fs.readFileSync(usersListPath, 'utf-8');
  const usersData = JSON.parse(usersJson);

  const user = usersData.find((user) => user.id === Number(req.params.id));

  if (user) {
      user.firstName = req.body.firstName;
      user.secondName = req.body.secondName;
      user.age = req.body.age;
      user.city = req.body.city;

      fs.writeFileSync(usersListPath, JSON.stringify(usersData));
      
      res.send({ user });
  } else {
      res.status(404);
      res.send({ user: null, message: 'Пользователь не найден' });
  }
});

/**
 * Метод удаления пользователя
 */
// app.delete('/users/:id', (req, res) => {
//     const user = users.find((user) => user.id === Number(req.params.id));
  
//     // проверка наличия и удаление пользователя по id
//     if (user) {
//       const userIndex = users.indexOf(user);
//       users.splice(userIndex, 1);
//       res.send({user});
//     } else {
//       res.status(404);
//       res.send({user: null})
//     }
//   });
app.delete('/users/:id', (req, res) => {
  const usersJson = fs.readFileSync(usersListPath, 'utf-8');
  const usersData = JSON.parse(usersJson);

  const usersIndex = usersData.findIndex((user) => user.id === Number(req.params.id));

  if (usersIndex > -1) {
      usersData.splice(usersIndex, 1); 

      fs.writeFileSync(usersListPath, JSON.stringify(usersData));
      res.send({ message: 'Пользователь успешно удален!' });
  } else {
      res.status(404);
      res.send({ message: 'Пользователь не найден!' });
  }
});

// app.listen(3000);
app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
