
let count = 0;
let Counter = {
  count,
};
let Counter = {
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

let c = new Counter();
