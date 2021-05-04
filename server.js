const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
    // res.send({
    //     token: 'test123'
    // });
    res.send({
        failed: 'failed'
    });
});

app.use('/signup', (req, res) => {
    res.send({
        token: 'test123'
    });
    // res.send({
    //     failed: 'failed'
    // });
});

app.use('/submit-otp', (req, res) => {
    res.send({
        token: 'test123'
    });
    // res.send({
    //     failed: 'failed'
    // });
});

app.use('/submit-email', (req, res) => {
    // res.send({
    //     email: 'email'
    // });
    res.send({
        failed: 'failed'
    });
});

app.use('/submit-phone', (req, res) => {
    res.send({
        phone: 'phone'
    });
    // res.send({
    //     failed: 'failed'
    // });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/'));
