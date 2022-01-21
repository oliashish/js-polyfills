const arr = [1, 2, 3, 4, 5];

Array.prototype.customReduce = function (callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

const result = arr.customReduce((acc, curr, i, arr) => {
  return acc * curr;
}, 1);
console.log(result);
