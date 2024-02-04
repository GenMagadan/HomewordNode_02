const colorChangeHere = require('gennady_random_color');
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Запрос получен');
  const rgb = colorChangeHere.randomRgbColorResult();
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=UTF-8',
    });
    res.end(`
   <div class="container" style="width: 100%; height: 100vh; 
   display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <div id="color" style="width: 13em; height: 8em;
        background: ${rgb}"></div>
        <h4 id="text" style="font-family: sans-serif; text-align: center;
        color: ${rgb};
      }">${rgb}</h4>
   </div>
     `);
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html; charset=UTF-8',
    });
    res.end(`
     <h1>Страница не найдена</h1>
     `);
  }
});
const port = 3000;
server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
