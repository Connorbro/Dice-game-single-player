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
    dice.o.classList = add('show-left')
    dice.position = 'show-left';
}
else if(value==3){
    dice.o.classList = add('show-right')
    dice.position = 'show-right';
}
else if(value==4){
    dice.o.classList = add('show-front')
    dice.position = 'show-front';
}
else if(value==5){
    dice.o.classList = add('show-back')
    dice.position = 'show-back';
}
else if(value==6){
    dice.o.classList = add('show-bottom')
    dice.position = 'show-bottom';
}