import {testLine} from "./line/line";
import {initGrid} from "../grid";
import {globalVars} from "../globalVars";
import {handleKeyEvents} from "../events/handleKeyEvents";
import {observerPause} from "../events/observerPause";
import {testT} from "./t/t";
import {testL} from "./l/t";
import {removeLinesTest} from "./removeLines/removeLines";
import {gameOver} from "./gameOver";

initGrid(globalVars.sizeGameAreaX, globalVars.sizeGameAreaY);
handleKeyEvents();
observerPause();

let button = document.getElementById('start');

button.addEventListener('click', () => {
    let select = document.getElementById('selectTest') as HTMLSelectElement;

    let value = select.value;
    switch (value) {
        case 'line':
            testLine();
            break;
        case 't':
            testT();
            break;
        case 'l':
            testL();
            break;
        case 'removeLinesTest':
            removeLinesTest();
            break;
        case 'gameOver':
            gameOver();
            break;

    }
});