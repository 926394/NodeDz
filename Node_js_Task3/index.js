const express = require('express');
// Счетчик
let countList = 0;
let countList1 = 0;

const app = express();

app.use(express.static('static'));

app.listen(3000);