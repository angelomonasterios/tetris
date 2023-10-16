import {figure} from "./index";

export function generateLine(x, y) : figure {
    let line = [];
    let box1 = document.getElementById('col' + '_' + (y) + '_' + x);
    let box2 = document.getElementById('col' + '_' + (y + 1) + '_' + x);
    let box3 = document.getElementById('col' + '_' + (y + 2) + '_' + x);
    let box4 = document.getElementById('col' + '_' + (y + 3) + '_' + x);
    line.push(box1, box2, box3, box4);
    return {elements: line, paint: paintLine };
}

export function paintLine(line: HTMLElement[]) {
    line.forEach(element => {
        element.classList.add('line');
    });
}