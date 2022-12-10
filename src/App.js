const Controller = require("./Controller");

class App {
  play() {
    const GAME = new Controller();
    GAME.start();
  }
}

const aa = new App();
aa.play();
module.exports = App;
