class Random {
  constructor() {}

  generateRandomNum(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  pickNumberInList(arr) {
    let randomNum = this.generateRandomNum(arr.length - 1, 0);

    return arr[randomNum];
  }

  countCharge(arr, amount) {
    let coinObj = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };

    while (amount > 0) {
      arr = arr.filter(coin => coin <= amount);
      let randomCoin = this.pickNumberInList(arr);
      amount -= randomCoin;
      coinObj[randomCoin]++;
    }

    return Object.values(coinObj).reverse();
  }
}

export default Random;
