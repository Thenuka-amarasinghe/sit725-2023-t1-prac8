const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 3000; 

app.get('/welcome', (req, res) => {
    res.send('Welcome to Node.js Two number Calculations. /add?n1=xx&n2=xx format to add two numbers.');
});

app.get('/add', (req, res) => {
    const number1 = parseInt(req.query.n1);
    const number2 = parseInt(req.query.n2);
    const result = number1 + number2;
    res.send(`The sum of ${number1} and ${number2} is: ${result}`);
});

app.listen(port, () => {
    console.log(`Click http://localhost:${port}/welcome`);
});