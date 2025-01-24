# Rock Paper Scissors Game

This is a simple Rock Paper Scissors game implemented in JavaScript with local storage to keep track of the score.

## Features

- Tracks wins, losses, and ties using `localStorage`.
- Auto-play mode with interval control.
- Play using keyboard shortcuts:  
  - Press `R` for Rock  
  - Press `P` for Paper  
  - Press `S` for Scissors  
- Displays game results and updates scores dynamically.

## How It Works

1. **Local Storage Handling:**  
   - The game retrieves the score from `localStorage` and initializes it if not present.
   - Updates the stored values after each round.

2. **Game Logic:**  
   - The computer randomly selects between Rock, Paper, or Scissors.
   - The player's move is compared to determine the result.

3. **Auto-Play Mode:**  
   - Automatically plays the game every second when activated.
   - Toggle by calling the `autoplay()` function.

## Running the Game

1. Open `index.html` in a web browser.
2. Play manually using the buttons or keyboard shortcuts.
3. Check the updated score displayed on the page.

## Key Functions

- `playergame(move)`: Handles the player's move and updates the score.
- `updatesocre()`: Updates the displayed score.
- `pickcompmove()`: Randomly selects the computer's move.
- `autoplay()`: Toggles automatic gameplay.

## License

This project is open-source and available for use under the MIT License.
