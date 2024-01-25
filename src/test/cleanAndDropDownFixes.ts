import {getRandonElement} from "../fugure";
import {initGrid} from "../grid";
import {observerPause} from "../events/observerPause";
import {handleKeyEvents} from "../events/handleKeyEvents";
import {drodDowncurrenElement} from "../collisionSystem/drodDowncurrenElement";
import { globalVars } from "../globalVars";

export  function test() {
    initGrid(globalVars.sizeGameAreaX, globalVars.sizeGameAreaY);

    let {elements: currenActiveELement, paint} = getRandonElement();
    globalVars.currenActiveELement = currenActiveELement;

    paint(currenActiveELement);

    setInterval(() => drodDowncurrenElement(), 700);

    handleKeyEvents();

    observerPause();
}

