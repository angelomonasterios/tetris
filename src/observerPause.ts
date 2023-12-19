import {globalVars} from "./globalVars";


export function observerPause() {
    document.getElementById('pause').addEventListener('click', function () {
        if (globalVars.pause) {
            globalVars.pause = false;
            document.getElementById('pause').innerHTML = 'Pause';
        } else {
            globalVars.pause = true;
            document.getElementById('pause').innerHTML = 'Play';
        }
    });
}