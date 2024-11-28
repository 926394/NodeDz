const express = require('express');

const app = express();

const users = [];

let uniqueID = 0;

/**
 * Получение списка пользователей 
 */
app.get('/users', (reg, res) => {
  res.send({users});
});

app.listen(3000);
