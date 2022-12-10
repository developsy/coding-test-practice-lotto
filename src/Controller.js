const { readBonusNumber, readInputMoney, readWinningNumbers } = require("./InputView");
const { generateLotto } = require("./LottoGenerator");
const Lotto = require("./Lotto");
const Model = require("./Model");

class Controller {
  constructor() {
    this.LottoGame = new Model();
  }

  start() {
    readInputMoney(this.LottoGame.issueLotto);
    this.#getWinningNumbers();
  }

  #getWinningNumbers() {}

  #getBonusNumber() {}

  #resultCheck() {}

  #calculateEarningsRate() {}
}

module.exports = Controller;
