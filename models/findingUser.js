import mongoose from "mongoose";
import user from "./user.js";


const mongouri = 'mongodb://localhost:27017/habitTraker';


await mongoose.connect(mongouri)

 export  async function finduser(req, res ){

        const userdata= await user.findOne({Email:req.body.userEmail}).select("Email")
        console.log(userdata)
        if(userdata!=null){
            console.log("user exist")

            return true;
        }
        else{
            console.log("somthing went wrong")
            return false ;
        }
    } 

export async function findpassword(req, res ){

        const userdata= await user.findOne({password:req.body.userPassword}).select("password")
        console.log(userdata)
        if(userdata!=null){
            console.log("user exist")

            return true;
        }
        else{
            console.log("some thing went wrong")
            return false ;
        }
    }