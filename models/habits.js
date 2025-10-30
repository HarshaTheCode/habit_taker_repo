// models/Habit.js
import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // reference to the user
    required: true,
    ref: 'user',
  },
  habit:  String  ,
  isActive:  Boolean,
  
  createdAt: {
    type: Date,
    default: Date.now, // automatically sets current date when created
  },
});

const  habits  = mongoose.model('habits', habitSchema);
export default habits;
