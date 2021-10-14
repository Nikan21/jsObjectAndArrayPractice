/* Arrays */

/* 1 */
const array = [1, 2, 3, 4, 5, 6, 7];

/* 2 */
const summNumbersLessFive = array.reduce((summValue, currentValue) => {
  if (currentValue < 5) {
    return summValue + currentValue;
  }
  return summValue;
});

/* 3 */
const array2 = array.map(function (value) {
  if ((5 < value) & (value < 10)) {
    return value;
  }
  return null;
});

/* 4 */
const arrayText = ["apple", "dog", "cow", "milk", "egg", "bekon"];

/* 5 */
const arrayFilter = arrayText.filter((word) => {
  for (let index = 0; index < array.length; index++) {
    if (word[index] === "e") {
      return word;
    }
  }
});

/* 6 */
const arraySort = arrayText.sort();

/* 7 */
const copyArray = arraySort.slice();

/* 8 */
const arrayWithoutSecondHalf = copyArray.slice(3);

/* Objects */

/* 1 */
const objProducts = {
  Name: "Milk",
  Price: 100,
  QuantityInStock: 250,
};

/* 2 */
objProducts.QuantityInStock = 50;

/* 3 */
objProducts.Color = "White";

/* 4 */
objProducts.Color = ["White", "Red", "Blue", "Yellow"];

/* 5 */
const { Price, QuantityInStock } = objProducts;
objProducts.calcCoast = () => {
  return Price * QuantityInStock;
};

/* 6 */
Object.freeze(objProducts);

/* 7 */
const copyObjProducts = Object.assign(objProducts);

/* 8 */
const stringObj = JSON.stringify(copyObjProducts);
console.log(stringObj);

/* Class */

/* 1 */
const assortment = [];

class Products {
  constructor(Name, Price, QuantityInStock) {
    (this.Name = Name),
      (this.Price = Price),
      (this.QuantityInStock = QuantityInStock);
  }
}

for (let index = 1; index <= 5; index++) {
  const product = new Products(`Product${index}`, 100 + index, 100 - index);
  assortment.push(product);
}
