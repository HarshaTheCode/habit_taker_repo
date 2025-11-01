import mongoose from "mongoose";

const completedHabitSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // reference to the user who completed it
    required: true,
  },
  habitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Habit", // reference to the habit completed
    required: true,
  },
  completedAt: {
    type: Date,
    default: Date.now, // stores when the habit was completed
  },
});

    const habitcompleted=mongoose.model("completedHabits", completedHabitSchema)

export default  habitcompleted
