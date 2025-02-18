export const typeDefs = `#graphql

inteface Product{
    id: ID!
    name: String!
    price:Float!
    category: String!
    sellerId: ID!
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
}
type DigitalProducts implements Product{
    id: ID!
    name: String!
    price:Float!
    category: String!
    sellerId: ID!
    fileSize: Float!
    format: String!
    downloadLink: String!

}
type Clothes implements Product{

}

type Query{
    products: [Product!]!
    physicalproducts:[PhysicalProduct]!
    digitalproducts:[DigitalProduct]!
}


`;
