const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Você deve digitar um nome'],
    trim: true,
    maxlength: [20, 'O nome não pode ultrapassar 20 caracteres'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
