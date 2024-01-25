import {globalVars} from "../globalVars";

export function addScore(score) {
    var scoreElement = document.getElementById('score');
    scoreElement.innerHTML = score;
}

export function sumeScore() {
    let score = globalVars.score + globalVars.sizeGameAreaX;
    globalVars.score = score;
    addScore(score);
    increaseSpeed();
}

export function resetScore() {
    globalVars.score = 0;
    addScore(0);
}

export function increaseSpeed() {
    globalVars.speed = getLevelSpeed();
}

function getLevelSpeed() {
    let score = globalVars.score;

    if (score >= 500) {
        return 200;
    } else if (score >= 400) {
        return 250;
    } else if (score >= 300) {
        return 300;
    } else if (score >= 200) {
        return 350;
    } else if (score >= 100) {
        return 450;
    } else {
        return 600;
    }
}