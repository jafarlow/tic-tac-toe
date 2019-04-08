Tic-Tac-Toe project!

Live page: https://jafarlow.github.io/tic-tac-toe/

This is built with HTML, CSS, and JavaScript.

PLANNING
Basically I drew up this wireframe (https://imgur.com/5IgzliI) and thought about
the individual pieces required to make this work. I started with a skeleton HTML
and CSS so I could determine if my JavaScript was performing the action
intended. I also split the code into two distinct areas -- the user
authorization and the game itself.

USER STORIES
Here's what I came up with prior to project start. Some of this may have changed
as development progressed, and some of this sets a stretch goal for future
modifications.
As a user, I want to login so I can keep track of my win/loss/draw record.
As a user, I want to outsmart my opponent.
As a user, I want to play a quick game to kill time without much effort.
As a user, I want to win as much as possible to feel good about my time wasting.

DEVELOPMENT
After the planning stage, I followed the schedule outlined for us pretty closely,
even though I didn't peruse it until I was about half-way done. It just made
sense to get the game working first, and then setup user creation. Without the
user creation (and login/change password) working then I would not be able to
store the changes to the game.

I pulled in a Bootstrap modal for registration and changing password so those
input fields would only display when clicked, and would display within the
window and not with navigating to a separate screen.

The largest chunk of time was dedicated to converting the working game into an
object stored and tagged to each newly generated game id. Once this was done,
all the other pieces fell together quite nicely and I could build out the final
piece of my app -- buttons for starting the first game from login and for a new
game when one has been completed.

I added in a GET button so the logged-in user could learn how many games they
have played.

Somewhere along the way I coded in the CSS and the JavaScript to show and hide
various elements depending on the current state of the game and of the user.
This prevents the screen from being overly cluttered. It's a simple app which
benefits from a simple layout.


TROUBLESHOOTING
I took several approaches to troubleshooting. The first thing I did was to
check I typed in everything properly. Syntax and spelling errors could be
troublesome, so I always went through that to be certain I wasn't missing
something obvious.

If that wasn't the root of an issue, I would try moving the code around to
different places to make certain I'm calling and creating functions in the
appropriate places. Console logs were incredibly helpful here.

If I got well and truly stuck, I would open an issue for the instructors to
review and assist. On numerous occasions, the act of typing up a well-formed
question forced me to reson from a different perspective and led me to try new
ideas without having to actually submit the issue. Other times, the
instructors came to my aid to point me in the right direction.

I also utilized slack to confer with my classmates, who were instrumental in
getting the api for PATCH working properly.

FUTURE
There are several things I would like for the future of this application.
1) I would like to expand the Get Games button to return not just the number of
games played, but also the win/loss/draw record associated with the current
user.
2) I would like to add a "style picker" for the user to choose and store to
their profile. I would ideally code in 4-8 styles for color palette and tile
markers. Perhaps icons in place of simple X or O?
3) I would like to adjust the buttons and modals to have a matching theme. Right
now when displayed side-by-side, they stand out as very stylistically different
things.
4) This site is not responsive. I would like to change that in the future so it
displays well on multiple devices.
