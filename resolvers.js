const Game = require('./models/Game')
const Tournament = require('./models/Tournament')
const User = require('./models/User')

const resolvers = {

    Query: {
        hello: () => 'Hello world',
        getAllUsers: async () => {
            const users = await User.find()
            return users
        },
        getAllGames: async () => {
            const games = await Game.find()
            return games
        },
        getAllTournaments: async () => {
            const tournaments = await Tournament.find()
            return tournaments
        },
        getUser: async (_, args) => {
            const user = await User.findById(args.id)
            return user
        },
        getGame: async (_, args) => {
            const game = await Game.findById(args.id)
            return game
        },
        getTournament: async (_,args) => {
            const tournament = await Tournament.findById(args.id)
            return tournament
        },
        loginCredentials: async(_,args) => {
            const {username, password} = args
            console.log('Credentials received: ', args)
            const users =await User.find()
            
            //&& users[i].active == false
            for( i = 0; i < users.length; i++){
                
                if(users[i].username == args.username && users[i].password == args.password ){
                    if(users[i].sesion == false){
                        //poner a verdadero
                        //devolver "Inicio correcto"
                        users[i].sesion = true
                        await User.findByIdAndUpdate(users[i].id, {
                            $set: users[i]
                        })
                        return 'Inicio correcto'
                    }
                    else if(users[i].sesion == true){
                        //devolver "Hay otra sesion activa"
                        return 'Hay otra sesion activa'
                    }
                }else if(i == users.length -1){
                    //devolver "Credenciales incorrectas"
                    return 'Credenciales incorrectas'
                }  
            }
        },
        logout: async(_,args) => {
            const {username} = args
            console.log(args, ' session will close')
            const users = await User.find()

            for(i = 0; i < users.length; i++){
                if(users[i].username == args.username){
                    users[i].sesion = false
                    await User.findByIdAndUpdate(users[i].id, {
                        $set: users[i]
                    })
                    return 'logged out'
                }
            }

        }
    },
    Mutation: {
        createUser: async (_, args) => {
            const { name, surname, address, phone, coins, trophies, sesion, username, password, description } = args
            console.log(args)
            const newUser = new User({name, surname, address, phone, coins, trophies, sesion, username, password, description})
            //console.log(newUser)
            await newUser.save()
            return newUser
        },
        createGame: async (_, args) => {
            const { title, description, active, image } = args
            const newGame = new Game({ title, description, active, image })
            console.log(newGame)
            await newGame.save()
            return newGame
        },
        createTournament: async (_,args) => {
            const {title, schedule, map, kills, playStyle, prize, description, participants } = args
            const newTournament = new Tournament({title, schedule, map, kills, playStyle, prize, description, participants})
            await newTournament.save()
            return newTournament
        },
        deleteUser: async (_, { id }) => {
            console.log('ID de usuario a eliminar: ',id)
            await User.findByIdAndDelete(id)
            return 'Usuario eliminado'
        },
        deleteGame: async (_, { id }) => {
            await Game.findByIdAndDelete(args, id)
            return 'Juego eliminado'
        },
        deleteTournament: async (_, { id }) => {
            await Tournament.findByIdAndDelete(args, id)
            return 'Torneo eliminado'
        },
        updateUser: async (_, { id, user }) => {

            const userUpdated = await User.findByIdAndUpdate(id, {
                $set: user
            }, { new: true })
            return userUpdated
        },
        updateGame: async (_, { game, id }) => {
            const gameUpdated = await Game.findByIdAndUpdate(id, {
                $set: game
            }, { new: true })
            return gameUpdated
        },
        updateTournament: async (_, {id, tournament}) => {
            const tournamentUpdated = await Tournament.findByIdAndUpdate(id, {
                $set: tournament
            }, { new: true})
            return tournamentUpdated
        }
    }
}

module.exports = { resolvers }