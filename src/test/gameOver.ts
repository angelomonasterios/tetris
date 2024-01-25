import {drawnLines} from "./drawnLines";
import {globalVars} from "../globalVars";

export const gameOver = () => {
    for (let i = globalVars.sizeGameAreaY - 1 ; i > 1; i--) {
        drawnLines(i, 0)
    }
}