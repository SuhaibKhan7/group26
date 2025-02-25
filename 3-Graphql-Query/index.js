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
  }, //query close

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

  // Product: {
  //   __resolveType: (obj) => {
  //     console.log(obj.__typename);
  //     return obj.__typename;
  //   },
  // },
  Mutation: {
    createUser(_, { newuser }) {
      console.log(newuser);
      const id = uuidv4();
      const user = { id, ...newuser };
      db.Users.push(user);
      const updateduser = `export default ${JSON.stringify(db)}`;
      fs.writeFileSync("./db.js", updateduser);
      return user;
    },
  },
};
const getseller = (parent) => {
  console.log("-->" + parent.name);
  return db.Users.find((user) => user.id === parent.sellerId);
};

productTypes.forEach((p) => {
  resolvers[p] = { seller: getseller };
});

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 4001 } });

console.log("🚀 Server running at " + url);
