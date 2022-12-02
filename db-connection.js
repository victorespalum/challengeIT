const { connect } = require('mongoose')

const connectToDB = async () => {

    try {
        await connect(process.env.MONGODB_URI)
        console.log('conectado a MongoDB')
    } catch (error) {
        console.error(error)
    }
}

module.exports = { connectToDB }