const IP = "localhost";
const PORT = 50541;

// player's name in initials are provided as a command line argument
const INITIALS = process.argv[2];

// constant for movement and message keys
const keyCommands = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  z: "Say: Hello there!",
  m: "Say: Well done!"
};

module.exports = {
  IP,
  PORT,
  INITIALS,
  keyCommands,
};