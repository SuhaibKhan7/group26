export const typeDefs = `#graphql

interface Product{
    id: ID!
    name: String!
    price:Float!
    category: String!
    sellerId: ID!
    seller:User
}
type PhysicalProduct implements Product{
    id: ID!
    name: String!
    price:Float!
    category: String!
    sellerId: ID!
    weight:Float!,
    dimensions: String!
    shippingCost:Float!
    seller:User
}
type DigitalProduct implements Product{
    id: ID!
    name: String!
    price:Float!
    category: String!
    sellerId: ID!
    fileSize: Float!
    format: String!
    downloadLink: String!
    seller:User

}
type User{
    id: ID!
    name: String!
    email: String!
}
type Query{
    products: [Product!]!
    physicalproducts:[PhysicalProduct]!
    digitalproducts:[DigitalProduct]!
    users:[User!]!
}


`;
