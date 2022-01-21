const arr = [1, 2, 3, 4, 5];

Array.prototype.customMap = function (callback) {
  let newResultArray = []; // map returns new array after manipulating original one
  for (let i = 0; i < this.length; i++) {
    newResultArray.push(callback(this[i], i));
  }
  return newResultArray; // returning new array with manipulated values from line 12.
};

const result = arr.customMap((value, i) => {
  return value + i;
});

console.log(result);
