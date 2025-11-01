import mongoose from "mongoose";
import habitcompleted from "./completedHabits.js";
import user from "./user.js";
import  jwt  from "jsonwebtoken";

const mongouri = 'mongodb://localhost:27017/habitTraker';


export async function completedHabit( req,res){
  const token = req.cookies.Token;
  const verify = jwt.verify(token ,"secretCode")
  console.log(verify)
   mongoose.connect(mongouri)

 
 const userdataid= await user.findOne({Email:verify.Email}).select("_id")
 
console.log(userdataid)
 
const userd= '6905a082f6e9b5dc81e1cc33';
  const completedhabitdata=  new habitcompleted({
  
  
    userId: userdataid._id,
     habitId: userd

    })

    console.log(completedhabitdata);
 
   await completedhabitdata.save(); 
    console.log("insertion completed")


  
    return  true;
}











