import {globalVars} from "../globalVars";

export const drawnLines = (rowIndex: number, adjustment: number) => {
    const rowChildren = document.getElementsByClassName('row')[rowIndex].childNodes;
    const midPoint = Math.round(globalVars.sizeGameAreaX / 2);

    rowChildren.forEach((x: any, key: number) => {
        if (key <= (midPoint - adjustment) || (midPoint + adjustment) <= key) {
            x["classList"].add('boxFixed');
        }
    });
}