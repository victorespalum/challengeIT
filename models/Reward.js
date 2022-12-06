const { Schema, model } = require ('mongoose')

const rewardSchema = new Schema ({
    name : {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    price: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true
    }
})

module.exports = model ('Reward', rewardSchema)