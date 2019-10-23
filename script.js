view.roll.addEventListener('click',()=> Gamepad.turn(), false);
let diceAnimate = dice =>{
    if(dice.position === 'idle'){
        dice.o.classList.remove('idle')
    }
    dice.o.classList.remove('spin');
    void dice.o.offsetWidth;
    dice.o.classList.add('spin')
}
let giveRes = (dice, value) =>{
    dice.o.classList.remove(dice.position);
    void dice.o.offsetWidth;
}
if(value ==1){
    dice.o.classList.add('show-top');
    dice.position = 'show-top';
}
else if(value==2){
    dice.position = add('show-left')
    dice.position = 'show-left';
}
else if(value==3){
    dice.position = add('show-right')
    dice.position = 'show-right';
}