const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true, min: 0 },
});

module.exports = User = mongoose.model('User', UserSchema, 'users');