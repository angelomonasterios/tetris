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

export function observeRows(): void {
    const container = (
        document.getElementsByClassName('container')[0] as unknown as CustomNode
    ).childNodes;

    let removedRows = 0;
    container.forEach((item: CustomNode, key) => {
        if (isRowFullyFixed(item)) {
            removeRowFixed(key);
            removedRows++;
        }
    });

    if (removedRows == 0) {
        return;
    }

    for (let i = 0; i < removedRows; i++) {
        const boxFixed = document.getElementsByClassName('boxFixed');
        for (let i = boxFixed.length - 1; i >= 0; i--) {
            const item = boxFixed[i];
            const [col, row] = item.id.split('_').slice(1);
            if (Number(row) > globalVars.sizeGameAreaY - 1) {
                continue;
            }

            const elementBelow = document.getElementById(`col_${Number(col) + 1}_${Number(row)}`);
            console.log(elementBelow);
            console.log(`col_${Number(col) + 1}_${Number(row)}`);

            if (elementBelow.classList.contains('boxFixed')) {
                continue;
            }

            elementBelow.classList.add('boxFixed');
            item.classList.remove('boxFixed');
        }
    }
}