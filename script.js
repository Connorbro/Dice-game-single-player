let total = 0;

function randomImg1() {
    let myImages1 = new Array();
    myImages1[0] = "dice1.png";
    myImages1[1] = "dice2.png";
    myImages1[2] = "dice3.png";
    myImages1[3] = "dice4.png";
    myImages1[4] = "dice5.png";
    myImages1[5] = "dice6.png";
    console.log(myImages1)

    let rnd = Math.ceil(Math.random() * myImages1.length);
    let image = document.getElementById("imageid")
    // let button = document.getElementsByClassName("glow-on-hover")
    total = total+ rnd
    document.getElementById("numbers").innerHTML = `Random = ${rnd} <br> Total = ${total}<br>`
    if(total >= 20){
        document.getElementById("numbers").innerHTML += `you win`
        total=0
            
        }
    
    else {
        if (rnd == 1) {
            image.src = "dice1.png"
            total = 0
            document.getElementById("numbers").innerHTML += `you lose`
        }
        if (rnd == 2) {
            image.src = "dice2.png"
        }
        if (rnd == 3) {
            image.src = "dice3.png"
        }
        if (rnd == 4) {
            image.src = "dice4.png"
        }
        if (rnd == 5) {
            image.src = "dice5.png"
        }
        if (rnd == 6) {
            image.src = "dice6.png"
        }
    }
}

