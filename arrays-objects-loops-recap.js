// We model a LIST OF PRODUCTS that are for sale in our eCommerce
// About a product we want to represent:
// - name
// - price
// - productId

let products = [
  // Square brackets ---> Hey JS, I am defining a new Array
  {
    productId: "101f8ee3",
    name: "Smartphone",
    price: 500,
    canApplyDiscount: true,
  }, // Curly braces --> Hey JS, I am defining a new object
  {
    productId: "10138ff3",
    name: "Laptop",
    price: 1500,
    canApplyDiscount: false,
  },
  {
    productId: "12238ff3",
    name: "Bluetooth Speaker",
    price: 100,
    canApplyDiscount: false,
  },
  {
    productId: "12245ff3",
    name: "Noise Cancelling Headphones",
    price: 200,
    canApplyDiscount: true,
  },
];

console.log("\n-------PRINTING ALL PRODUCTS----------\n");

// Write an algorithm that prints, for every product:
// -- its name
// -- its price
// -- today is black friday - if possible, apply a discount of 20%
// The format MUST BE: Product Name - 123 euros (20% discount)

// What we are saying in the for loop is:
// 1) let's declare index, it will start with a value of 0
// 2) at the end of every iteration, we increase by 1 (this is what index++ does)
// 3) we will stop whenever index is >= the length of the products
for (let index = 0; index < products.length; index++) {
  // This block of code will be repeated, while index < products.length

  let product = products[index]; // get the product with position index from the array

  // console.log(product.name, "-", product.price, "euros");
  // Another way to write this console.log
  // We can use bactkicks strings and the following syntax
  // to create strings that contain some values.
  // TEMPLATE STRINGS / STRINGS TEMPLATING
  // console.log(`${product.name} - ${product.price} euros`);

  if (product.canApplyDiscount) {
    let discountedPrice = product.price * 0.8; // 20% discount
    console.log(`${product.name} - ${discountedPrice} euros (20% discount)`);
  } else {
    console.log(`${product.name} - ${product.price} euros`);
  }
}
