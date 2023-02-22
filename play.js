const { connect } = require("./client");

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Handle "ctrl" + "c" input to terminate the game
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }
  };
  stdin.on("data", handleUserInput);

  return stdin;
};

setupInput();