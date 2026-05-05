const db = require("../db")

const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {type: String, unique:true, lowercase:true},
  loginName: {type: String, unique: true},
  studentID: { 
    type: Number, 
    unique: true, 
    immutable: true, // <--- This prevents it from ever changing
    default: () => Math.floor(100000 + Math.random() * 900000)
  },
  password: String,
  courses: [],
  role: {type: String, default: "student"}
});

const Student = db.model("Student", studentSchema);
module.exports = Student;