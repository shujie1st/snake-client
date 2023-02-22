const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGTH_KEY, keyForMessages } = require("./constants");

// stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // handle user input from keyboard
  // use "ctrl" + "c" to terminate the game
  // send movement command by pressing pre-defined keys
  // use keyboard input to send messages to server
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    } else if (key === MOVE_UP_KEY) {
      connection.write('Move: up');
    } else if (key === MOVE_LEFT_KEY) {
      connection.write('Move: left');
    } else if (key === MOVE_DOWN_KEY) {
      connection.write('Move: down');
    } else if (key === MOVE_RIGTH_KEY) {
      connection.write('Move: right');
    } else if (keyForMessages[key]) {
      connection.write(keyForMessages[key]);
    }
  };
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };