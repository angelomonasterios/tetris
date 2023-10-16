export function getNextElementToPrintDown(element: HTMLElement) {
    let box = element.id
    let type = element.classList[1];
    let boxX = parseInt(box.split('_')[2]);
    let boxY = parseInt(box.split('_')[1]);
    let nextElement = 'col' + '_' + (boxY + 1) + '_' + boxX;
    return {type, nextElement};
}