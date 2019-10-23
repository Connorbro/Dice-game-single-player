
// const LOSS = '1';
// const WIN = '';

// let rollingDice = function(){
//     let sides = 6;
//     return Math.floor(sides * Math.random())+1;
// };
// const myView={
//     roll: document.getElementById('roll'),
//     dice: {o: document.querySelector('.dice'), position:initial_Transformation_Position},
//     score: document.querySelector('.score'),
//     updateMaDice: function(results)
//     {
// diceAnimator(this.dice),
// setTimeout(()=>{
//     showResult(this.dice, results[0]);
// })},

// updateScore:function(message) {
//     this.score.textContent = message;
//   },
// };
// const game = {
//     turn: function() {
//       let rollResult = [roll()];
//       let resultSorted = [...rollResult].sort(); 
//       view.updateDice(rollResult);
//       setTimeout(()=>{
//         view.updateScore(this.getScore(resultSorted));
//       }, 1000);
//     },

//     getScore: function(results) {
//     let message = '';
//     if (results.toString() === WIN) {
//       message = `${WIN} You Win!`;
//     } else if (results.toString() === LOSS) {
//       message = `${LOSS} You Lose`;
//     } else if (results[0] === results[1] && results[1] === results[2]) {
//       message = `Trips! ${results[0]}`;
//     } else if (results[0] === results[1]) {
//       message = `You scored: ${results[2]}`;
//     } else if (results[1] === results[2]) {
//       message = `You scored: ${results[0]}`;
//     } else {
//       message = 'Roll again...';
//     }
//     return message;
//     },
// };
// view.roll.addEventListener('click',()=> Gamepad.turn(), false);
// let diceAnimate = dice =>{
//     if(dice.position === 'idle'){
//         dice.o.classList.remove('idle')
//     }
//     dice.o.classList.remove('spin');
//     void dice.o.offsetWidth;
//     dice.o.classList.add('spin')
// }
// let giveRes = (dice) =>{
//     dice.o.classList.remove(dice.position);
//     void dice.o.offsetWidth;
// }
// if(value ==1){
//     dice.o.classList.add('show-top');
//     dice.position = 'show-top';
// }
// else if(value==2){
//     dice.o.classList = add('show-left')
//     dice.position = 'show-left';
// }
// else if(value==3){
//     dice.o.classList = add('show-right')
//     dice.position = 'show-right';
// }
// else if(value==4){
//     dice.o.classList = add('show-front')
//     dice.position = 'show-front';
// }
// else if(value==5){
//     dice.o.classList = add('show-back')
//     dice.position = 'show-back';
// }
// else if(value==6){
//     dice.o.classList = add('show-bottom')
//     dice.position = 'show-bottom';
//}
function random_imglink(){
    var myimages=new Array()
    //specify random images below. You can have as many as you wish
    myimages[1]="dice1.png"
    myimages[2]="dice2.png"
    myimages[3]="dice3.png"
    myimages[4]="dice4.png"
    myimages[5]="dice5.png"
    myimages[6]="dice6.png"
}