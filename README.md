# Tower-of-Hanoi
This Project is a game I have created in javascript
# Explanation
The user have three discs on the left line!
He/She has to place all the discs one by one to the 3rd line keeping the same order of discs as on the 1st line.
He has a limited number of moves given to the top right corner of the screen.
If the user tries to disobey the rules then the game pops up an alert upon specific broken rule!
# Explanation to Programmers
The script is given in the repository named "main.js"!
At the start of the game, there are three divs in the 1st line having ids '1','2','3' respectively!
In the Start of the Javascript, the script start initializing Variables
First it takes three arrays to take care of the flow of the discs throughout the game!
Then it gets a element as specified in the HTML having ID "numberofmovesentry" to show the remaining moves!
Then it takes all the place buttons and discs by ID
Then makes a boolean variable named selectstate to specify that whether the disc is selected or not!
Then it makes a null variable named selecteddisc!
And then makes two functions to handle events
