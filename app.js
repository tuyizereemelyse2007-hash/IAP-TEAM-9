/*import { login } from './auth / login ';
import { signup } from './auth/signup';

const express = require('express');
const app = express();
const FS = require("fs")
const port = 3000;
const file_path = "./users.json"
app.use(express.json)
app.use('/', authRoute)

export

function get_users() {
    const data = FS.readFileSync(file_path);
    return JSON.parse(data);
}

export function save_users(users) {
    fs.writeFileSync("users.json", JSON.stringfy(users, null, 2))
}




app.get('/', (req, res) => {
    res.send("hello class !")

});
app.get('/team', (req, res) => {
    res.send(get_users())

});*/
//login
//app.post('/login', login())
//signup
//app.post('/signup', signup())

import express from 'express';
import authRoute from './routes/authRoute.js'

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', authRoute)


app.listen(port, () => {
    console.log("Server is Running on port!")
});