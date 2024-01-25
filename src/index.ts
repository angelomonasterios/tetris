import {getRandonElement} from "./fugure";
import {initGrid} from "./grid";
import {observerPause} from "./events/observerPause";
import {handleKeyEvents} from "./events/handleKeyEvents";
import {drodDowncurrenElement} from "./collisionSystem/drodDowncurrenElement";
import {globalVars} from "./globalVars";
import {restartButton} from "./events/restartButton";
import {sumeScore} from "./scoreSystem";

initGrid(globalVars.sizeGameAreaX, globalVars.sizeGameAreaY);

export const scoreEvent = new Event('score');

let {elements: currenActiveELement, paint} = getRandonElement();
globalVars.currenActiveELement = currenActiveELement;

paint(currenActiveELement);

let intervalId: any = null;

export function startInterval() {
    if (intervalId != null) {
        clearInterval(intervalId);
    }

    intervalId = setInterval(() => drodDowncurrenElement(), globalVars.speed);
}

function observeScore() {
    document.addEventListener(scoreEvent.type, (e) => {
        sumeScore();
        startInterval();
    });
}

handleKeyEvents();
observerPause();
restartButton();
observeScore();
startInterval();