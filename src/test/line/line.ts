import {generateLine} from "../../fugure/line";
import {globalVars} from "../../globalVars";

const testLine = () => {
    const x = Math.floor(globalVars.sizeGameAreaX / 2);
    const y = Math.floor(globalVars.sizeGameAreaY / 2);

    let {elements: currenActiveELement, paint} = generateLine(x, y);

    globalVars.currenActiveELement = currenActiveELement;
    paint(currenActiveELement);
}


export {testLine};


