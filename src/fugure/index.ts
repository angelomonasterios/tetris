import {generateSquare} from "./square";

export * from "./square";

export function getRandonElement(): HTMLElement[] {
    return generateSquare(7, 0)
}