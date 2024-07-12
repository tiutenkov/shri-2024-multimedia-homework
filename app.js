const express = require('express');
const app = express();

app.get('/', function (_, res) {
    res.sendFile('index.html', {root: __dirname});
});

app.use('/index.css', function (_, res) {
    res.sendFile('index.css', {root: __dirname});
});

app.use('/vids', express.static('vids'));

app.listen(3000, () => {
    console.log('Приложение запущено: http://localhost:3000');
});
