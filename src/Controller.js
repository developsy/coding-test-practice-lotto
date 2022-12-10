const { readBonusNumber, readInputMoney, readWinningNumbers } = require("./InputView");
const { printIssuedLottos, printResult } = require("./OutputView");
const Lotto = require("./Lotto");
const Model = require("./Model");

class Controller {
  constructor() {
    this.LottoGame = new Model();
  }

  start() {
    readInputMoney(this.#getLottoNumbers.bind(this));
  }

  #getLottoNumbers(money) {
    this.LottoGame.issueLotto(money);
    printIssuedLottos(this.LottoGame.totalGames, this.LottoGame.lottoNumbers);
    readWinningNumbers(this.#getWinningNumbers.bind(this));
  }

  #getWinningNumbers(winningNumbers) {
    const WINNING_NUMBERS = winningNumbers.split(",").map((x) => parseInt(x));
    this.LottoValidation = new Lotto(WINNING_NUMBERS);
    readBonusNumber(this.#getBonusNumber.bind(this));
  }

  #getBonusNumber(bonuseNumber) {
    this.LottoGame.resultCheck(this.LottoValidation.winningNumbers, parseInt(bonuseNumber));
    this.#getResult();
  }

  #getResult() {
    const EARNINGS_RATE = this.LottoGame.calculateEarningsRate();
    printResult(this.LottoGame.grades, EARNINGS_RATE);
  }
}

module.exports = Controller;
