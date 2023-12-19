import {observeRows} from "./observeRows";
import {newElement} from "./movements/down/newElement";
import {down} from "./movements/down/down";
import {getRandonElement} from "./fugure";
import {globalVars} from "./globalVars";

export function drodDowncurrenElement() {
    if (globalVars.pause) {
        return;
    }

    observeRows();

    let collectNewElements: newElement[] = [];
    collectNewElements = down(collectNewElements, globalVars.currenActiveELement);

    if (collectNewElements.some(element => element[0] == null) ||
        collectNewElements.some(element => element[0].classList.contains('boxFixed'))
    ) {
        globalVars.currenActiveELement.forEach(element => {
            element.classList.add('boxFixed');
        });

        let {elements: element, paint} = getRandonElement();
        globalVars.currenActiveELement = element;
        paint(element);

        return;
    }

    globalVars.currenActiveELement = collectNewElements.map(element => element[0]);

    for (let i = 0; i < collectNewElements.length; i++) {
        let element = collectNewElements[i];
        element[0].classList.add(element[1]);
    }
}