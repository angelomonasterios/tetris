import {moveLeft} from "../movements/left/moveLeft";
import {moveRight} from "../movements/right/moveRigth";
import {rotateFigure} from "../movements/rotate";
import {drodDowncurrenElement} from "../collisionSystem/drodDowncurrenElement";
import {globalVars} from "../globalVars";

export function handleKeyEvents(): void {
    document.addEventListener('keydown', function (event) {
        if (globalVars.pause || globalVars.gameOver) {
            return;
        }

        if (event.code === 'ArrowLeft') {
            globalVars.currenActiveELement = moveLeft(globalVars.currenActiveELement);
        } else if (event.code === 'ArrowRight') {
            globalVars.currenActiveELement = moveRight(globalVars.currenActiveELement);
        } else if (event.code === 'ArrowDown') {
            drodDowncurrenElement();
        } else if (event.code === 'Space') {
            if (globalVars.currenActiveELement[0].classList.contains('boxFixed')) {
                return globalVars.currenActiveELement;
            }
            globalVars.currenActiveELement = rotateFigure(globalVars.currenActiveELement);
        }
    });
}