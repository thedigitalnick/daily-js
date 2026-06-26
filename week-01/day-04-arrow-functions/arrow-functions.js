// 1. Simple return
function double(n) {
  return n * 2;
}

const double = (n) => n * 2;

// 2. Multiple parameters
function add(a, b) {
  return a + b;
}

const add = (a, b) => a + b;

// 3. Array method callback
function getNames(users) {
  return users.map(function(user) {
    return user.name;
  });
}

const getNames = (users) => users.map(user => user.name);

// 4. No parameters
function getTimestamp() {
  return Date.now();
}

const getTimestamp = () => Date.now();

// 5. Conditional logic with a single param
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const isEven = (num) => num % 2 === 0;