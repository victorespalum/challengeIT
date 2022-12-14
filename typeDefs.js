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
    image: String,
    sessionName: String,
    sessionPwd: String
}

type Reward{
    id: ID
    name: String
    description: String
    image: String
    price: String
    stock: String
}

type RewardTransaction{
    id: ID
    reward: String
    user: String
    address: String
    date: String
}

type ResultTransaction{
    id: ID
    tournament: String
    user: String
    result: String
    prize: String
}

type Query {
    hello: String
    getAllUsers: [User]
    getUser(id: ID): User
    getAllGames: [Game]
    getGame(id: ID): Game
    getAllTournaments: [Tournament]
    getTournament(id: ID): Tournament
    getAllRewards: [Reward]
    getReward(id: ID): Reward
    getAllRewardTransactions: [RewardTransaction]
    getRewardTransaction(id: ID): RewardTransaction
    getAllResultTransactions: [ResultTransaction]
    getResultTransaction(id: ID): ResultTransaction
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
    sessionName: String
    sessionPwd: String
}

input RewardInput {
    name: String
    description: String
    image: String
    price: String
    stock: String
}

input RewardTransactionInput {
    reward: String
    user: String
    address: String
    date: String
}

input ResultTransactionInput {
    tournament: String
    user: String
    result: String
    prize: String
}

### username: String, password: String en lugar de User: UserInput!

 type Mutation {
    createUser(name: String!, surname: String!, address: String!, phone: String!, coins: String!, trophies: String!, sesion: Boolean! username: String!, password: String!, description: String!, image: String!): User
    createGame(title: String!, description: String!, tournaments: [String], image: String): Game
    createTournament(title: String!, schedule: String!, map: String!,kills: String!, playStyle: String!, prize: String!, description: String, participants: [String], image: String, sessionName: String!, sessionPwd: String!): Tournament
    createReward(name: String!, description: String!, image: String, price: String!, stock: String!): Reward
    createRewardTransaction(reward: String!, user: String!, address: String!, date: String!): RewardTransaction
    createResultTransaction(tournament: String!, user: String!, result: String!, prize: String!): ResultTransaction
    deleteUser(id: ID!): String
    deleteGame(id: ID!): String
    deleteTournament(id: ID!): String
    deleteReward(id: ID!): String
    deleteRewardTransaction(id: ID!): String
    deleteResultTransaction(id: ID!): String
    updateUser(id: ID!, user: UserInput): User
    updateGame(id: ID!, game: GameInput): Game
    updateTournament(id: ID!, tournament: TournamentInput): Tournament
    updateReward(id: ID!, reward: RewardInput): Reward
    updateRewardTransaction(id: ID!, rewardTransaction: RewardTransactionInput): RewardTransaction
    updateResultTransaction(id: ID!, resultTransaction: ResultTransactionInput): ResultTransaction
}
`
module.exports = { typeDefs }