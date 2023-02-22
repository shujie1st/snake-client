const net = require("net");
const { IP, PORT, INITIALS } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // print a message for the player
  // and send name to server
  // when the connection is successfully established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${INITIALS}`);
  });
  
  // handle and print incoming data from server
  conn.on("data", (data) => {
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };