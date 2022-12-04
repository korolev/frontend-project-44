export const getRandomInt = (from, to) => {
  const min = Math.ceil(from);
  const max = Math.floor(to);

  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomArrayValue = (arr) => {
  if (!arr || !arr.length) {
    throw new Error('The parameter should be a not-empty Array.');
  }

  const rendomIdx = getRandomInt(0, arr.length - 1);

  return arr[rendomIdx];
};

export const greatestCommonDivisor = (a, b) => {
  if ((typeof a !== 'number') || (typeof b !== 'number')) {
    return false;
  }

  let x = Math.abs(a);
  let y = Math.abs(b);

  while (y) {
    const tmp = y;
    y = x % y;
    x = tmp;
  }

  return x;
};

export const isEven = (n) => Number(n) % 2 === 0;

export const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export const add = (a, b) => Number(a) + Number(b);

export const subtract = (a, b) => a - b;

export const mult = (a, b) => a * b;
