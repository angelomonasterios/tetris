import {getNextElementToPrintDown} from "./getNextElementToPrintDown";
import {newElement} from "./newElement";

export function down(collectNewElements: newElement[], currenActiveELement: HTMLElement[]): newElement[] {
    for (let i = 0; i < currenActiveELement.length; i++) {
        let element = currenActiveELement[i];
        let {type, nextElement} = getNextElementToPrintDown(element);

        let newelement: newElement = [document.getElementById(nextElement), type];
        collectNewElements.push(newelement);
        element.classList.remove(type);
    }
    return collectNewElements;
}