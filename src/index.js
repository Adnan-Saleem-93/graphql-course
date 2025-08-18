import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

const server = new ApolloServer({})

const { url } = await startStandaloneServer(server, { port: 4000 })

console.log(`Server is running on port: ${4000}`)
