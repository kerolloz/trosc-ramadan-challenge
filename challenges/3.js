// Solve the bug in the isPrime function

/**
 * return true if number is prime
 * otherwise return false
 * @param {number} n
 */
function isPrime(n) {
  if (n == 2) return true;
  for (let i = 2; i < n; i++) if (n % i == 0) return false;
  return true;
}

for (let i = 0; i < 20; i++) {
  if (isPrime(i)) console.log(i);
}
