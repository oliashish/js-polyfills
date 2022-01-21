const arr = [1, 2, 4, 5, 3, 2, 3, 5, 6, 10]; // can be array of any data type or mix of datatypes


Array.prototype.customForEach = function (callback) {
  // this will point to arr that we created
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
};

arr.customForEach((currentValue, index) => {
  console.log(currentValue);
});


