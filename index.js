const express = require('express');
const app = express();
const portNumber = 9099;

app.listen(portNumber, () => {
    console.log(`Visit http://localhost:${portNumber}/ to view the app.`);
});

app.get('/', (req, res) => {
    console.log('Hello');
    res.send('Hello world!');
});

