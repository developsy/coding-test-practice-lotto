const { generateLotto } = require("./LottoGenerator");

class Model {
  #lottoNumbers = [];
  #totalGames;
  #lottoResults = {
    "5등": 0,
    "4등": 0,
    "3등": 0,
    "2등": 0,
    "1등": 0,
  };
  #totalWinningMoney = 0;
  #inputMoney;

  get lottoNumbers() {
    return this.#lottoNumbers;
  }

  get totalGames() {
    return this.#totalGames;
  }

  get grades() {
    return this.#lottoResults;
  }

  issueLotto(money) {
    this.#inputMoney = parseInt(money);
    const TOTAL_LOTTO_GAMES = parseInt(money / 1000);
    for (let count = 0; count < TOTAL_LOTTO_GAMES; count++) {
      this.#lottoNumbers.push(generateLotto(money).sort((x, y) => x - y));
    }
    this.#totalGames = TOTAL_LOTTO_GAMES;
  }

  resultCheck(winningNumbers, bonuseNumber) {
    for (const lottoNumber of this.#lottoNumbers) {
      const BONUS_HIT = lottoNumber.some((x) => x === bonuseNumber);
      const correctNumbers = lottoNumber.filter((x) => winningNumbers.includes(x)).length;
      this.#resultCheckHelper(correctNumbers, BONUS_HIT);
    }
  }
  #resultCheckHelper(correctNumbers, bonusHit) {
    if (correctNumbers === 6) this.#addFirst();
    if (correctNumbers === 5 && bonusHit) this.#addSecond();
    if (correctNumbers === 5 && !bonusHit) this.#addThird();
    if (correctNumbers === 4) this.#addFourth();
    if (correctNumbers === 3) this.#addFifth();
  }
  #addFifth() {
    this.#lottoResults["5등"] = this.#lottoResults["5등"] + 1;
    this.#totalWinningMoney += 5000;
  }
  #addFourth() {
    this.#lottoResults["4등"] = this.#lottoResults["4등"] + 1;
    this.#totalWinningMoney += 50000;
  }
  #addThird() {
    this.#lottoResults["3등"] = this.#lottoResults["3등"] + 1;
    this.#totalWinningMoney += 1500000;
  }
  #addSecond() {
    this.#lottoResults["2등"] = this.#lottoResults["2등"] + 1;
    this.#totalWinningMoney += 30000000;
  }
  #addFirst() {
    this.#lottoResults["1등"] = this.#lottoResults["1등"] + 1;
    this.#totalWinningMoney += 2000000000;
  }

  calculateEarningsRate() {
    return ((this.#totalWinningMoney / this.#inputMoney) * 100).toFixed(1);
  }
}

module.exports = Model;
