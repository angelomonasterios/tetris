import {generateSquare} from "./square";
import {generateLine} from "./line";

export type figure = {
    elements: HTMLElement[],
    paint: (elements: HTMLElement[]) => void
}

const intPosition = {x: 7, y: 0};
const figures = [  generateSquare, generateLine];


export function getRandonElement(): figure {
    const random = Math.floor(Math.random() * figures.length);
    return figures[random](intPosition.x, intPosition.y)

}
