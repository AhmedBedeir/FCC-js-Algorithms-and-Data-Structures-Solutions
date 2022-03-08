/*
: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
*/
function checkCashRegister(price, cash, cid) {
  let changed = { status: 'OPEN', change: [] };
  const cidObj = {};
  let sumCid = 0;
  let need = cash - price;
  let changeNeed = need;
  const coins = {
    'ONE HUNDRED': 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };
  // make cidarr to object to maped together
  for (let i = 0; i < cid.length; i++) {
    cidObj[cid[i][0]] = cid[i][1];
    sumCid += cid[i][1]; // get sum all cid in drawer
  }

  for (let key in coins) {
    let arr = [];
    let countOfThisCoin = 0;
    changeNeed = parseFloat(changeNeed).toFixed(2);
    // console.log(`${changeNeed} => ${key} => ${cidObj[key]}`);
    if (changeNeed >= coins[key] && cidObj[key] !== 0) {
      if (changeNeed >= cidObj[key]) {
        changeNeed -= cidObj[key];
        countOfThisCoin += cidObj[key];
        cidObj[key] = 0;
      } else {
        let needOfThisCoin = parseInt(changeNeed / coins[key]); // like 16.47 and i have 55$ of coin 5$ then need 3 coin of this coin
        changeNeed -= needOfThisCoin * coins[key];
        countOfThisCoin += needOfThisCoin * coins[key];
        cidObj[key] -= needOfThisCoin * coins[key];
      }
    }
    if (countOfThisCoin !== 0) {
      arr = [key, countOfThisCoin];
      changed.change.push(arr);
    }
  }
  if (changeNeed != 0 || need > sumCid) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  } else if (need === sumCid) {
    return { status: 'CLOSED', change: cid };
  }
  return changed;
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ])
);
