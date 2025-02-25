export default {
  Users: [
    { id: 1, sellerid: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, sellerid: 1, name: "Bob", email: "bob@example.com" },
    {
      id: "7b1083b1-a0c1-486c-aef8-3ab37c298824",
      name: "rose",
      email: "rose@gmail.com",
    },
    {
      id: "dca6c6f2-b893-4544-852f-9433717fe2b2",
      name: "rose",
      email: "rose@gmail.com",
    },
  ],
  Products: [
    {
      id: 101,
      name: "Laptop",
      price: 1200,
      category: "Electronics",
      sellerId: 1,
      weight: 2.5,
      dimensions: "15x10 inches",
      shippingCost: 25,
      __typename: "PhysicalProduct",
    },
    {
      id: 102,
      name: "Smartphone",
      price: 800,
      category: "Electronics",
      sellerId: 2,
      weight: 0.4,
      dimensions: "6x3 inches",
      shippingCost: 10,
      __typename: "PhysicalProduct",
    },
    {
      id: 103,
      name: "E-Book: JavaScript Guide",
      price: 15,
      category: "Books",
      sellerId: 1,
      fileSize: 2.5,
      format: "PDF",
      downloadLink: "https://example.com/download/ebook1",
      __typename: "DigitalProduct",
    },
    {
      id: 104,
      name: "Tshirt",
      price: 50,
      category: "Clothes",
      sellerId: 2,
      size: "M",
      __typename: "PhysicalProduct",
      length: 1000,
    },
  ],
};
