class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error();
    }
  }

  // TODO: 추가 기능 구현
  get winningNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
