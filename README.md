## Table of contents
* [General info](#general-info)
* [Features](#Features)
* [Technologies](#technologies)
* [Status](#status)
* [Setup](#setup)

## General info
At the beginning, this application was created to learn front-end recruitment questions, then it was extended to learn English.
thanks to this application you will remember the most important front-end topics.

## Features
* Learn front-end topics by learning questions - To start learning, click on the navigation hidden under the hamburger menu in the upper left corner and then press "recruitment questions".
* category selection - on the left there is a column with categories, To switch between categories, left click on the title, in the middle there will be questions and an answer to them with arrows allowing you to change the questions.
* below the question container, several icons will appear which, when clicked, trigger specific functions
  - random question - containing a dice icon, after clicking, it will generate a random question for the category selected by us, this function is also available       with hotkey "1".
  - random question loop - the second icon with an arrow sign, after clicking, it randomizes the question every five seconds.
  - play music icon - the next three buttons allow you to listen to music while learning, the first and third buttons are used to change to the previous and next       music track, the button in the middle with the note icon is used to start and pause the music.
  - hearth icon - this function adds a question to the favorites list, this feature is under development at the moment, At the moment, when hovering over, the        	  function shows a tooltip that displays "You need to be login".
  - disable answers -  the function disables answers to questions.
* Learn english IT words - to go to this section go to navigation by pressing hamburger menu and select "Angielski"
* the English section is divided into four categories:
  - describe yourself - this function randomizes sentences in English from the board.
  - learning words - displays words in English with their translation into Polish. After the user has gone through the ten questions, a modal window will appear     	 prompting the user to repeat the words. In the future, after clicking "yes", a test will appear to check the user's knowledge.
  - industry dictionary - this feature is under development, this function will connect to the dictionary api and display the words with their translation.
  - flashcards - just flashcards, after clicking on the selected flashcard, it shows the answer to the question. Contains a randomizing function.


## Technologies
Project is created with:
* Vue 2.6.14
* vuetify ^2.6.1
* vue-router ^3.5.3
* vuex ^3.6.2
* axios ^0.24.0

## Status
working on
	
## Setup
To run this project, you need to clone this project and install it locally using npm:

```
$ cd frontEndLearning
$ npm install
$ npm run serve
```

