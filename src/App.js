const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(computerRandomNumber = null, userAnswer = null) {
    this.computerRandomNumber = computerRandomNumber;
    this.userAnswer = userAnswer;
  }
  play() {
    this.greeting();
    this.computerRandomNumber = this.makeRandomNumberArray();
    this.userAnswer = this.inputUserAnswer();
    this.parseUserAnswertoString();
  }

  greeting() {
    console.log("숫자 야구 게임을 시작합니다.");
  }

  inputUserAnswer() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.userAnswer = answer;
    });
  }

  makeRandomNumberArray() {
    this.computerRandomNumber = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      9,
      3
    );
  }

  parseUserAnswertoString() {
    this.userAnswer = String(this.userAnswer);
  }

  checkBallStrike(computerRandomNumber, userAnswer) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < input.length; i++) {
      if (
        computerRandomNumber.includes(parseInt(userAnswer[i])) &&
        computerRandomNumber[i] == userAnswer[i]
      ) {
        strike++;
      } else if (
        computerRandomNumber.includes(parseInt(userAnswer[i])) &&
        computerRandomNumber[i] != userAnswer[i]
      ) {
        ball++;
      }
    }
    return [ball, strike];
  }
}

const app = new App();
app.play();

module.exports = App;
