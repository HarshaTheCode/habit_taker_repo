import mongoose from "mongoose";
import habits from "./habits.js";
import user from "./user.js";

const mongouri = 'mongodb://localhost:27017/habitTraker';

 export async function createHabit( req,res){
    mongoose.connect(mongouri)

   const habitdata=  new habits({

     userId:"69021c727f5535f8de41ef4a",
       habit:"learning the express",
        isActive: "true"
        
    })
    console.log(habitdata);
   const userId ="69021c727f5535f8de41ef4a"
 
    const  userHabitUpadte = await user.updateOne(
      {
        Email :"aed@sa",
      $push:{habits:habitdata._id} 
   
    },

    
    );
 
   await habitdata.save(); 
   
    console.log("insertion completed")
    return  true;
}

