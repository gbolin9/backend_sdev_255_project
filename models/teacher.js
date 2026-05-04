const mongoose = require('../db'); // Assuming this exports mongoose
const AutoIncrement = require('mongoose-sequence')(mongoose);

const teacherSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, lowercase: true },
  loginName: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'teacher' } // Added quotes here
});

// This adds the 'teacherID' field automatically
teacherSchema.plugin(AutoIncrement, { inc_field: 'teacherID' });

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;