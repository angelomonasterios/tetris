export function validRotate(current: HTMLElement[], newElement: HTMLElement[]): boolean {
    if (newElement.length === 0) {
        return false;
    }

    if (newElement[0] === null) {
        return false;
    }

    for (let i = 0; i < newElement.length; i++) {
        if (newElement[i] == null || newElement[i].classList.contains('boxFixed')) {
            return false;
        }
    }

    return true;
}

function dropOldFigure(figures: HTMLElement[], type: string) {
    for (let i = 0; i < figures.length; i++) {
        figures[i].classList.remove(type);

    }
}

function addNewFigure(newElements: HTMLElement[], type: string) {
    for (let i = 0; i < newElements.length; i++) {
        newElements[i].classList.add(type);
    }
}

export function rotateFigure(figures: HTMLElement[]): HTMLElement[] {
    let newElements: HTMLElement[] = [];
    let type = figures[0].classList[1];
    let nextElement = []

    for (let i = 0; i < figures.length; i++) {
        let box = figures[i].id;
        let boxY = parseInt(box.split('_')[1]);
        let boxX = parseInt(box.split('_')[2]);
        nextElement.push({y: boxY + 1, x: boxX});
    }

    if (type === 'line') {
        if (nextElement[0].x === nextElement[1].x) {
            let element1 = document.getElementById('col' + '_' + (nextElement[1].y) + '_' + (nextElement[1].x + 1));
            let element2 = document.getElementById('col' + '_' + (nextElement[1].y) + '_' + (nextElement[1].x));
            let element3 = document.getElementById('col' + '_' + (nextElement[1].y) + '_' + (nextElement[1].x - 1));
            let element4 = document.getElementById('col' + '_' + (nextElement[1].y) + '_' + (nextElement[1].x - 2));
            newElements.push(element1, element2, element3, element4);
        } else {
            let element1 = document.getElementById('col' + '_' + (nextElement[1].y - 1) + '_' + (nextElement[1].x));
            let element2 = document.getElementById('col' + '_' + (nextElement[1].y) + '_' + (nextElement[1].x));
            let element3 = document.getElementById('col' + '_' + (nextElement[1].y + 1) + '_' + (nextElement[1].x));
            let element4 = document.getElementById('col' + '_' + (nextElement[1].y + 2) + '_' + (nextElement[1].x));
            newElements.push(element1, element2, element3, element4);
        }

    } else if (type === 't') {
        if (nextElement[0].y === nextElement[1].y && nextElement[2].y === nextElement[2].y && nextElement[3].x < nextElement[2].x) {
            let element2 = document.getElementById('col' + '_' + (nextElement[1].y) + '_' + (nextElement[1].x));
            let element3 = document.getElementById('col' + '_' + (nextElement[0].y -1) + '_' + (nextElement[2].x -1));
            let element1 = document.getElementById('col' + '_' + (nextElement[0].y) + '_' + (nextElement[0].x));
            let element4 = document.getElementById('col' + '_' + (nextElement[3].y) + '_' + (nextElement[3].x ));
            newElements.push(element1, element2, element3, element4);
        } else if (nextElement[0].y < nextElement[1].y && nextElement[1].y === nextElement[2].y && nextElement[3].x == nextElement[2].x) {
            let element2 = document.getElementById('col' + '_' + (nextElement[1].y) + '_' + (nextElement[1].x));
            let element3 = document.getElementById('col' + '_' + (nextElement[0].y -1) + '_' + (nextElement[2].x -1));
            let element1 = document.getElementById('col' + '_' + (nextElement[0].y) + '_' + (nextElement[0].x));
            let element4 = document.getElementById('col' + '_' + (nextElement[3].y) + '_' + (nextElement[3].x ));
            newElements.push(element1, element2, element3, element4);
        }
    }


    if (!validRotate(figures, newElements)) {
        return figures;
    }

    dropOldFigure(figures, type);
    addNewFigure(newElements, type);

    return newElements;
}

