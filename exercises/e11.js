// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  var sums = [];
  for (let i = 0; i < array.length; i++) {
    var acc = array[i];
    let sum = 0;
    if (acc.withdrawals) {
      for (let j = 0; j < acc.withdrawals.length; j++) {
        sum += acc.withdrawals[j];
      }
    }

    sums.push(sum);
  }
  return sums;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
