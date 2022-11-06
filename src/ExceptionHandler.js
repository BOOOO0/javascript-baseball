const { USER_INPUT_LENGTH } = require("./Constant");

class ExceptionHandler {
  checkUserInputRedundancy(answer) {
    const checkSet = new Set(answer.split(""));

    if ([...checkSet].length < USER_INPUT_LENGTH) {
      throw new Error();
    }
  }

  checkUserInputLength(answer) {
    if (answer.length !== USER_INPUT_LENGTH) {
      throw new Error();
    }

    return true;
  }

  checkValidInput(answer) {
    if (answer != 1 && answer != 2) throw new Error();
  }
}

module.exports = ExceptionHandler;