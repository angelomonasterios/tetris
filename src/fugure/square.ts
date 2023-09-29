export function generateSquare(x : number , y : number): HTMLElement[] {
    let square: HTMLElement[] = [];
    let box1 = document.getElementById('col' + '_' + (y) + '_' + x);
    let box2 = document.getElementById('col' + '_' + (y) + '_' + (x + 1));
    let box3 = document.getElementById('col' + '_' + (1 + y) + '_' + (x));
    let box4 = document.getElementById('col' + '_' + (1 + y) + '_' + (x + 1));
    square.push(box1, box2, box3, box4);
    return square;
}

export function paintSquare(square: HTMLElement[]) {
    square.forEach(element => {
        element.classList.add('square');
    });
}