import {globalVars} from "./globalVars";

function muveDownFixedBox() {

    let listElementToDown = document.getElementsByClassName('boxFixed');
    let listElementToDownArray = Array.from(listElementToDown);
    let listElementToDownArraySort = listElementToDownArray.sort((a, b) => {
        return parseInt(b.id.split('_')[1]) - parseInt(a.id.split('_')[1]);
    });

    let listOfpositionToBeDown = listElementToDownArraySort.map(element => {
        return {y: parseInt(element.id.split('_')[1]), x: parseInt(element.id.split('_')[2])};
    });

    // remueve los viejos elementos
    listElementToDownArraySort.forEach(element => {
        element.classList.remove('boxFixed');
    });

    // genera los nuevos elementos
    for (let i = 0; i < globalVars.sizeGameAreaY; i++) {
        listOfpositionToBeDown.forEach(element => {
            let next = element.y + 1;
            if (next >= globalVars.sizeGameAreaY) {
                return;
            }
            if (document.getElementById('col' + '_' + (element.y + 1) + '_' + element.x).classList.contains('boxFixed')) {
                return;
            }

            return document.getElementById('col' + '_' + (element.y + 1) + '_' + element.x).classList.add('boxFixed');
        });
    }

}