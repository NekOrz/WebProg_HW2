let Counter = function f() {
  let count = 0;
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

function getType(v) {
  const type = typeof v;
  if (type === 'number') {
    if (isNaN(v) === true) {
      return 'NaN';
    }
    return 'number';
  }
  else if (type === 'object') {
    if (v === null) {
      return 'null';
    }
    else if ((v + []) === '') {
      return 'array';
    }
    return 'object';
  }
  return type;
}
