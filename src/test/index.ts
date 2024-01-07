import {testLine} from "./line/line";
import {initGrid} from "../grid";
import {globalVars} from "../globalVars";
import {handleKeyEvents} from "../handleKeyEvents";
import {observerPause} from "../observerPause";
import {testT} from "./t/t";
import {testL} from "./l/t";

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
    }
});