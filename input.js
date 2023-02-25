const { keyCommands } = require("./constants");

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
  // send command to server by pressing pre-defined keys
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    } else if (keyCommands[key])  {
      connection.write(keyCommands[key]);
    } 
  };
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };