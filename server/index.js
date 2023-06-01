const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const User = require('./models/User')
const app = express();
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(10);
const secret = "hcewqyt378w35thgnbw";

app.use(cors({ credentials: true, origin: 'http://127.0.0.1:5173' }))
app.use(express.json())

mongoose.connect('mongodb+srv://muditert34:PoU9KJxkXBmt0k6O@cluster0.qrlonzo.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt)
        })
        res.json(userDoc)
    } catch (e) {
        res.status(404).json(e)
    }
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body
    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc.password)
    if (passOk) {
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err
            res.cookie('token', token).json('ok')
        })
    } else {
        res.status(400).json('wrong credentials')
    }
})

app.listen(4000);

