import {globalVars} from "../../globalVars";
import {observeRows} from "../../observeRows";

const removeLinesTest = () => {
    const processRow = (rowIndex: number, adjustment: number) => {
        const rowChildren = document.getElementsByClassName('row')[rowIndex].childNodes;
        const midPoint = Math.round(globalVars.sizeGameAreaX / 2);

        rowChildren.forEach((x: any, key: number) => {
            if (key <= (midPoint - adjustment) || (midPoint + adjustment) <= key) {
                x["classList"].add('boxFixed');
            }
        });
    }

    processRow(14, 4);
    processRow(15, 2);
    processRow(16, 0);
    processRow(17, 2);
    processRow(18, 1);
    processRow(19, 1);

    setTimeout(observeRows, 2000 )

}

export {removeLinesTest}