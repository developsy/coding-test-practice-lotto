const MissionUtils = require("@woowacourse/mission-utils");

const LottoGenerator = {
  generateLotto() {
    const LOTTO_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return LOTTO_NUMBER;
  },
};

module.exports = LottoGenerator;
