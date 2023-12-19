import {figure} from "./index";


export function generateL(x : number , y : number): figure {
    let elements: HTMLElement[] = [];
    // si x = 7 y = 0

    // 0_6
    let box1 = document.getElementById('col' + '_' + (y) + '_' + (x - 1));
    // 0_7
    let box2 = document.getElementById('col' + '_' + (y) + '_' + (x));
    // 0_8
    let box3 = document.getElementById('col' + '_' + (y) + '_' + (x + 1));
    // 1_8
    let box4 = document.getElementById('col' + '_' + (1 + y) + '_' + (x + 1));
    elements.push(box1, box2, box3, box4);

    return {elements, paint}
}

export function paint(square: HTMLElement[]) {
    square.forEach(element => {
        element.classList.add('l');
    });
}