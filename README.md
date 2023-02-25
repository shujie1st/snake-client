# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here.

## Purpose
This project was created by Shujie Ma as part of the learnings at Lighthouse Labs. 

## Final Product

!["Project screenshot"](/snake_client_01.png)
!["Project screenshot"](/snake_client_02.png)


## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js [player name]` command.(`[player name]` can be any three alpha-numeric characters, e.g., `SNK` )
- Control the movement of the snake by using the following keys:
  - `"w"`: move up
  - `"a"`: move left
  - `"s"`: move down
  - `"d"`: move right
- Send canned messages to server to display on the game screen by using the following keys:
  - `"z"`: "Hello there!"
  - `"m"`: "Well done!"
- Use `"ctrl"` + `"c"` to terminate the game