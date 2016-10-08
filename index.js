const Counter = function f() {
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

const myCounter = new Counter();

myCounter.getCount();
myCounter.increase();
myCounter.getCount();
myCounter.decrease();
myCounter.getCount();
myCounter.decrease();
myCounter.getCount();

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

getType(1); // 'number'
getType(NaN); // 'NaN'
getType('1'); // 'string'
getType(a => a); // 'function'
getType({}); // 'object'
getType([]); // 'array'
getType(null); // 'null'
getType(undefined); // 'undefined'

function curringSum(value) { // WTF is this shit...BUT IT WORK! BLACK MAGIC.
  const sum = value;
  return function curringSum2(value2) {
    const sum2 = sum + value2;
    return function f2(value3) {
      return sum2 + value3;
    };
  };
}

curringSum(1)(2)(3); // 6
const add125 = curringSum(100)(25);
add125(10); // 135
