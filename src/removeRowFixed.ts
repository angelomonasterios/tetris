function removeRowFixed(row) {
    document.getElementsByClassName('container')[0].childNodes[row].childNodes.forEach(
        (item) => {
            // @ts-ignore
            item.classList.remove('boxFixed');
        }
    )
}