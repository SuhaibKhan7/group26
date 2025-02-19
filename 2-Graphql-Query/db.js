const users = [
  {
    id: 1,
    userid: 101,
    name: "John",
    username: "johnA",
    email: "john@gmail.com",
  },
  { id: 2, userid: 102, name: "Jane", username: "janeB", email: "jane@gmail" },
  { id: 3, userid: 103, name: "Bob", username: "bobC", email: "bob@gmail.com" },
];
const reviews = [
  {
    id: 1,
    rating: 4,
    context: "This is a good product",
    userid: 1,
  },
  {
    id: 2,
    rating: 5,
    context: "This is a great product",
    userid: 2,
  },
  {
    id: 3,
    rating: 3,
    context: "This is a good product",
    userid: 1,
  },
];
const products = [
  {
    id: 1,
    name: "Product1",
    price: 100,
    Productid: 1000,
    reviewid: [1, 2], //filter includes find
    sellerid: 1,
  },
  {
    id: 2,
    name: "Product2",
    price: 200,
    Productid: 2000,
    reviewid: [3],
    sellerid: 2,
  },
];
export default { users, reviews, products };
