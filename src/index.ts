import {getRandonElement, paintSquare} from "./fugure";
import {initGrid} from "./grid";

export const sizeGameAreaX = 15;
export const sizeGameAreaY = 20;

initGrid(sizeGameAreaX, sizeGameAreaY);

let currenActiveELement = getRandonElement();

paintSquare(currenActiveELement);

let colition = 0;

function drodDowncurrenElement() {
    let collectNewElements = [];
    for (let i = 0; i < currenActiveELement.length; i++) {
        let element = currenActiveELement[i];
        let box = element.id
        let type = element.classList[1];
        let boxX = parseInt(box.split('_')[2]);
        let boxY = parseInt(box.split('_')[1]);
        let nextElement = 'col' + '_' + (boxY + 1) + '_' + boxX;
        let newelement = [document.getElementById(nextElement), type];
        collectNewElements.push(newelement);
        element.classList.remove('square');
    }

    if (collectNewElements.some(element => element[0] == null) ||
        collectNewElements.some(element => element[0].classList.contains('boxFixed'))
    ) {
        if (collectNewElements.some(element => element[0].id.split('_')[1] === 0)) {
            alert('game over');
        }
        currenActiveELement.forEach(element => {
            element.classList.add('boxFixed');
        });

        currenActiveELement = getRandonElement();
        paintSquare(currenActiveELement);

        return;
    }

    currenActiveELement = collectNewElements.map(element => element[0]);

    for (let i = 0; i < collectNewElements.length; i++) {
        let element = collectNewElements[i];
        element[0].classList.add(element[1]);
    }
}

setInterval(drodDowncurrenElement, 700);


document.addEventListener('keydown', function (event) {
    if (event.key === 'keyLeft') {
        console.log('left');
        // mover a la izquierda

    }

});
