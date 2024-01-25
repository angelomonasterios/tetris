export function isValidRotation(current: HTMLElement[], newFigures: HTMLElement[]): boolean {
    return newFigures.every(figure => figure !== null && !figure.classList.contains('boxFixed'));
}

function toggleFigureClass(figures: HTMLElement[], type: string, add: boolean) {
    const verb = add ? 'add' : 'remove';
    figures.forEach((figure) => figure.classList[verb](type));
}

function getIdCoordinates(id: string): [number, number] {
    const parts = id.split('_');
    return [parseInt(parts[1]), parseInt(parts[2])];
}

function getFigureById(y: number, x: number) {
    return document.getElementById('col' + '_' + y + '_' + x);
}

function getRotatedLineFigures(nextFigures: any[]): HTMLElement[] {
    return (nextFigures[0].x === nextFigures[1].x)
        ? [1, 0, -1, -2].map(offset => getFigureById(nextFigures[1].y, nextFigures[1].x + offset))
        : [-1, 0, 1, 2].map(offset => getFigureById(nextFigures[1].y + offset, nextFigures[1].x));
}

function getRotatedTFigures(nextFigures: any[]): HTMLElement[] {
    let pivot = {y: nextFigures[1].y, x: nextFigures[1].x};
    return nextFigures.map(figure => {
        const newY = pivot.y + (figure.x - pivot.x);
        const newX = pivot.x - (figure.y - pivot.y);
        return getFigureById(newY, newX);
    });
}

function getRotatedLFigures(nextFigures: any[]): HTMLElement[] {
    let pivot = {y: nextFigures[1].y, x: nextFigures[1].x};
    return nextFigures.map(figure => {
        const newY = pivot.y + (figure.x - pivot.x);
        const newX = pivot.x - (figure.y - pivot.y);
        return getFigureById(newY, newX);
    });
}

function getNewFigureByType(type: string, nextFigures: any[]): HTMLElement[] {
    switch (type) {
        case 'line':
            return getRotatedLineFigures(nextFigures);
        case 't':
            return getRotatedTFigures(nextFigures);
        case 'l':
            return getRotatedLFigures(nextFigures);
        default:
            return nextFigures;
    }
}

export function rotateFigure(figures: HTMLElement[]): HTMLElement[] {
    const type = figures[0].classList[1];
    const nextFigures = figures.map(figure => {
        let [y, x] = getIdCoordinates(figure.id);
        return {y: y, x: x};
    });

    let newFigures: HTMLElement[] = [];

    if (type == 'square') {
        return figures;
    }

    newFigures = getNewFigureByType(type, nextFigures);

    if (!isValidRotation(figures, newFigures)) {
        return figures;
    }

    toggleFigureClass(figures, type, false);
    toggleFigureClass(newFigures, type, true);

    return newFigures;
}