import {globalVars} from "../../globalVars";
import {generateL} from "../../fugure/l";


const testL = () => {
    const x = Math.floor(globalVars.sizeGameAreaX / 2);
    const y = Math.floor(globalVars.sizeGameAreaY / 2);
    let {elements: currenActiveELement, paint} = generateL(x, y);
    globalVars.currenActiveELement = currenActiveELement;
    paint(currenActiveELement);
}

export {testL};