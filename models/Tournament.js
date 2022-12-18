const { Schema, model } = require('mongoose')

const tournamentSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    schedule: {
        type: String,
        required: true
    },
    map: {
        type: String,
        required: true
    },
    kills: {
        type: String,
        required: true
    },
    playStyle: {
        type: String,
        required: true
    },
    prize: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    participants: {
        type: [String],
        required: false
    },
    image: {
        type: String,
        required: false
    },
    sessionName: {
        type: String,
        required: true
    },
    sessionPwd: {
        type: String,
        required: true
    },
    finished: {
        type: String,
        required: true
    }

})

module.exports = model ('Tournament', tournamentSchema)