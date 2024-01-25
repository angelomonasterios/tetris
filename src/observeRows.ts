import {removeRowFixed} from "./removeRowFixed";
import {globalVars} from "./globalVars";

interface CustomNode extends ChildNode, ParentNode {
    getElementsByClassName(className: string): any[];
}

function isRowFullyFixed(row: CustomNode): boolean {
    const childNodesLength = row.childNodes.length;
    const fixedElementsLength = row.getElementsByClassName('boxFixed').length;

    return childNodesLength === fixedElementsLength;
}


const BOX_FIXED_CLASS = 'boxFixed';
const CONTAINER_CLASS = 'container';

function handleBoxFixedElem(removedRows: number) {
    for (let i = 0; i < removedRows; i++) {
        const boxFixed = document.getElementsByClassName(BOX_FIXED_CLASS);
        for (let i = boxFixed.length - 1; i >= 0; i--) {
            const item = boxFixed[i];
            const [colString, rowString] = item.id.split('_').slice(1);
            const row:number = Number(rowString);
            const col: number = Number(colString);

            console.log(row, globalVars.sizeGameAreaY - 1);
            if (row >= globalVars.sizeGameAreaY - 1) {
                continue;
            }

            const elemId = `col_${col + 1}_${row}`;
            const elementBelow = document.getElementById(elemId);

            if (!elementBelow || elementBelow.classList.contains(BOX_FIXED_CLASS)) {
                continue;
            }

            elementBelow.classList.add(BOX_FIXED_CLASS);
            item.classList.remove(BOX_FIXED_CLASS);
        }
    }
}

export function observeRows(): void {
    const container = (
        document.getElementsByClassName(CONTAINER_CLASS)[0] as unknown as CustomNode
    ).childNodes;

    let removedRows = 0;
    for (let i = container.length - 1; i >= 0; i--) {
        const row = container[i] as unknown as CustomNode;
        if (isRowFullyFixed(row)) {
            removeRowFixed(i);
            removedRows++;
        }
    }

    if (removedRows === 0) {
        return;
    }

    handleBoxFixedElem(removedRows);
}