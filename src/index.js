import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { typeDefs } from "./schema.js"
import db from "./db.js"

const resolvers = {
  Query: {
    games() {
      return db.games
    },
    game(_, args) {
      return db.games.find((x) => x.id === args.id)
    },
    authors() {
      return db.authors
    },
    author(_, args) {
      return db.authors.find((x) => x.id === args.id)
    },
    reviews() {
      return db.reviews
    },
    review(_, args) {
      return db.reviews.find((x) => x.id === args.id)
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server, { port: 4000 })

console.log(`Server is running on port: ${4000}`)
