export function initGrid(sizeGameAreaX: number, sizeGameAreaY: number) {
    let gameArea = document.createElement('div');
    gameArea.classList.add('container');
    for (let x = 0; x < sizeGameAreaY; x++) {
        let divRow = document.createElement('div');
        divRow.classList.add('row');
        divRow.id = 'row' + x;
        for (let y = 0; y < sizeGameAreaX; y++) {
            let divCol = document.createElement('div');
            divCol.classList.add('col');

            divCol.id = 'col' + '_' + x + '_' + y;
            divRow.appendChild(divCol);
        }
        gameArea.appendChild(divRow);
    }
    document.body.appendChild(gameArea);
}