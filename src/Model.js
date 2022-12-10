class Model {
  #lottoNumbers = [];

  issueLotto(money) {
    const TOTAL_LOTTO_GAMES = money % 1000;
    for (let count = 0; count < TOTAL_LOTTO_GAMES; count++) {
      this.#lottoNumbers.push(generateLotto(money));
    }
  }
}

module.exports = Model;
