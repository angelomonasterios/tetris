import {getRandonElement} from "./fugure";
import {initGrid} from "./grid";
import {down} from "./movements/down/down";
import {newElement} from "./movements/down/newElement";
import {moveLeft} from "./movements/left/moveLeft";
import {moveRight} from "./movements/right/moveRigth";
import {rotateFigure} from "./movements/rotate";

export const sizeGameAreaX = 15;
export const sizeGameAreaY = 20;

initGrid(sizeGameAreaX, sizeGameAreaY);

let {elements: currenActiveELement, paint} = getRandonElement();

paint(currenActiveELement);

function drodDowncurrenElement() {
    let collectNewElements: newElement[] = [];
    collectNewElements = down(collectNewElements, currenActiveELement);

    if (collectNewElements.some(element => element[0] == null) ||
        collectNewElements.some(element => element[0].classList.contains('boxFixed'))
    ) {
        currenActiveELement.forEach(element => {
            element.classList.add('boxFixed');
        });

        let {elements: element, paint} = getRandonElement();
        currenActiveELement = element;
        paint(element);

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
    if (event.code === 'ArrowLeft') {
        currenActiveELement = moveLeft(currenActiveELement);
    } else if (event.code === 'ArrowRight') {
        currenActiveELement = moveRight(currenActiveELement);
    } else if (event.code === 'ArrowDown') {
        drodDowncurrenElement();
    } else if (event.code === 'Space') {
        if (currenActiveELement[0].classList.contains('boxFixed')) {
            return currenActiveELement;
        }
       currenActiveELement =  rotateFigure(currenActiveELement);
    }
});
