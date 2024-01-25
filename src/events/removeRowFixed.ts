interface CustomNode extends ChildNode, ParentNode {
    getElementsByClassName(className: string): any[];

    classList: DOMTokenList;
}

function removeRowFixed(index: number): void {
    const containerNode = document.getElementsByClassName('container')[0] as unknown as CustomNode;
    const targetNode = containerNode.childNodes[index] as unknown as CustomNode;

    targetNode.childNodes.forEach((item) => {
        const itemNode = item as unknown as CustomNode;
        itemNode.classList.remove('boxFixed');
    });
}

export {removeRowFixed};