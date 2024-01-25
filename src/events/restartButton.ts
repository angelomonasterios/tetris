export function restartButton() {
    let button = document.getElementById('restart');
    button.addEventListener('click', () => {
        location.reload();
    });
}