const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongoUrl = 'mongodb://127.0.0.1:27017/challenge';
mongoose.connect(mongoUrl);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTION'){
        res.header('Access-Control-Allow-Method',
            'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({})
    }
    next();
});

const PORT = 8000;

app.use('/question', require('./router/index'));

app.listen(PORT, () => {
    console.log(`Server Started at port no ${PORT}`);
})