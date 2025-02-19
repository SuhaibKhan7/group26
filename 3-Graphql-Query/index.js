import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./db.js";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
const productTypes = ["PhysicalProduct", "DigitalProduct"];
const resolvers = {
  Query: {
    users: () => db.Users,

    products: () => {
      // console.log("Returning Products:....", db.Products);
      return db.Products;
    },

    physicalproducts: () =>
      db.Products.filter((p) => p.__typename === "PhysicalProduct"),
    digitalproducts: () =>
      db.Products.filter((p) => p.__typename === "DigitalProduct"),
  },

  // PhysicalProduct: {
  //   seller(parent) {
  //     return db.Users.find((user) => user.id === parent.sellerId);
  //   },
  // },
  // DigitalProduct: {
  //   seller(parent) {
  //     return db.Users.find((user) => user.id === parent.sellerId);
  //   },
  // },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 4001 } });

console.log("🚀 Server running at " + url);
