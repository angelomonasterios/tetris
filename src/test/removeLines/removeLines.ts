import {globalVars} from "../../globalVars";
import {observeRows} from "../../observeRows";

const removeLinesTest = () => {
    const processRow = (rowIndex: number, adjustment: number) => {
        const rowChildren = document.getElementsByClassName('row')[rowIndex].childNodes;
        const midPoint = globalVars.sizeGameAreaX / 2;
        rowChildren.forEach((x: any, key: number) => {
            if (key < (midPoint - adjustment) || (midPoint + adjustment) < key) {
                x["classList"].add('boxFixed');
            }
        });
    }

    processRow(17, 2);
    processRow(16, 3);
    processRow(16, 4);
    processRow(18, 0);
    processRow(19, 0);

    setTimeout(observeRows, 2000 )

}

export {removeLinesTest}