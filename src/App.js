const Controller = require("./Controller");

class App {
  play() {
    const GAME = new Controller();
    GAME.start();
  }
}

module.exports = App;
