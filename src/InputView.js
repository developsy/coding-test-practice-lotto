const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  readInputMoney(callBack) {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (userInput) => {
      callBack(userInput);
    });
  },

  readWinningNumbers() {},

  readBonusNumber() {},
};

module.exports = InputView;
