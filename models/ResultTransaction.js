const { Schema, model } = require ('mongoose')

const resultTransactionSchema = new Schema ({
    tournament : {
        type: String,
        required: true
    },
    user : {
        type: String,
        required: true
    },
    result : {
        type: String,
        required: true
    },
    prize : {
        type: String,
        required: true
    }
})

module.exports = model ('ResultTransaction', resultTransactionSchema)

