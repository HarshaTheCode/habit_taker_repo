import mongoose from "mongoose";
import user from './user.js';
import jwt from 'jsonwebtoken'

const mongouri = 'mongodb://localhost:27017/habitTraker';

export async function createUser(req, res) {
    mongoose.connect(mongouri)

    const userdata = await new user({
        username: req.body.username,
        Email: req.body.userEmail,
        password: req.body.userPassword
    })


    const token = jwt.sign({

        Email: req.body.userEmail,
        
    }, "secretCode")
    console.log(token)
    res.cookie("Token", token)


    await userdata.save();

    console.log("insertion completed")
    return true;
}

