// Array.find() only finds the first occurance that satisfies the conditions and returns

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.customFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    const found = callback(this[i], i);
    if (found) {
      let yourItem = this[i];
      return yourItem;
    }
  }
};

const result = arr.customFind((item) => {
  return item > 7;
});

console.log(result);
