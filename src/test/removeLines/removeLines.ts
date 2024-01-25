import {observeRows} from "../../collisionSystem/observeRows";
import {drawnLines} from "../drawnLines";

const removeLinesTest = () => {
    drawnLines(14, 4);
    drawnLines(15, 2);
    drawnLines(16, 0);
    drawnLines(17, 2);
    drawnLines(18, 1);
    drawnLines(19, 1);
    setTimeout(observeRows, 2000 )
}

export {removeLinesTest}