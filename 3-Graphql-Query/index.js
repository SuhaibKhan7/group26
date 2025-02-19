import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./db.js";

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

  Product: {
    __resolveType: (obj) => {
      console.log("......" + obj.name);
      return obj.__typename;
    },
    // Required for interfaces
  },
};
const commonSellerResolver = (parent) => {
  console.log("📌 Resolving seller for:", parent.name);
  return db.Users.find((user) => user.id === parent.sellerId) || null;
};

// Assign seller resolver to all product types dynamically
productTypes.forEach((type) => {
  resolvers[type] = { seller: commonSellerResolver };
});

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 4001 } });

console.log("🚀 Server running at " + url);
