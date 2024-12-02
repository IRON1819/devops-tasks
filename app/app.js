
const express = require('express');
const os = require('os');
const port = 8000;
const app = express();

app.get('/hostname', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send(os.hostname());
});

app.get('/author', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send(process.env.AUTHOR);
});

app.get('/id', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send(process.env.UUID);
});


const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});
