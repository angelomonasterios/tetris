const sizeGameAreaX = 15;
const sizeGameAreaY = 20;

function initgrid(sizeGameAreaX, sizeGameAreaY) {
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

initgrid(sizeGameAreaX, sizeGameAreaY);

// obtego la grid de elementos
let grid = document.querySelectorAll('.col');

function generateSquare(x, y) {
    let square = [];
    let box1 = document.getElementById('col' + '_' + (0 + y) + '_' + x);
    let box2 = document.getElementById('col' + '_' + (0 + y) + '_' + (x + 1));
    let box3 = document.getElementById('col' + '_' + (1 + y) + '_' + (x));
    let box4 = document.getElementById('col' + '_' + (1 + y) + '_' + (x + 1));
    square.push(box1, box2, box3, box4);
    return square;
}

function paintSquare(square) {
    square.forEach(element => {
        element.classList.add('square');
    });
}

function getRandonElement() {
    return generateSquare(7, 0)
}

let currenActiveELement = getRandonElement();

paintSquare(currenActiveELement);


let colition = 0;

function drodDowncurrenElement() {
    let collectNewElements = [];
    for (let i = 0; i < currenActiveELement.length; i++) {
        let element = currenActiveELement[i];
        let box = element.id
        let type = element.classList[1];
        let boxX = parseInt(box.split('_')[2]);
        let boxY = parseInt(box.split('_')[1]);
        let nextElement = 'col' + '_' + (boxY + 1) + '_' + boxX;
        let newelement = [document.getElementById(nextElement), type];
        collectNewElements.push(newelement);
        element.classList.remove('square');
    }

    if (collectNewElements.some(element => element[0] == null) ||
        collectNewElements.some(element => element[0].classList.contains('boxFixed'))
    ) {
       if (collectNewElements.some(element => element[0].id.split('_')[1] === 0)) {
           alert('game over');
       }
        currenActiveELement.forEach(element => {
            element.classList.add('boxFixed');
        });

        currenActiveELement = getRandonElement();
        paintSquare(currenActiveELement);

        return;
    }

    currenActiveELement = collectNewElements.map(element => element[0]);

    for (let i = 0; i < collectNewElements.length; i++) {
        let element = collectNewElements[i];
        element[0].classList.add(element[1]);
    }
}

setInterval(drodDowncurrenElement, 700);


document.addEventListener('keydown', function (event) {
    if (event.key === 'keyLeft') {
        console.log('left');
        // mover a la izquierda

    }

});
