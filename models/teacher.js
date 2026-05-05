const db = require("../db")

const mongoose = require('mongoose');
const teacherSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {type: String, unique:true, lowercase:true},
  loginName: {type: String, unique: true},
  teacherID: { 
    type: Number, 
    unique: true, 
    immutable: true, // <--- This prevents it from ever changing
    default: () => Math.floor(100000 + Math.random() * 900000)
  },
  password: String,
  role: {type: String, default: "teacher"}
});

const Teacher = db.model("Teacher", teacherSchema);


module.exports = Teacher;