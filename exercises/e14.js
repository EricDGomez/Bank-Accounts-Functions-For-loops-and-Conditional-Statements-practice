// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let accounts = [];
  for (let i = 0; i < array.length; i++) {
    const acc = array[i];
    let sumDep = 0;
    let sumWith = 0;
    if (acc.deposits) {
      for (let j = 0; j < acc.deposits.length; j++) {
        sumDep += acc.deposits[j];
      }
    }
    if (acc.withdrawals) {
      for (let k = 0; k < acc.withdrawals.length; k++) {
        sumWith += acc.withdrawals[k];
      }
    }
    if (acc.balance !== sumDep - sumWith) {
      accounts.push(acc);
    }
  }
  return accounts;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
