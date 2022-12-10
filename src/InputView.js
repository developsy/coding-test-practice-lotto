const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  readInputMoney(callBack) {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (userInput) => {
      callBack(parseInt(userInput));
    });
  },

  readWinningNumbers(callBack) {
    MissionUtils.Console.readLine("\n당첨 번호를 입력해 주세요.\n", (userInput) => {
      callBack(userInput);
    });
  },

  readBonusNumber(callBack) {
    MissionUtils.Console.readLine("\n보너스 번호를 입력해 주세요.\n", (userInput) => {
      callBack(userInput);
    });
  },
};

module.exports = InputView;
