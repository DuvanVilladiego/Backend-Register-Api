const express = require('express');
const mongoose = require('mongoose');

const User = require('./routes/user')
const Auth = require('./routes/auth')
const Board = require('./routes/board')

const app = express()

app.use(express.json())

app.use('/api/user/',User)
app.use('/api/auth/',Auth)
app.use('/api/board',Board)

const port = process.env.PORT || 3002;

app.listen(port, () => console.log('server executing on: ' + port + ' port'))

mongoose.connect('mongodb://127.0.0.1:27017/usersafiliation', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
})
.then(() => console.log('suscessfull MongoDB conection'))
.catch(err => console.log('Failed to connect to Mongo: ' + err))