const { gql } = require('apollo-server-express')

const typeDefs = gql`

type User{
    id: ID
    name: String
    surname: String
    address: String
    phone: String
    coins: String
    trophies: String
    sesion: Boolean
    username: String
    password: String 
    description: String
    image: String
}

type Game{
    id: ID
    title: String
    description: String
    tournaments: [String]
    image: String
}

type Tournament{
    id: ID
    title: String
    schedule: String
    map: String
    kills: String
    playStyle: String
    prize: String
    description: String
    participants: [String]
    image: String
}

type Query {
    hello: String
    getAllUsers: [User]
    getUser(id: ID): User
    getAllGames: [Game]
    getGame(id: ID): Game
    getAllTournaments: [Tournament]
    getTournament(id: ID): Tournament
    loginCredentials(username: String!, password: String!): String
    logout(username: String!): String
}

input UserInput {
    name: String
    surname: String
    address: String
    phone: String
    coins: String
    trophies: String
    sesion: Boolean
    username: String 
    password: String 
    description: String
    image: String
}

input GameInput {
    title: String
    description: String
    tournaments: [String]
    image: String
}

input TournamentInput {
    title: String
    schedule: String
    map: String
    kills: String
    playStyle: String
    prize: String
    description: String
    participants: [String]
    image: String
}

### username: String, password: String en lugar de User: UserInput!

 type Mutation {
    createUser(name: String!, surname: String!, address: String!, phone: String!, coins: String!, trophies: String!, sesion: Boolean! username: String!, password: String!, description: String!, image: String!): User
    createGame(title: String!, description: String!, tournaments: [String], image: String): Game
    createTournament(title: String!, schedule: String!, map: String!,kills: String!, playStyle: String!, prize: String!, description: String, participants: [String], image: String): Tournament
    deleteUser(id: ID!): String
    deleteGame(id: ID!): String
    deleteTournament(id: ID!): String
    updateUser(id: ID!, user: UserInput): User
    updateGame(id: ID!, game: GameInput): Game
    updateTournament(id: ID!, tournament: TournamentInput): Tournament
}
`
module.exports = { typeDefs }