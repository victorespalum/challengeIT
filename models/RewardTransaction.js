const { Schema, model } = require ('mongoose')

const rewardTransactionSchema = new Schema ({
    reward : {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

module.exports = model ('RewardTransaction', rewardTransactionSchema)