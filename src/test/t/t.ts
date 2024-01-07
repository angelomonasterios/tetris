import {globalVars} from "../../globalVars";
import {generateT} from "../../fugure/t";


const testT = () => {
    const x = Math.floor(globalVars.sizeGameAreaX / 2);
    const y = Math.floor(globalVars.sizeGameAreaY / 2);
    let {elements: currenActiveELement, paint} = generateT(x, y);
    globalVars.currenActiveELement = currenActiveELement;
    paint(currenActiveELement);
}

export {testT};