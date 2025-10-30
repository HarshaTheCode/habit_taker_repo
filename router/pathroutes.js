import { createUser } from '../models/createUser.js';
import path from 'path'
import express from 'express';
import { createHabit } from '../models/crateHabit.js'
import { findpassword, finduser } from '../models/findingUser.js';
import jwt from 'jsonwebtoken'
import user from '../models/user.js';


export const routes = express.Router();
const __dirname = import.meta.dirname;



routes.get('/', (req, res) => {

    res.send("landing page ")
})

routes.get('/register', (req, res) => {

    const filepath = path.join(__dirname, '../public', 'register.html')
    res.sendFile(filepath)
})

routes.get('/login', (req, res) => {
    const filepath = path.join(__dirname, '../public', 'login.html')
    res.sendFile(filepath)
})

routes.post('/login', async (req, res) => {


    const findinguser = await finduser(req, res);

    if (findinguser) {
        const findingpassword = await findpassword(req, res);

        console.log("user exists")
        if (findingpassword) {

            console.log("user perfect ")


            const filepath = path.join(__dirname, '../public', 'homepage.html')
            res.sendFile(filepath)
        }
        else {
            const filepath = path.join(__dirname, '../public', '404.html')
            res.sendFile(filepath)

        }
    } else {
        const filepath = path.join(__dirname, '../public', '404.html')
        res.sendFile(filepath)

    }



})

routes.post('/create', async (req, res) => {

    const result = await createUser(req, res);
    console.log(result)
    if (!result) {

        res.send('error while creating the user')

    }
    else {


        console.log("user created ")

        const filepath = path.join(__dirname, '../public', "homepage.html")
        res.redirect('/home')

    }
})

routes.get('/home', (req, res) => {

    const filepath = path.join(__dirname, '../public', "homepage.html")


    res.sendFile(filepath)

})

routes.post('/createHabit', (req, res) => {

    createHabit(req, res);
    console.log("createHabit crated ")
    res.send("perfect")
})