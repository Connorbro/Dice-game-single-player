view.roll.addEventListener('click',()=> Gamepad.turn(), false);
let diceAnimate = dice =>{
    if(dice.position === 'idle'){
        dice.o.classList.remove('idle')
    }
    dice.o.classList.remove('spin');
    void dice.o.offsetWidth;
    dice.o.classList.add('spin')

}
