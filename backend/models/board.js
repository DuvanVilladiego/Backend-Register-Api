const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
    userId: String,
    name: String,
    description: String,
    status: String,
    imageUrl: String,
    date: {type: Date, default: Date.now},
})

const Board = mongoose.model('Board', boardSchema)

module.exports = Board;