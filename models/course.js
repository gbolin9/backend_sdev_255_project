const db = require("../db")

const Course = db.model("Course",{
    courseID: {type: String, unique: true, required: true},
    teacherID: Number,
    studentID: [Number],
    courseName: String,
    subjectArea: String,
    description: String,
    credits: Number
})

module.exports = Course;

