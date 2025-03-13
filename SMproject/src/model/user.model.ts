import mongoose from "mongoose";
import { Role } from "../@types/global.types";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [5, "name must be more that 5 letter"],
  },
  lastName: {
    type: String,
    required: true,
    minlength: [3, "last name more than 3 letter"],
  },
  email: {
    require: true,
    type: String,
    match: [emailRegex, "please enter the valid email format"],
  },
  role: {
    type: String,
    enum: Object.values(Role),
    default: Role.user,
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "password is more than 5 letter"],
  },
});

const User = mongoose.models.User || mongoose.model("user", userSchema);

export default User;
