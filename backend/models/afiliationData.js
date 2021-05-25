const mongoose = require('mongose')

const afiliationSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    cc: Number,
    expedition_date: Date, default: Date.now,
    eps: String,
})

const afiliation = mongoose.model('users', afiliationSchema)

module.exports = afiliation