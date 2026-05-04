const db = require("../db")

const Student = db.model("Student",{
    firstName: String,
    lastName: String,
    email: {type: String, unique:true, lowercase:true},
    loginName: {type: String, unique: true},
    studentID: {
    type: Number,
    unique: true,
    default: () => Math.floor(100000 + Math.random() * 900000) // Generates 6-digit ID
  },
    password: String,
    courses: [],
    role: {type: String, default: "student"}

})

module.exports = Student;