let products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
  ];
let totalPrice = products.reduce((sum, product) => sum + product.price * 1.25, 0);
console.log(totalPrice);
  