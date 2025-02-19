import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./db.js";
const resolvers = {
  Query: {
    users() {
      return db.users;
    },
    reviews() {
      return db.reviews;
    },
    products() {
      return db.products;
    },
  },

  User: {
    reviews(user) {
      return db.reviews.filter((review) => review.userid === user.id);
    },
  },
  Product: {
    sellerid(parent) {
      return db.users.find((user) => user.id === parent.sellerid);
    },
    reviewid(parent) {
      return db.reviews.filter((review) => parent.reviewid.includes(review.id));
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const { url } = await startStandaloneServer(server, { listen: { port: 4001 } });
console.log("server is running at " + url);
