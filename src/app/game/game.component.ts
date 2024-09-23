import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  words:string[] = ["html", "css", "bootstrap", "javascript", "Reactjs", "Angularjs", "pythan"];
  selectWords:string = '';
  scrambleWords:string = '';
  userInput:string = "";
  targetNumber: number = 0;
  userGuess: number | null = null;
  attempts: number = 0;
  successMessage:string = "";
  successMessageNumber:string = "";
  errorMessage:string = "";
  message: string = '';
  coins: number = 0;

  constructor(){
    this.newGame();
    this.numberGame();
  }
  newGame(){
    this.selectWords = this.words[Math.floor(Math.random()*this.words.length-1)];
    this.scrambleWords = this.shuffleWord(this.selectWords);
    this.userInput = '';  
    this.successMessage = '';
    this.errorMessage = '';
  }

  shuffleWord(word: string): string {
  word= word.split('').sort(() => Math.random() - 0.5).join('');
   return word;
  }
  checkGuess() {
    if (this.userInput.toLowerCase() === this.selectWords) {
      this.successMessage = 'Correct! Starting a new game...';
      this.coins++; // Increment coins for a correct guess
      setTimeout(() => this.newGame(), 2000);
    } else {
      this.errorMessage = 'Try again!';
      setTimeout(() => this.newGame(), 2000);
    }
  }
  numberGame(){
    this.targetNumber = Math.floor(Math.random() * 100) + 1;
    console.log(this.targetNumber);
    this.attempts = 0;
    this.message = 'Guess a number between 1 and 100';
  }
  checkGuessNumber() {
    this.attempts++;
    if (this.userGuess === this.targetNumber) {
      this.successMessageNumber = `Correct! You guessed it in ${this.attempts} attempts. Starting a new game...`;
      setTimeout(() => {
      this.numberGame();
      this.successMessageNumber=""
    }, 2000);
    }else if(this.userGuess != null && this.userGuess < 0){
      this.message = 'only positive numbers';  
    } 
     else if (this.userGuess != null && this.userGuess < this.targetNumber) {
      this.message = 'Too low! Try again.';
    }
    else {
      this.message = 'Too high! Try again.';
    }
  }

}
