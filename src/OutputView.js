const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printIssuedLottos(gameCount, lottoArray) {
    MissionUtils.Console.print("");
    MissionUtils.Console.print(`${gameCount}개를 구매했습니다.`);
    for (const lotto of lottoArray) {
      MissionUtils.Console.print("[" + lotto.join(", ") + "]");
    }
  },

  printResult(grades, earningsRate) {
    MissionUtils.Console.print("\n당첨 통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${grades["5등"]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${grades["4등"]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${grades["3등"]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${grades["2등"]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${grades["1등"]}개`);
    MissionUtils.Console.print(`총 수익률은 ${earningsRate}%입니다.`);
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
