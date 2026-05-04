const db = require("../db")

const Student = db.model("Student",{
    firstName: String,
    lastName: String,
    email: {type: String, unique:true, lowercase:true},
    loginName: {type: String, unique: true},
    password: String,
    role: {type: String, default: "student"}

})

module.exports = Student;