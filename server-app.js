require('dotenv').config()

const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const { typeDefs } = require('./typeDefs')

const { resolvers } = require('./resolvers')

const { connectToDB } = require('./db-connection.js')

const app = express()

connectToDB()

app.get('/', (req, res) => res.send('Bienvenido a mi GRAPHQL API'))

module.exports = app


async function start() {

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    })

    await apolloServer.start()

    apolloServer.applyMiddleware({ app })

    app.use('*', (req, res) => res.status(404).send('Not Found'))


    app.listen(process.env.PORT, () => {
        console.log('Servidor iniciado en el puerto: ', process.env.PORT)
    })
}

start()