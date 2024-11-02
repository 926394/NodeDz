const http = require('http');

let countList = 0;
let countList1 = 0;

const server = http.createServer((req, res) => {
  console.log('Запрос получен');
  // let countList = 0;
  // let countList1 = 0;


  if (req.url === '/') {
    res.writeHead(200, { // запуск прошел успешно код 200
      'Content-Type': 'text/html; charset=UTF-8', // инерпритация ответа как html и использовать кодировку utf-8
      
    });
    res.write('<h1>Добро пожаловать!</h1>');
    res.write(`<br>Количество просмотров: ${countList} \n`);

    res.end('<br><a href="http://localhost:3000/about">Описание сайта!<a>');
    countList++;
  
  } else if (req.url === '/about') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=UTF-8',
    })

    res.write('<h1>Описание.</h1>');
    res.write(`<br>Количество просмотров: ${countList1}`);
    res.write('<br><a href="http://localhost:3000/about">Описание сайта!<a>');
    res.end('<br><a href="http://localhost:3000"> Переход на домашнюю страницу<a>');
    countList1++;
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html; charset=UTF-8',
    })
    res.write(`<br>Количество просмотров: ${countList2}`);
    res.end('<h1>Страница не найдена!<h1>');
    countList2++;
  }

});

const port = 3000;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});