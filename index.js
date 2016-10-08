let Counter = function f() {
  let count;
  return {
    getCount() {
      return count;
    },
    increase() {
      count += 1;
    },
    decrease() {
      count -= 1;
    },
  };
};
