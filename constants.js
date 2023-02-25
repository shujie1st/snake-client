const IP = "localhost";
const PORT = 50541;

// player's name in initials are provided as a command line argument
const INITIALS = process.argv[2];

// add movement keys to constants
const MOVE_UP_KEY = "w";
const MOVE_LEFT_KEY = "a";
const MOVE_DOWN_KEY = "s";
const MOVE_RIGTH_KEY = "d";

const keyForMessages = {
  z: "Say: Hello there!",
  m: "Say: Well done!"
};

module.exports = {
  IP,
  PORT,
  INITIALS,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGTH_KEY,
  keyForMessages
};