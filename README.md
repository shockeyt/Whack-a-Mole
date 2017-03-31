# Whack-a-Mole

# [Link to my Trello](https://trello.com/b/MW79Dnpm/project-1)

![](wireframe.jpg)

# Instructions

Player 1 hits the GO button to start the round.  Each round has 30 seconds on the clock.  When the clock stops, the round is over.  Player 2 hits GO to start round 2.  After both rounds are completed, a winning score will be shown.
Whack-a-mole can be reset using the reset button at the end of gameplay.

Scoring:
A recorded 'hit' on a mole removes it from the board and scores a point for the current player.  After 2 rounds, the player with the most points wins.  There is also a tie possibility.



# Monday

Started on the building the basic boilerplate of the game.  I want to build a table for the grid that the 'holes' will be on since a real whack a mole game is similar to a grid.  This time I'm building a td field for the cells instead of a th field (did that on tic-tac-toe).

Building a test div to append to a td cell in the table.  Successful.  Next, I'm working on removing the div with a click.  Successful.

Goals for today: getting divs to appear randomly in table.  I set each td with an ID number 1-25 so I could generate a Math.random generator.  After getting the generator to spit out numbers, I had to String the numbers with an id to make them usable for my grid.  

Challenge: I've got the moles to appear randomly with a SetInterval function that works every 3 seconds.  However, they keep generating without removing themselves.  I need to figure out how to remove them automatically if I don't click on them.

Built a go button that starts the whole game.  Every function runs from the go event listener.

# Tuesday

Made an input field that records the clicks on the mole event listener.  Those clicks are parsed into a string.  Still stuck on how to remove moles if not clicked.

Found the setTimeout function that allows for the moles to disappear if not clicked.  I have that running every 2 seconds.  Also changed my divs to actual 'mole' pngs and added some styling for gameboard and holes.  

Challenge: trying to setup a simple countdown clock (timer).  The main sites I'm looking at are too complicated and involve dates.  Talked with Troy on how he built a simple countdown clock.  Have that running now, but it doesn't affect the game so far.

Did some CSS stying for the go button and h1 title.

# Wednesday

Having issues getting the timer to stop the setInterval after the clock runs out.  My only solution so far is building a stop button that clears the interval.  Talked it out with Bob and he suggested adding a boolean variable that switches to false when the clear interval is needed.  I added the variable within the timer functions and that was successful.  

Challenge: Trying to input the score from my click counter into a div for a player.  Created 2 player divs and now have innerText putting the scores inside.

Challenge: Figuring out a way to have 2 players.  I could repeat all the functions for a player 2 but that wouldn't be DRY.  Also investigated using session storage to track the player's scores.  Ended up using the strategy I used in tic-tac-toe where there is a currentplayer variable.  After setting the current player's variable to 1, I used if/else statements to switch players after the timer hits zero.

Got the timeclock to reset to 30 seconds after each round.

Challenge:  Winner conditions!!  Whatever I do, my condition function doesn't work.  I've tried parsing the number I get from the click counter again, but it always ends up as a string.  Using dev tools, the strings don't give me the correct boolean returns when I compare them.  Tried comparing using .innerHTML, .innerText, and .textContent and none of these are working.  

Solution:  After talking with Alexi, I created player variables that were set to 0.  I removed the input parse logic and instead added simple ++ counters for the player variables.  This kept the players' values as numbers not strings.  NOW my check winner function works.

Challenge: Player 2 round runs twice as fast as first round.  I've been trying to find a way to clear the timeout function to no avail.  After talking with Stefan, I realized that it was the setInterval function that wasn't being cleared.  After declaring a variable for it, I was able to clearInterval in the timezero function.

Game is now fully functional.

# Thursday

Working on styling today.

Built div boxes that display messages when rounds are over and winning conditions are found instead of alert messages.  Each button has an ok button that removes the div.

The winning divs have 3 possibilities that show when player 1, player 2, or draws occur.  I added a reset button on the winner div to reset the game.

Challenge: winning div shows up simultaneously with round 2 div, hiding it.  Need to find a way to delay the winning div.

Solution: created a settimeout function on the winning div so it fires 4 seconds after the 'game over' div shows up.

Working on making moles animate.  Used @keyframes to animate the moles 'popping up' from the holes with opacity changes.  

Have made the cursor change into a png mallet when inside the table.  Using the CSS property :active, I have the mallet move down to 'smash' the moles when I click.

Changed the reset button to a larger size and color to differentiate it from the other buttons.

Centered the moles in the holes so they look more like they're actually coming out of them.  Also sped up the timing to make the game harder.

SOUNDS!!  Added sounds for hitting a mole, timer, go button, round messages, and winner message.

Added an explosion animation when moles get hit.

# Friday

Organized and commented html, CSS, and JS pages for better reading.

Changed the mole picture to an 8-bit mole.  Alex helped me remove the background layer to make it a transparent png.

