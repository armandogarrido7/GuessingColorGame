function generateColor() {
    return "(" + Math.round(Math.random() * 255) + ", " + Math.round(Math.random() * 255) + ", " + Math.round(Math.random() * 255) + ")"
}
function checkColor(e) {
    if (e.target.style.backgroundColor == ('rgb' + my_colour)) {
        h3 = document.getElementsByTagName('h3')[0];
        h3.style.color = 'lime';
        h3.innerHTML = 'Has Ganado :)'
        for (div of document.getElementsByTagName('div')) {
            div.removeEventListener('click', checkColor)
        }
    } else {
        lifes--;
        imgs = document.getElementsByTagName('img');
        if (lifes == 2)
            imgs[0].src = './img/heart_dead.png';
        else if (lifes== 1)
            imgs[1].src = './img/heart_dead.png';
        else{
            imgs[2].src = './img/heart_dead.png';
            h3 = document.getElementsByTagName('h3')[0]
            h3.style.color = 'red';
            h3.innerHTML = 'Has Perdido :(';
            for (div of document.getElementsByTagName('div')) {
                div.removeEventListener('click', checkColor)
            }
        } 
    }

}

function newGame() {
    lifes = 3;
    for (img of document.getElementsByTagName('img')){
        img.src =  './img/heart.png';
    }
    h3 = document.getElementsByTagName('h3')[0];
    h3.innerHTML = '';
    h1 = document.getElementsByTagName('h1')[0];
    my_colour = generateColor();
    h1.innerText = 'RGB' + my_colour;
    divs = document.getElementsByTagName('div');
    num = Math.floor(Math.random() * divs.length)
    divs[num].style.backgroundColor = "rgb" + my_colour;
    for (div of divs) {
        div.addEventListener('click', checkColor)
        if (div.style.backgroundColor != ('rgb' + my_colour)) {
            div.style.backgroundColor = "rgb" + generateColor();
        }
    }
}

window.onload = () => {
    lifes = 3;
    newgame = document.getElementsByTagName('h2')[2]
    newgame.addEventListener('click', newGame)
    newGame();
}