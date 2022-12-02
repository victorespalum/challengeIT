const { Schema, model } = require('mongoose')

const gameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tournaments: {
        type: [String],
        required: false
    }
})

module.exports = model('Game', gameSchema)