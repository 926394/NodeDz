const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();



const countLis = {
    count1: 0,
    count2: 0,
  }

  fs.writeFileSync(path.join(__dirname, 'countLis.json'), JSON.stringify(countLis, null, 2));

app.get('/', (req, res) => {
    
    const pathToFileHome = path.join(__dirname, 'countLis.json');
    const countLis = JSON.parse(fs.readFileSync(pathToFileHome, 'utf-8'));

    countLis.count1 = countLis.count1 + 1;

    fs.writeFileSync(pathToFileHome, JSON.stringify(countLis, null, 2));

    res.send(`<h1>Корневая страница</h1><p>Просмотров: ${countLis.count1}</p><a href="/about">Ссылка на страницу /about</a>`);
});

app.get('/about', (req, res) => {

    const pathToFileAbout = path.join(__dirname, 'countLis.json');
    const countLis = JSON.parse(fs.readFileSync(pathToFileAbout, 'utf-8'));

    countLis.count2 = countLis.count2 + 1;

    fs.writeFileSync(pathToFileAbout, JSON.stringify(countLis, null, 2));

    res.send(`<h1>Страница about</h1><p>Просмотров: ${countLis.count2}</p><a href="/">Ссылка на страницу /</a>`);
});

const port = 3001;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});