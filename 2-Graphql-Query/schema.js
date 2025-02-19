export const typeDefs = `#graphql
type User{
id:ID
name:String
email:String
reviews:[Review]
}
type Review{
id:ID
rating:Int
review:String
userid:ID
}
<<<<<<< HEAD
type Post{
    id:ID
    title:String
}
type Query{
users:[User]
reviews:[Review]
posts:[Post]
post(id:ID):Post
=======

type Product{
    id:ID!
    name:String!
    price:Float!
reviewid:[Review]
sellerid:User
}

type Query{
users:[User]
reviews:[Review]
products:[Product]
>>>>>>> fd809ee (upload)
}


`;
