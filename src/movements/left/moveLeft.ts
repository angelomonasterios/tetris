import { newElementLeft } from "./newElementLeft";

export function moveLeft(currentActiveElements: HTMLElement[]) {
    const newElements = getNewElements(currentActiveElements);

    if (shouldAddClass(newElements)) {
        addClassToElements(currentActiveElements, newElements[0][1]);
        return currentActiveElements;
    }

    currentActiveElements = getSuggestedElements(newElements);
    addClassToElements(currentActiveElements, newElements[0][1]);

    return currentActiveElements;
}

function getNewElements(currentActiveElements: HTMLElement[]) {
    return newElementLeft([], currentActiveElements);
}

function shouldAddClass(newElements: any[]) {
    const suggestedElements = newElements.map(element => element[0]);
    return suggestedElements.some(element => element == null || element.classList.contains('boxFixed'));
}

function addClassToElements(elements: HTMLElement[], className: string) {
    elements.forEach(element => {
        element.classList.add(className);
    });
}

function getSuggestedElements(newElements: any[]) {
    return newElements.map(element => element[0]);
}
