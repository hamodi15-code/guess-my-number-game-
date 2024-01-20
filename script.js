'use script';

let secretNumber=Math.trunc(Math.random()*20)+1;
let score =20;
let highScore =0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

console.log(secretNumber);
document.querySelector('.check').addEventListener('click',function(){
   const guess=Number(document.querySelector('.guess').value);

   if(!guess)
   {
     displayMessage('⛔️ No message');
   }
   // when the player wins
   else if(guess===secretNumber)
  {
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent=secretNumber;

    if(score>highScore)
    {
      highScore=score;
      document.querySelector('.highscore').textContent=highScore;
    }

  }
   else if(guess!==secretNumber){
     if(score>1) {
       displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
       score--;
       document.querySelector('.score').textContent = score;
     }
     else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
   }
})
document.querySelector('.again').addEventListener('click',function(){

document.querySelector('.number').textContent='?';
document.querySelector('.score').textContent = '20';
document.querySelector('.highscore').textContent='0';
document.querySelector('.guess').value=null;
document.querySelector('.message').textContent='Start guessing....';
document.querySelector('body').style.backgroundColor='#222';
document.querySelector('.number').style.width = '15rem';
secretNumber=Math.trunc(Math.random()*20)+1;
score=20;
highScore=0;
console.log('try');



})
