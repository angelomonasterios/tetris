import {newElement} from "../down/newElement";

export function getNextElementToPrintRight(element: HTMLElement) {
    let box = element.id;
    let type = element.classList[1];
    let boxX = parseInt(box.split('_')[2]);
    let boxY = parseInt(box.split('_')[1]);
    let nextElement = 'col' + '_' + boxY + '_' + (boxX + 1);
    return { type, nextElement };
}

export function newElementRight(collectNewElements: newElement[], currenActiveELement: HTMLElement[]): newElement[] {
    for (let i = 0; i < currenActiveELement.length; i++) {
        let element = currenActiveELement[i];
        let { type, nextElement } = getNextElementToPrintRight(element);

        let newelement: newElement = [document.getElementById(nextElement), type];
        collectNewElements.push(newelement);

        element.classList.remove(type);
    }
    return collectNewElements;
}