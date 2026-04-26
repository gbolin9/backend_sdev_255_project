const db = require("../db")

const Teacher = db.model("Teacher",{
    firstName: String,
    lastName: String,
    loginName: {type: String, unique: true},
    password: String
})

module.exports = Teacher;