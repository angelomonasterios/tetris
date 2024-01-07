import {getRandonElement} from "../fugure";
import {initGrid} from "../grid";
import {observerPause} from "../observerPause";
import {handleKeyEvents} from "../handleKeyEvents";
import {drodDowncurrenElement} from "../drodDowncurrenElement";
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

