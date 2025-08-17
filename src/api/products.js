// src/api/products.js

// Instead of calling backend API, we use mock/demo data
export const getProducts = async () => {
  // Demo product list
  return [
    {
      id: 1,
      name: "Laptop",
      price: 85000,
      stock: 12,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Office Chair",
      price: 7500,
      stock: 25,
      category: "Furniture",
    },
    {
      id: 3,
      name: "Keyboard",
      price: 1500,
      stock: 50,
      category: "Electronics",
    },
    {
      id: 4,
      name: "Water Bottle",
      price: 300,
      stock: 100,
      category: "Accessories",
    },
  ];
};
