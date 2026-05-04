const db = require("../db")

const Teacher = db.model("Teacher",{
    firstName: String,
    lastName: String,
    email: {type: String, unique:true, lowercase:true},
    loginName: {type: String, unique: true},
    password: String,
    role: {type: String, default: "teacher"}
})

module.exports = Teacher;