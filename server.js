const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});

app.use('/signup', (req, res) => {
    res.send({
        register: 'done'
    });
});

app.use('/submit', (req, res) => {
    res.send({
        handled: 'true'
    });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/'));
