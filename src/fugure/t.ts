import {figure} from "./index";


export function generateT(x: number, y: number): figure {
    let elements: HTMLElement[] = [];

    let box1 = document.getElementById('col' + '_' + (y) + '_' + (x - 1));
    let box2 = document.getElementById('col' + '_' + (y) + '_' + (x));
    let box3 = document.getElementById('col' + '_' + (y) + '_' + (x + 1));
    let box4 = document.getElementById('col' + '_' + (1 + y) + '_' + (x));
    elements.push(box1, box2, box3, box4);

    return {elements, paint}
}

export function paint(square: HTMLElement[]) {
    square.forEach(element => {
        element.classList.add('t');
    });
}